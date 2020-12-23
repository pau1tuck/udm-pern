"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackResolver = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Track_1 = require("../entities/Track");
const permissions_1 = require("../utils/permissions");
let TrackInput = class TrackInput {
};
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], TrackInput.prototype, "artist", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], TrackInput.prototype, "title", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], TrackInput.prototype, "version", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], TrackInput.prototype, "label", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], TrackInput.prototype, "youTubeId", void 0);
TrackInput = tslib_1.__decorate([
    type_graphql_1.InputType()
], TrackInput);
let PaginatedTracks = class PaginatedTracks {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => [Track_1.Track]),
    tslib_1.__metadata("design:type", Array)
], PaginatedTracks.prototype, "tracks", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Boolean)
], PaginatedTracks.prototype, "hasMore", void 0);
PaginatedTracks = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], PaginatedTracks);
let TrackResolver = class TrackResolver {
    Tracks() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield Track_1.Track.find();
        });
    }
    Track(id) {
        return Track_1.Track.findOne(id);
    }
    createTrack(input, { req }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return Track_1.Track.create(Object.assign({}, input)).save();
        });
    }
    updateTrack(id, artist, title, version, label, youTubeId, { req }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .update(Track_1.Track)
                .set({ artist, title, version, label })
                .where("id = :id", {
                id,
            })
                .returning("*")
                .execute();
            return result.raw[0];
        });
    }
    deleteTrack(id, { req }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield Track_1.Track.delete({ id });
            return true;
        });
    }
};
tslib_1.__decorate([
    type_graphql_1.Query(() => [Track_1.Track]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], TrackResolver.prototype, "Tracks", null);
tslib_1.__decorate([
    type_graphql_1.Query(() => Track_1.Track, { nullable: true }),
    tslib_1.__param(0, type_graphql_1.Arg("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TrackResolver.prototype, "Track", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => Track_1.Track),
    type_graphql_1.UseMiddleware(permissions_1.isAdmin),
    tslib_1.__param(0, type_graphql_1.Arg("input")),
    tslib_1.__param(1, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TrackInput, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TrackResolver.prototype, "createTrack", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => Track_1.Track, { nullable: true }),
    type_graphql_1.UseMiddleware(permissions_1.isAdmin),
    tslib_1.__param(0, type_graphql_1.Arg("id")),
    tslib_1.__param(1, type_graphql_1.Arg("artist")),
    tslib_1.__param(2, type_graphql_1.Arg("title")),
    tslib_1.__param(3, type_graphql_1.Arg("version")),
    tslib_1.__param(4, type_graphql_1.Arg("label")),
    tslib_1.__param(5, type_graphql_1.Arg("youTubeId")),
    tslib_1.__param(6, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String, String, String, String, String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TrackResolver.prototype, "updateTrack", null);
tslib_1.__decorate([
    type_graphql_1.Mutation(() => Boolean),
    type_graphql_1.UseMiddleware(permissions_1.isAdmin),
    tslib_1.__param(0, type_graphql_1.Arg("id")),
    tslib_1.__param(1, type_graphql_1.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TrackResolver.prototype, "deleteTrack", null);
TrackResolver = tslib_1.__decorate([
    type_graphql_1.Resolver(Track_1.Track)
], TrackResolver);
exports.TrackResolver = TrackResolver;
//# sourceMappingURL=TrackResolver.js.map