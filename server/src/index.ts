/* eslint-disable no-console */
import "reflect-metadata";
import "dotenv/config";
import path from "path";
import express, { Express, Request, Response } from "express";

import session from "express-session";

import { createConnection, Connection } from "typeorm";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cors from "cors";

import database from "./config/database";
import { RedisStore, redisClient } from "./config/redis";

import { UserResolver } from "./resolvers/UserResolver";
import { TrackResolver } from "./resolvers/TrackResolver";

const PRODUCTION: boolean = process.env.NODE_ENV === "production";
const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = process.env.PORT || 5000;

const server = async () => {
	const orm: Connection = await createConnection(database);

	const app: Express = express();

	app.disable("x-powered-by");

	app.set("trust proxy", 1);
	app.use(
		cors({
			origin: process.env.CORS_ORIGIN,
			credentials: true
		})
	);

	app.use(
		session({
			name: "sid",
			store: new RedisStore({
				client: redisClient as any,
				disableTouch: true,
				disableTTL: true
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 365,
				httpOnly: true,
				sameSite: "lax", // set true
				secure: PRODUCTION
			},
			secret: process.env.SESSION_SECRET || "secret",
			resave: false,
			saveUninitialized: false
		})
	);

	const graphQLSchema = await buildSchema({
		resolvers: [ UserResolver, TrackResolver ],
		validate: false
	});

	const apolloServer = new ApolloServer({
		schema: graphQLSchema,
		context: ({ req, res }) => ({ req, res, redisClient })
	});

	apolloServer.applyMiddleware({ app, cors: false });

	/*
    app.use(express.static(path.join(`${__dirname}/web/public`))); // optionally one can add some route handler to protect this resource

    /*
    app.use("*", (req: Request, res: Response) => {
        res.status(200);
        res.sendFile(path.join(__dirname + "/web/public/index.html"));
        res.end();
    }); 

    app.get(["/", "/*"], (_req: Request, res: Response) => {
        // this is required to support any client side routing written in react.
        res.status(200);
        res.sendFile(path.join(__dirname, "/web/public/", "index.html"));
        res.end();
    });

    /* app.get("*", (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname + "/web/public/index.html"));
    }); */
	app.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}.`);
	});
};
server().catch((err) => {
	console.error(err);
});
