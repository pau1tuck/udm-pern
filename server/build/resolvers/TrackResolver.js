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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Track_1 = require("../entities/Track");
const TrackInput_1 = require("../types/TrackInput");
const PaginatedTracks_1 = require("../types/PaginatedTracks");
const permissions_1 = require("../utils/permissions");
let TrackResolver = class TrackResolver {
    Tracks(limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const tracks = yield typeorm_1.getConnection()
                .getRepository(Track_1.Track)
                .createQueryBuilder("t")
                .orderBy('t."createdAt"', "DESC")
                .getMany();
            return {
                tracks,
                hasMore: tracks.length === limit + 1,
            };
        });
    }
    Track(id) {
        return Track_1.Track.findOne(id);
    }
    CreateTrack(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return Track_1.Track.create(Object.assign({}, input)).save();
        });
    }
    UpdateTrack(id, artist, title, version, label, youTubeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(Track_1.Track)
                .set({ artist, title, version, label, youTubeId })
                .where("id = :id", {
                id,
            })
                .returning("*")
                .execute();
            return result.raw[0];
        });
    }
    DeleteTrack(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Track_1.Track.delete({ id });
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => PaginatedTracks_1.PaginatedTracks),
    __param(0, type_graphql_1.Arg("limit", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "Tracks", null);
__decorate([
    type_graphql_1.Query(() => Track_1.Track, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "Track", null);
__decorate([
    type_graphql_1.Mutation(() => Track_1.Track),
    type_graphql_1.UseMiddleware(permissions_1.isAdmin),
    __param(0, type_graphql_1.Arg("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TrackInput_1.TrackInput]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "CreateTrack", null);
__decorate([
    type_graphql_1.Mutation(() => Track_1.Track, { nullable: true }),
    type_graphql_1.UseMiddleware(permissions_1.isAdmin),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("artist")),
    __param(2, type_graphql_1.Arg("title")),
    __param(3, type_graphql_1.Arg("version")),
    __param(4, type_graphql_1.Arg("label")),
    __param(5, type_graphql_1.Arg("youTubeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "UpdateTrack", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    type_graphql_1.UseMiddleware(permissions_1.isAdmin),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrackResolver.prototype, "DeleteTrack", null);
TrackResolver = __decorate([
    type_graphql_1.Resolver(Track_1.Track)
], TrackResolver);
exports.TrackResolver = TrackResolver;
//# sourceMappingURL=TrackResolver.js.map