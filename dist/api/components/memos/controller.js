"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemosController = void 0;
const model_1 = require("./model");
class MemosController {
    constructor() {
        this.getMock = (req, res, next) => {
            res.send({ data: model_1.Memo.getMemoMock() });
        };
        //db instance
        //crud methods
    }
}
exports.MemosController = MemosController;
//# sourceMappingURL=controller.js.map