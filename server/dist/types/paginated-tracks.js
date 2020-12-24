"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedTracks = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const track_1 = require("../entities/track");
let PaginatedTracks = class PaginatedTracks {
};
tslib_1.__decorate([
    type_graphql_1.Field(() => [track_1.Track]),
    tslib_1.__metadata("design:type", Array)
], PaginatedTracks.prototype, "tracks", void 0);
tslib_1.__decorate([
    type_graphql_1.Field(),
    tslib_1.__metadata("design:type", Boolean)
], PaginatedTracks.prototype, "hasMore", void 0);
PaginatedTracks = tslib_1.__decorate([
    type_graphql_1.ObjectType()
], PaginatedTracks);
exports.PaginatedTracks = PaginatedTracks;
//# sourceMappingURL=paginated-tracks.js.map