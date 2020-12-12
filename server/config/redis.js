"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = exports.RedisStore = void 0;
const tslib_1 = require("tslib");
const redis_1 = tslib_1.__importDefault(require("redis"));
const connect_redis_1 = tslib_1.__importDefault(require("connect-redis"));
const express_session_1 = tslib_1.__importDefault(require("express-session"));
exports.RedisStore = connect_redis_1.default(express_session_1.default);
exports.redisClient = redis_1.default.createClient();
//# sourceMappingURL=redis.js.map