import { Request, Response } from 'express';
import { getItemsByCategory } from '../../db/queries/itemsQueries';
import { getCategoryById } from '../../db/queries/categoriesQueries';
import { getGenreById } from '../../db/queries/genresQueries';
import Item from '../../types/Item';
import Category from '../../types/Category';
import Genre from '../../types/Genre';

const getItemsByCategoryRows = async (id: number) => {
  const category: Category = await getCategoryById(id);
  if (!category) {
    throw new Error(`404: Couldn't find category with id ${id}`);
  }
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
  try {
    const category: Category = await getCategoryById(id);
    const items: Item[] = await getItemsByCategoryRows(id);
    res.render('category', { title: 'Category', category: category, items: items });
  } catch (err) {
    console.log(err);
    res.render('404');
  }
};
