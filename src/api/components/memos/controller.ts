import { NextFunction, Request, Response } from "express";
import { Memo } from "./model";
import { MemoDBModel } from "./mongoose";
export class MemosController {
  public getAllMemos = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.send("get all memos handler");
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
      const mock = Memo.getMemoMock();
      const memo = new MemoDBModel(mock);
      await memo.save();
      console.log("saved");
      res.send({ data: mock });
    } catch (err) {
      return next(err);
    }
  };
}
