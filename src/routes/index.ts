import { Router } from "express";
import moviesRouter from "./moviesRroutes.js";

const routes = Router();
routes.use("/movies", moviesRouter);

export default routes;
