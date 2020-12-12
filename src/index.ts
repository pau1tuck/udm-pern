import "reflect-metadata";
import "dotenv/config.js";
import path from "path";
import express, { Express, Request, Response } from "express";

import { RedisStore, redisClient } from "./server/config/redis";
import session from "express-session";

import { createConnection, Connection } from "typeorm";
import database from "./server/config/database";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./server/resolvers/UserResolver";

import cors from "cors";

const __production: boolean = process.env.NODE_ENV === "production";

const server = async () => {
    const orm: Connection = await createConnection(database);

    const app: Express = express();

    app.disable("x-powered-by");

    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            optionsSuccessStatus: 200,
            credentials: true,
        })
    );

    app.use(
        session({
            name: "sid",
            store: new RedisStore({
                client: redisClient as any,
                disableTouch: true,
                disableTTL: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365,
                httpOnly: true,
                sameSite: "lax", // set true
                secure: __production,
            },
            secret: process.env.SESSION_SECRET || "secret",
            resave: false,
            saveUninitialized: false,
        })
    );

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver],
            validate: false,
        }),
        context: ({ req, res }: any) => ({ req, res }),
    });

    apolloServer.applyMiddleware({ app });

    app.use("/static", express.static(path.join(__dirname, "/public")));

    app.get("/", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname + "/web/build/index.html"));
    });

    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}.`);
    });
};
server().catch((err) => {
    console.error(err);
});
