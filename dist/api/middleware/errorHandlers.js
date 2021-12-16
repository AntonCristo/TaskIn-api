"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerErrorHandler = void 0;
function registerErrorHandler(router) {
    router.use((err, req, res, next) => {
        console.error("[ErrorLogger]: ", err);
        return res.status(500).json({
            error: err.message || err,
            status: 500,
        });
    });
}
exports.registerErrorHandler = registerErrorHandler;
//# sourceMappingURL=errorHandlers.js.map