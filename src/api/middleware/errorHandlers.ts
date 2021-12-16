import { NextFunction, Response, Router, Request } from "express";

export function registerErrorHandler(router: Router): Response | void {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("[ErrorLogger]: ", err);

    return res.status(500).json({
      error: err.message || err,
      status: 500,
    });
  });
}
