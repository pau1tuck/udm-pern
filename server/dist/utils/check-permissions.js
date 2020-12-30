"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdmin = exports.isAuthenticated = void 0;
const isAuthenticated = ({ context }, next) => {
    if (!context.req.session.userId) {
        throw new Error("User not authenticated");
    }
    return next();
};
exports.isAuthenticated = isAuthenticated;
const isAdmin = ({ context }, next) => {
    if (!context.req.session.isAdmin) {
        throw new Error("User does not have admin rights");
    }
    return next();
};
exports.isAdmin = isAdmin;
//# sourceMappingURL=check-permissions.js.map