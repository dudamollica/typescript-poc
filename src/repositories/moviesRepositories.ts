import db from "../config/database.js";
import { Movie } from "../protocols/index.js";

async function findAll(id_user: number) {
  const movies = await db.query(`SELECT * FROM movies WHERE id_user=$1`, [
    id_user,
  ]);
  return movies.rows;
}

async function findByPlataform({ plataform }) {
  const movies = await db.query(`SELECT * FROM movies WHERE plataform=$1`, [plataform]);
  return movies.rows;
}

async function findByGenre({ genre }) {
  const movies = await db.query(`SELECT * FROM movies WHERE genre=$1`, [genre]);
  return movies.rows;
}

async function create({
  movie_name,
  plataform,
  movie_img,
  genre,
  id_user,
}: Movie) {
  await db.query(
    `INSERT INTO movies (
     movie_name, plataform, movie_img, genre, id_user,)
     VALUES ($1,$2,$3,$4,$5)`,
    [movie_name, plataform, movie_img, genre, id_user]
  );
}

async function update({ movieId, notes }) {
    await db.query(
        `UPDATE movies set is_watch = true WHERE id=$1`,[movieId]
    )
    await db.query(
        `UPDATE movies set notes = $1 WHERE id=$2`,[notes, movieId]
    )
}

async function deleteMovie({ movieId }) {
    await db.query(
        `DELETE  FROM movies WHERE id=$1`,[movieId]
    )
}

export default {
  findAll,
  findByPlataform,
  findByGenre,
  create,
  update,
  deleteMovie,
};
