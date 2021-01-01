import path from "path";
import { createConnection } from "typeorm";
import { User } from "../entities/user";
import { Track } from "../entities/track";

export default {
    type: "postgres",
    url: process.env.DB_URI,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: process.env.NODE_ENV !== "production",
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
    entities: [User, Track],
    migrations: [path.join(__dirname, "/migrations/**/*.ts")],
    subscribers: [path.join(__dirname, "/subscribers/**/*.ts")],
    cli: {
        migrationsDir: path.join(__dirname, "/migrations"),
    },
} as Parameters<typeof createConnection>[0];
