import { Response, Request, NextFunction } from "express";
import { Movie } from "../protocols";
import moviesServices from "../services/moviesServices.js";

async function findAllMovies(req: Request, res: Response, next: NextFunction) {
  const id_user = req.params.idUser
  try {
    const movies = await moviesServices.findAllMovies({id_user})
    return res.status(201).send(movies)
  } catch (err) {
    next(err);
  }
}

async function findMoviesByPlataform(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {plataform} = req.params
  try {
    const movies = await moviesServices.findMoviesByPlataform({plataform})
    return res.status(201).send(movies)
  } catch (err) {
    next(err);
  }
}

async function findMoviesByGenre(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {genre} = req.params
  try {
    const movies = await moviesServices.findMoviesByGenre({genre})
    return res.status(201).send(movies)
  } catch (err) {
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  const { movie_name, plataform, movie_img, genre, id_user } =
    req.body as Movie;
  try {
    await moviesServices.create({
      movie_name,
      plataform,
      movie_img,
      genre,
      id_user,
    });
    return res.status(201).send("ok");
  } catch (err) {
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  const { movieId } = req.params;
  const {notes} = req.body;
  try {
      await moviesServices.update({movieId, notes});
      return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function deleteMovie(req: Request, res: Response, next: NextFunction) {
  const { movieId } = req.params;
  try {
    await moviesServices.deleteMovie({movieId});
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

export default {
  findAllMovies,
  findMoviesByPlataform,
  findMoviesByGenre,
  create,
  update,
  deleteMovie,
};
