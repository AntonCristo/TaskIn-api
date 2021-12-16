"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemosController = void 0;
const model_1 = require("./model");
const mongoose_1 = require("./mongoose");
class MemosController {
    constructor() {
        this.getAllMemos = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                res.send("get all memos handler");
            }
            catch (err) {
                return next(err);
            }
        });
        this.postMockMemo = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const mock = model_1.Memo.getMemoMock();
                const memo = new mongoose_1.MemoDBModel(mock);
                yield memo.save();
                console.log("saved");
                res.send({ data: mock });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.MemosController = MemosController;
//# sourceMappingURL=controller.js.map