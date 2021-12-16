"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoDBModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const memoSchema = new mongoose_1.default.Schema({
    version: { type: String, required: true },
    uuid: { type: String, required: true },
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    creationDate: { type: String, required: true },
    dueDate: { type: Number, required: true },
    content: { type: String, required: true },
    isDone: { type: Boolean, required: true },
    isDeleted: { type: Boolean, required: true },
    hashtag: { type: [String], required: true },
}, { collection: "memo" });
exports.MemoDBModel = mongoose_1.default.model("memo", memoSchema);
//# sourceMappingURL=mongoose.js.map