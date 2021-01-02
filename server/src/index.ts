import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { v4 } from "uuid";
import express, { Express, Request, Response } from "express";

import session from "express-session";

import { createConnection, getConnection, Connection } from "typeorm";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cors from "cors";

import database from "./config/database";
import { RedisStore, redisClient } from "./config/redis";

import { Track } from "./entities/track";

import { UserResolver } from "./resolvers/user.resolver";
import { TrackResolver } from "./resolvers/track.resolver";

import { TRACKS_CACHE_KEY } from "./config/constants";

const PRODUCTION: boolean = process.env.NODE_ENV === "production";
const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = parseInt(process.env.PORT, 10) || 5000;

const server = async () => {
    const orm: Connection = await createConnection(database);

    const app: Express = express();

    app.disable("x-powered-by");

    app.set("trust proxy", 1);
    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true,
        })
    );

    app.use(
        session({
            name: "sid",
            genid: (req: Request) => v4(),
            store: new RedisStore({
                client: redisClient as any,
                disableTouch: true,
                disableTTL: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365,
                httpOnly: true,
                sameSite: "lax", // set true
                secure: PRODUCTION,
            },
            secret: process.env.SESSION_SECRET || "secret",
            resave: false,
            saveUninitialized: false,
        })
    );

    app.use("/media", express.static(path.join(`${__dirname}/media`))); // optionally one can add some route handler to protect this resource

    const graphQLSchema = await buildSchema({
        resolvers: [UserResolver, TrackResolver],
        validate: false,
    });

    const apolloServer = new ApolloServer({
        schema: graphQLSchema,
        context: ({ req, res }) => ({ req, res, redisClient }),
    });

    apolloServer.applyMiddleware({ app, cors: false });

    /* app.use("*", (req: Request, res: Response) => {
        res.status(200);
        res.sendFile(path.join(`${__dirname}/public/index.html`));
        res.end();
    });

    /* app.get("*", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname + "/web/public/index.html"));
    }); */

    await redisClient.del(TRACKS_CACHE_KEY);
    // const allTracks = await Track.find();
    const allTracks = await getConnection()
        .getRepository(Track)
        .createQueryBuilder("t")
        .orderBy('t."createdAt"', "DESC")
        .getMany();
    const tracks = allTracks.map((track: any) => JSON.stringify(track));
    await redisClient.lpush(TRACKS_CACHE_KEY, ...tracks);
    console.log(await redisClient.lrange(TRACKS_CACHE_KEY, 0, -1));

    if (orm.isConnected) {
        console.log("📙 Connected to PostgreSQL database.");
    }
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}.`);
    });
};

server().catch((err) => {
    console.error(err);
});
