import { Request, Response, Router } from "express";
import { registerApiRoutes } from "./components";
import { registerMiddleware, registerErrorHandler } from "./middleware";

export const initRestRoutes = (router: Router): void => {
  const prefix: string = "/api";

  router.get(prefix, (req: Request, res: Response) => res.send("PING"));

  registerMiddleware(router);
  registerApiRoutes(router, prefix);
  registerErrorHandler(router);
};
