export type ApplicationError = {
  name: string;
  message: string;
};  

export type Movie = {
  id? : number,
  movie_name: string,
  plataform: string,
  is_watch?: boolean,
  movie_img: string,
  genre: string,
  notes?: string | null,
  id_user?: number
}