import { Request, Response } from 'express';
import { getItemsByGenre } from '../../db/queries/itemsQueries';
import { getGenreById } from '../../db/queries/genresQueries';
import Item from '../../types/Item';
import Genre from '../../types/Genre';

const getItemsByGenreRows = async (id: number) => {
  const genre: Genre = await getGenreById(id);
  if (!genre) {
    throw new Error(`404: Couldn't find genre with id ${id}`);
  }
  const items: Item[] = await getItemsByGenre(id);
  await Promise.all(
    items.map(async (item: Item) => {
      item.genre = genre.name;
    })
  );
  return items;
};

export const genreController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const genre: Genre = await getGenreById(id); 
    const items: Item[] = await getItemsByGenreRows(id);
    res.render('genre', { title: 'Genre', genre: genre, items: items, message: '' });
  } catch (err) {
    console.log(err);
    res.render('404');
  }
};
