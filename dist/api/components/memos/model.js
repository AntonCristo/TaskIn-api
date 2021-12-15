"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memo = void 0;
const crypto_1 = require("crypto");
class Memo {
    constructor(_version, _uuid, _createdBy, _title, _creationDate, _dueDate, _content, _isDone, _isDeleted, _hashtag) {
        //methods
        /**
         * deserialize memo object
         * @returns new copy of memo instance
         */
        this.getDeserializedCopy = () => {
            return JSON.parse(JSON.stringify(this));
        };
        this.version = _version;
        this.uuid = _uuid;
        this.createdBy = _createdBy;
        this.title = _title;
        this.creationDate = _creationDate;
        this.dueDate = _dueDate;
        this.content = _content;
        this.isDone = _isDone;
        this.isDeleted = _isDeleted;
        this.hashtag = _hashtag;
    }
}
exports.Memo = Memo;
Memo.getMemoMock = () => {
    const memoMock = {
        version: "0.1",
        isDone: false,
        uuid: (0, crypto_1.randomUUID)(),
        content: "Mock memo content",
        createdBy: (0, crypto_1.randomUUID)(),
        title: "Mock memo title",
        isDeleted: false,
        hashtag: [],
        creationDate: Date.now(),
        dueDate: Date.now() + 1000,
    };
    return memoMock;
};
//# sourceMappingURL=model.js.map