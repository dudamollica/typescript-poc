import { Router } from "express";
import moviesRouter from "./moviesRoutes.js";
import authRouter from "./authRoutes.js";
var routes = Router();
routes.use("/movies", moviesRouter);
routes.use("/", authRouter);
export default routes;
