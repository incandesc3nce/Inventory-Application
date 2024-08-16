import { Request, Response } from 'express';
import { getItems } from '../db/queries/itemsQueries';
import Item from '../types/Item';

const getItemRows = async () => {
  const items: Item[] = await getItems();
  return items;
}

export const itemsController = async (req: Request, res: Response) => {
  const items: Item[] = await getItemRows();
  res.render('items', { title: 'Items', items: items });
}
