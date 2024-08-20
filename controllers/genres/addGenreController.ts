import { Request, Response } from 'express';
import { createGenre } from '../../db/queries/genresQueries';

export const addGenreController = async (req: Request, res: Response) => {
  const emptyGenre = {
    name: '',
  };
  res.render('genreForm', {
    title: 'Add Genre',
    genre: emptyGenre,
    action: '/genres/new',
  });
};

export const createGenreController = async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send('All input is required');
  }
  await createGenre(name);

  res.redirect('/genres');
};
