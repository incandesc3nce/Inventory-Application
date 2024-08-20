import { Request, Response } from 'express';
import {
  getCategoryById,
  updateCategory,
} from '../../db/queries/categoriesQueries';
import Category from '../../types/Category';

const getCategoryRow = async (id: number) => {
  const category: Category = await getCategoryById(id);
  return category;
};

export const editCategoryController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const category: Category = await getCategoryRow(id);
  res.render('categoryForm', {
    title: 'Edit Category',
    category: category,
    action: `/categories/${id}/edit`,
  });
};

export const updateCategoryController = async (req: Request, res: Response) => {
  const { id, name, description } = req.body;
  if (!id || !name || !description) {
    return res.status(400).send('All input is required');
  }

  await updateCategory(id, name, description);

  res.redirect('/categories');
};
