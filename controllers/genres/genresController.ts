import { Request, Response } from 'express';
import { getGenres } from '../../db/queries/genresQueries';
import Genre from '../../types/Genre';

const getGenreRows = async () => {
  const genres: Genre[] = await getGenres();
  return genres;
};

export const genresController = async (req: Request, res: Response) => {
  const genres: Genre[] = await getGenreRows();
  res.render('genres', { title: 'Genres List', genres: genres });
};
