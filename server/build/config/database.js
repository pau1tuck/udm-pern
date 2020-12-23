"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const User_1 = require("../entities/User");
exports.default = {
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
    entities: [User_1.User],
    migrations: [path_1.default.join(__dirname, "/migrations/**/*.ts")],
    subscribers: [path_1.default.join(__dirname, "/subscribers/**/*.ts")],
};
//# sourceMappingURL=database.js.map