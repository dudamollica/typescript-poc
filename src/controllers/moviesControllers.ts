import { Response, Request, NextFunction } from "express";

async function findAllMovies(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (err) {
    next(err);
  }
}

export { findAllMovies };
