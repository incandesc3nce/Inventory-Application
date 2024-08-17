import { Request, Response } from 'express';
import { getItems } from '../../db/queries/itemsQueries';
import { getGenreById } from '../../db/queries/genresQueries';
import Item from '../../types/Item';
import Genre from '../../types/Genre';

const getItemRows = async () => {
  const items: Item[] = await getItems();
  await Promise.all(items.map(async (item: Item) => {
    const genre: Genre = await getGenreById(item.genre_id);
    item.genre = genre.name;
  }));
  return items;
};

export const itemsController = async (req: Request, res: Response) => {
  const items: Item[] = await getItemRows();
  res.render('items', { title: 'Items', items: items });
};
