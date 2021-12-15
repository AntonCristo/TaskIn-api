"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemosRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class MemosRoutes {
    constructor() {
        this.controller = new controller_1.MemosController();
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get("/mock", this.controller.getMock);
    }
}
exports.MemosRoutes = MemosRoutes;
//# sourceMappingURL=routes.js.map