"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let Track = class Track extends typeorm_1.BaseEntity {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    tslib_1.__metadata("design:type", String)
], Track.prototype, "id", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Track.prototype, "artist", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Track.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Track.prototype, "version", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Track.prototype, "label", void 0);
tslib_1.__decorate([
    type_graphql_1.Field((_type) => String),
    typeorm_1.Column({ nullable: true, default: "" }),
    tslib_1.__metadata("design:type", String)
], Track.prototype, "image", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], Track.prototype, "trackUrl", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], Track.prototype, "buyUrl", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: "int", default: 0 }),
    tslib_1.__metadata("design:type", Number)
], Track.prototype, "votes", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], Track.prototype, "createdAt", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], Track.prototype, "updatedAt", void 0);
Track = tslib_1.__decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Track);
exports.Track = Track;
//# sourceMappingURL=track.js.map