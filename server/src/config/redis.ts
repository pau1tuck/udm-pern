import redis from "redis";
import connectRedis from "connect-redis";
import session from "express-session";

export const RedisStore = connectRedis(session);
export const redisClient = redis.createClient();
