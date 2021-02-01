"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVerificationUrl = void 0;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const redis_1 = require("../config/redis");
const createVerificationUrl = (userId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const token = jsonwebtoken_1.default.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
        data: userId,
    }, "secret");
    yield redis_1.redisClient.set(token, userId, "ex", 60 * 60 * 24);
    return `http://localhost:8000/verify/${token}`;
});
exports.createVerificationUrl = createVerificationUrl;
//# sourceMappingURL=create-verification-url.js.map