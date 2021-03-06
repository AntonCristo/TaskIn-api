import { Router } from "express";
import { IComponentRoutes } from "../../contract";
import { MemosController } from "./controller";

export class MemosRoutes implements IComponentRoutes<MemosController> {
  constructor() {
    this.initRoutes();
  }

  controller: MemosController = new MemosController();
  router: Router = Router();

  initRoutes(): void {
    this.router.get("/", this.controller.getAllMemos);
    this.router.post("/mock", this.controller.postMockMemo);
  }
}
