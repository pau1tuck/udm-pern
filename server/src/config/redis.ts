import connectRedis from "connect-redis";
import Redis from "ioredis";
import session from "express-session";

export const RedisStore = connectRedis(session);
export const redisClient = new Redis(process.env.REDIS_URI);
