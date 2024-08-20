import { Request, Response } from 'express';
import { createCategory } from '../../db/queries/categoriesQueries';

export const addCategoryController = async (req: Request, res: Response) => {
  const emptyCategory = {
    name: '',
    description: '',
  };
  res.render('categoryForm', {
    title: 'Add Category',
    category: emptyCategory,
    action: '/categories/new',
  });
};

export const createCategoryController = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).send('All input is required');
  }
  await createCategory(name, description);

  res.redirect('/categories');
};
