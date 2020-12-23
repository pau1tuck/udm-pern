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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Track = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let Track = class Track extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Track.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Track.prototype, "artist", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Track.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Track.prototype, "version", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Track.prototype, "label", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Track.prototype, "youTubeId", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Track.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Track.prototype, "updatedAt", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column({ type: "int", default: 0 }),
    __metadata("design:type", Number)
], Track.prototype, "votes", void 0);
Track = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Track);
exports.Track = Track;
//# sourceMappingURL=Track.js.map