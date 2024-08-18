import { Request, Response } from 'express';
import { deleteItem } from '../../db/queries/itemsQueries';

export const deleteItemController = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    await deleteItem(id);
    res.redirect('/items');
  } catch (err) {
    console.log(err);
    res.render('404');
  }
};
