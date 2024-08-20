import { Request, Response } from 'express';
import { deleteCategory, getCategoryById } from '../../db/queries/categoriesQueries';
import { getItemsByCategory } from '../../db/queries/itemsQueries';
import { getGenreById } from '../../db/queries/genresQueries';
import Item from '../../types/Item';
import Genre from '../../types/Genre';

export const deleteCategoryController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const items = await getItemsByCategory(id);
    await Promise.all(
      items.map(async (item: Item) => {
        const genre: Genre = await getGenreById(item.genre_id);
        item.genre = genre.name;
      })
    );
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
