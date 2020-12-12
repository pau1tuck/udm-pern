"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let User = class User extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ length: 128, nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ length: 128, nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ length: 128, nullable: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "country", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isMember", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "isAdmin", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = tslib_1.__decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map