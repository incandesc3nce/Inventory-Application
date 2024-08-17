import { Request, Response } from 'express';
import { getCategories } from '../../db/queries/categoriesQueries';
import Category from '../../types/Category';

const getCategoryRows = async () => {
  const categories: Category[] = await getCategories();
  return categories;
};

export const categoriesController = async (req: Request, res: Response) => {
  const categories: Category[] = await getCategoryRows();
  res.render('categories', {
    title: 'Categories List',
    categories: categories,
  });
};
