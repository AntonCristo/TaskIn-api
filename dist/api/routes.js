"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRestRoutes = void 0;
const components_1 = require("./components");
const middleware_1 = require("./middleware");
/**
 * Init Express REST routes
 *
 * @param {Router} router
 * @returns {void}
 */
const initRestRoutes = (router) => {
    const prefix = "/api";
    router.get(prefix, (req, res) => res.send("PING"));
    (0, middleware_1.registerMiddleware)(router);
    (0, components_1.registerApiRoutes)(router, prefix);
    // registerErrorHandler(router);
};
exports.initRestRoutes = initRestRoutes;
//# sourceMappingURL=routes.js.map