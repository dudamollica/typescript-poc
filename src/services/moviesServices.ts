import { notFound } from "../errors";
import { Movie } from "../protocols";
import moviesRepositories from "../repositories/moviesRepositories.js";

async function findAllMovies({ id_user }) {
  const movies = await moviesRepositories.findAll(id_user);
  if (!movies) throw notFound();
}

async function findMoviesByPlataform({ plataform }) {
  const movies = await moviesRepositories.findByPlataform({ plataform });
  if (!movies) throw notFound();
}

async function findMoviesByGenre({ genre }) {
  const movies = await moviesRepositories.findByGenre({ genre });
  if (!movies) throw notFound();
}

async function create({
  movie_name,
  plataform,
  movie_img,
  genre,
  id_user,
}: Movie) {
  await moviesRepositories.create({
    movie_name,
    plataform,
    movie_img,
    genre,
    id_user,
  });
}

async function update({ movieId, notes }) {
  await moviesRepositories.update({ movieId, notes });
}

async function deleteMovie({ movieId }) {
  await moviesRepositories.deleteMovie({ movieId });
}

export default {
  findAllMovies,
  findMoviesByPlataform,
  findMoviesByGenre,
  create,
  update,
  deleteMovie,
};
