"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerApiRoutes = void 0;
const routes_1 = require("./memos/routes");
const registerApiRoutes = (router, prefix) => {
    router.use(`${prefix}/memos`, new routes_1.MemosRoutes().router);
};
exports.registerApiRoutes = registerApiRoutes;
//# sourceMappingURL=index.js.map