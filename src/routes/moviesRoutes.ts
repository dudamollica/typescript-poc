import { Router } from "express";
import moviesControllers from "../controllers/moviesControllers.js";

const routes = Router();
routes.get("/movies/idUser", moviesControllers.findAllMovies);
routes.get("/movies/:plataform", moviesControllers.findMoviesByPlataform);
routes.get("/movies/:genre", moviesControllers.findMoviesByGenre);
routes.post("/movies", moviesControllers.create);
routes.put("/movies/:movieId", moviesControllers.update);
routes.delete("/movies/:movieId", moviesControllers.deleteMovie);

export default routes;
