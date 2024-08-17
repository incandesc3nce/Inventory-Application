import { Request, Response } from 'express';
import { getItemsByCategory } from '../db/queries/itemsQueries';
import { getGenreById } from '../db/queries/genresQueries';
import Item from '../types/Item';
import Genre from '../types/Genre';

const getItemsByCategoryRows = async (id: number) => {
  const items: Item[] = await getItemsByCategory(id);
  await Promise.all(
    items.map(async (item: Item) => {
      const genre: Genre = await getGenreById(item.genre_id);
      item.genre = genre.name;
    })
  );
  return items;
};

export const categoryController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const items: Item[] = await getItemsByCategoryRows(id);
  res.render('items', { title: 'Category', items: items });
};
