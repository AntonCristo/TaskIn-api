import { NextFunction, Request, Response } from "express";
import { Memo } from "./model";
import { Memo as MemoType } from "../server-types";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseApp } from "../../db";

export class MemosController {
  public getAllMemos = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.send("getAllMemos handler");
    } catch (err) {
      return next(err);
    }
  };

  public postMockMemo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const mock: MemoType = Memo.getMemoMock();
      console.log("postMockMemo");
      const db = getDatabase(firebaseApp);
      set(ref(db, "memos/" + mock.uuid), mock);
      res.send(mock);
    } catch (err) {
      return next(err);
    }
  };
}
