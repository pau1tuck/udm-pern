"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const typeorm_1 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const cors_1 = __importDefault(require("cors"));
const UserResolver_1 = require("./resolvers/UserResolver");
const database_1 = __importDefault(require("./config/database"));
const redis_1 = require("./config/redis");
const TrackResolver_1 = require("./resolvers/TrackResolver");
const PRODUCTION = process.env.NODE_ENV === "production";
const server = () => __awaiter(void 0, void 0, void 0, function* () {
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
    const graphQLSchema = yield type_graphql_1.buildSchema({
        resolvers: [UserResolver_1.UserResolver, TrackResolver_1.TrackResolver],
        validate: false,
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: graphQLSchema,
        context: ({ req, res }) => ({ req, res, redisClient: redis_1.redisClient }),
    });
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}.`);
    });
});
server().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map