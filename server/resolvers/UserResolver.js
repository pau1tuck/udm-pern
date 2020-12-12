"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const argon2_1 = tslib_1.__importDefault(require("argon2"));
const User_1 = require("../entities/User");
const permissions_1 = require("../utils/permissions");
let UserResolver = class UserResolver {
    Users() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield User_1.User.find();
        });
    }
    CurrentUser({ req }) {
        if (!req.session.userId) {
            return null;
        }
        return User_1.User.findOne(req.session.userId);
    }
    Register(firstName, lastName, country, email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
tslib_1.__decorate([
    type_graphql_1.Query(() => [User_1.User]),
    type_graphql_1.UseMiddleware(permissions_1.isAdmin),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "Users", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => User_1.User, { nullable: true }),
    tslib_1.__param(0, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserResolver.prototype, "CurrentUser", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => Boolean),
    tslib_1.__param(0, type_graphql_1.Arg("firstName")),
    tslib_1.__param(1, type_graphql_1.Arg("lastName")),
    tslib_1.__param(2, type_graphql_1.Arg("country")),
    tslib_1.__param(3, type_graphql_1.Arg("email")),
    tslib_1.__param(4, type_graphql_1.Arg("password")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "Register", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => User_1.User, { nullable: true }),
    tslib_1.__param(0, type_graphql_1.Arg("email")),
    tslib_1.__param(1, type_graphql_1.Arg("password")),
    tslib_1.__param(2, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "Login", null);
UserResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolver.js.map