"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackInput = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
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
exports.TrackInput = TrackInput;
//# sourceMappingURL=track-input.js.map