"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const argon2_1 = __importDefault(require("argon2"));
const User_1 = require("../entities/User");
const permissions_1 = require("../utils/permissions");
let UserResolver = class UserResolver {
    Users() {
        return User_1.User.find();
    }
    CurrentUser({ req }) {
        if (!req.session.userId) {
            return null;
        }
        return User_1.User.findOne(req.session.userId);
    }
    Register(firstName, lastName, country, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const encryptedPassword = yield argon2_1.default.hash(password);
            try {
                yield User_1.User.insert({
                    firstName,
                    lastName,
                    country,
                    email,
                    password: encryptedPassword,
                });
            }
            catch (err) {
                console.log(err);
                return false;
            }
            return true;
        });
    }
    Login(email, password, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { email } });
            if (!user) {
                throw new Error("User not registered");
            }
            const verify = yield argon2_1.default.verify(user.password, password);
            if (!verify) {
                throw new Error("Incorrect password");
            }
            ctx.req.session.userId = user.id;
            return user;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [User_1.User]),
    type_graphql_1.UseMiddleware(permissions_1.isAdmin),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "Users", null);
__decorate([
    type_graphql_1.Query(() => User_1.User, { nullable: true }),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "CurrentUser", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("firstName")),
    __param(1, type_graphql_1.Arg("lastName")),
    __param(2, type_graphql_1.Arg("country")),
    __param(3, type_graphql_1.Arg("email")),
    __param(4, type_graphql_1.Arg("password")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "Register", null);
__decorate([
    type_graphql_1.Mutation(() => User_1.User, { nullable: true }),
    __param(0, type_graphql_1.Arg("email")),
    __param(1, type_graphql_1.Arg("password")),
    __param(2, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "Login", null);
UserResolver = __decorate([
    type_graphql_1.Resolver(User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolver.js.map