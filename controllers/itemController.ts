import { Request, Response } from 'express';
import { getItemById } from '../db/queries/itemsQueries';
import { getGenreById } from '../db/queries/genresQueries';
import { getCategoryById } from '../db/queries/categoriesQueries';
import Item from '../types/Item';
import Genre from '../types/Genre';
import Category from '../types/Category';

const getItemRow = async (id: number) => {
  const item: Item = await getItemById(id);
  const genre: Genre = await getGenreById(item.genre_id);
  const category: Category = await getCategoryById(item.category_id);
  item.genre = genre.name;
  item.category = category.name;
  return item;
};

export const itemController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const item: Item = await getItemRow(id);
  res.render('item', { title: item.title, item: item });
};
