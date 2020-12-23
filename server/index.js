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
require("dotenv/config.js");
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const redis_1 = require("./server/config/redis");
const express_session_1 = __importDefault(require("express-session"));
const typeorm_1 = require("typeorm");
const database_1 = __importDefault(require("./server/config/database"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const UserResolver_1 = require("./server/resolvers/UserResolver");
const cors_1 = __importDefault(require("cors"));
const TrackResolver_1 = require("./server/resolvers/TrackResolver");
const __production = process.env.NODE_ENV === "production";
const server = () => __awaiter(void 0, void 0, void 0, function* () {
    const _orm = yield typeorm_1.createConnection(database_1.default);
    const app = express_1.default();
    app.disable("x-powered-by");
    app.use(cors_1.default({
        origin: "*",
        optionsSuccessStatus: 200,
        credentials: false,
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
            secure: __production,
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
        context: ({ req, res }) => ({ req, res }),
    });
    apolloServer.applyMiddleware({ app });
    app.use(express_1.default.static(path_1.default.join(__dirname + "/web/public")));
    app.get(["/", "/*"], (_req, res) => {
        res.status(200);
        res.sendFile(path_1.default.join(__dirname, "/web/public/", "index.html"));
        res.end();
    });
    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}.`);
    });
});
server().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map