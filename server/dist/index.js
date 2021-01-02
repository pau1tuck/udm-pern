"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
require("dotenv/config");
const path_1 = tslib_1.__importDefault(require("path"));
const uuid_1 = require("uuid");
const express_1 = tslib_1.__importDefault(require("express"));
const express_session_1 = tslib_1.__importDefault(require("express-session"));
const typeorm_1 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const cors_1 = tslib_1.__importDefault(require("cors"));
const database_1 = tslib_1.__importDefault(require("./config/database"));
const redis_1 = require("./config/redis");
const track_1 = require("./entities/track");
const user_resolver_1 = require("./resolvers/user.resolver");
const track_resolver_1 = require("./resolvers/track.resolver");
const constants_1 = require("./config/constants");
const PRODUCTION = process.env.NODE_ENV === "production";
const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = parseInt(process.env.PORT, 10) || 5000;
const server = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const orm = yield typeorm_1.createConnection(database_1.default);
    const app = express_1.default();
    app.disable("x-powered-by");
    app.set("trust proxy", 1);
    app.use(cors_1.default({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }));
    app.use(express_session_1.default({
        name: "sid",
        genid: (req) => uuid_1.v4(),
        store: new redis_1.RedisStore({
            client: redis_1.redisClient,
            disableTouch: true,
            disableTTL: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365,
            httpOnly: true,
            sameSite: "lax",
            secure: PRODUCTION,
        },
        secret: process.env.SESSION_SECRET || "secret",
        resave: false,
        saveUninitialized: false,
    }));
    app.use("/media", express_1.default.static(path_1.default.join(`${__dirname}/media`)));
    const graphQLSchema = yield type_graphql_1.buildSchema({
        resolvers: [user_resolver_1.UserResolver, track_resolver_1.TrackResolver],
        validate: false,
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: graphQLSchema,
        context: ({ req, res }) => ({ req, res, redisClient: redis_1.redisClient }),
    });
    apolloServer.applyMiddleware({ app, cors: false });
    yield redis_1.redisClient.del(constants_1.TRACKS_CACHE_KEY);
    const allTracks = yield typeorm_1.getConnection()
        .getRepository(track_1.Track)
        .createQueryBuilder("t")
        .orderBy('t."createdAt"', "DESC")
        .getMany();
    const tracks = allTracks.map((track) => JSON.stringify(track));
    yield redis_1.redisClient.lpush(constants_1.TRACKS_CACHE_KEY, ...tracks);
    console.log(yield redis_1.redisClient.lrange(constants_1.TRACKS_CACHE_KEY, 0, -1));
    if (orm.isConnected) {
        console.log("📙 Connected to PostgreSQL database.");
    }
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}.`);
    });
});
server().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map