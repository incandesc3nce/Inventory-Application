import { Request, Response } from 'express';
import { deleteCategory, getCategoryById } from '../../db/queries/categoriesQueries';
import { getItemsByCategory } from '../../db/queries/itemsQueries';

export const deleteCategoryController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const items = await getItemsByCategory(id);
    if (items.length > 0) {
      const category = await getCategoryById(id);
      res.render('category', {title: 'Category', message: 'Cannot delete category with items in it', category: category, items: items});
      return;
    }
    await deleteCategory(id);
    res.redirect('/categories');
  } catch (err) {
    console.log(err);
    res.render('404');
  }
};
