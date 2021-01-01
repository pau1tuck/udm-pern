"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const argon2_1 = tslib_1.__importDefault(require("argon2"));
const user_1 = require("../entities/user");
const check_permissions_1 = require("../utils/check-permissions");
let UserResolver = class UserResolver {
    Users() {
        return user_1.User.find();
    }
    CurrentUser({ req }) {
        if (!req.session.userId) {
            return null;
        }
        return user_1.User.findOne(req.session.userId);
    }
    Register(firstName, lastName, country, email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const encryptedPassword = yield argon2_1.default.hash(password);
            try {
                yield user_1.User.insert({
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
            const user = yield user_1.User.findOne({ where: { email } });
            if (!user) {
                throw new Error("Email address not registered");
            }
            const checkPassword = yield argon2_1.default.verify(user.password, password);
            if (!checkPassword) {
                throw new Error("Incorrect password");
            }
            if (!user.verified) {
                throw new Error("Email address not verified");
            }
            ctx.req.session.userId = user.id;
            ctx.req.session.isAdmin = user.isAdmin;
            return user;
        });
    }
    Logout({ req, res }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => req.session.destroy((err) => {
                res.clearCookie("sid");
                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }
                resolve(true);
            }));
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [user_1.User]),
    type_graphql_1.UseMiddleware(check_permissions_1.isAdmin),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "Users", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => user_1.User, { nullable: true }),
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
    type_graphql_1.Mutation(() => user_1.User, { nullable: true }),
    tslib_1.__param(0, type_graphql_1.Arg("email")),
    tslib_1.__param(1, type_graphql_1.Arg("password")),
    tslib_1.__param(2, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "Login", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => Boolean),
    tslib_1.__param(0, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserResolver.prototype, "Logout", null);
UserResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(user_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user-resolver.js.map