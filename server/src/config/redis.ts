import connectRedis from "connect-redis";
import Redis from "ioredis";
import { RedisCache } from "apollo-server-cache-redis";
import session from "express-session";

export const RedisStore = connectRedis(session);
export const redisClient = new Redis(process.env.REDIS_URI);
export const redisCache = new RedisCache({
    host: process.env.REDIS_URI,
});
