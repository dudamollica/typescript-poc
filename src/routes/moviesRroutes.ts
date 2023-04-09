import { Router } from "express";
import { findAllMovies } from "../controllers/moviesControllers.js";

const moviesRouter = Router();
moviesRouter.get("/", findAllMovies);

export default moviesRouter;
