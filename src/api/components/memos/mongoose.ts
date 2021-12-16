import mongoose from "mongoose";
import { Memo } from "../server-types";

const memoSchema = new mongoose.Schema(
  {
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
  },
  { collection: "memo" }
);

export const MemoDBModel = mongoose.model<Memo>("memo", memoSchema);
