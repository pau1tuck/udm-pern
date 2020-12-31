import jwt from "jsonwebtoken";
import { redisClient } from "../config/redis";

export const createVerificationUrl = async (userId: string) => {
    const token = jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
            data: userId,
        },
        "secret"
    );
    await redisClient.set(token, userId, "ex", 60 * 60 * 24);
    return `http://localhost:8000/verify/${token}`;
};
