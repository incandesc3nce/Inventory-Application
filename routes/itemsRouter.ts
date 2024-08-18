import { Router } from 'express';
import { itemsController } from '../controllers/items/itemsController';
import { itemController } from '../controllers/items/itemController';
import {
  editItemController,
  updateItemController,
} from '../controllers/items/editItemController';
import {
  addItemController,
  createItemController,
} from '../controllers/items/addItemController';
import { deleteItemController } from '../controllers/items/deleteItemController';

const itemsRouter: Router = Router();

itemsRouter.get('/', itemsController);
itemsRouter.get('/new', addItemController);
itemsRouter.post('/new', createItemController);
itemsRouter.get('/:id', itemController);
itemsRouter.get('/:id/edit', editItemController);
itemsRouter.post('/:id/edit', updateItemController);
itemsRouter.get('/:id/delete', deleteItemController);

export default itemsRouter;
