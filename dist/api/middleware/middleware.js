"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMiddleware = void 0;
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const registerMiddleware = (app) => {
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
};
exports.registerMiddleware = registerMiddleware;
//# sourceMappingURL=middleware.js.map