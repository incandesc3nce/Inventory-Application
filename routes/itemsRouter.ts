import { Router } from 'express';
import { itemsController } from '../controllers/items/itemsController';
import { itemController } from '../controllers/items/itemController';
import { editItemController, updateItemController } from '../controllers/items/editItemController';

const itemsRouter: Router = Router();

itemsRouter.get('/', itemsController);
itemsRouter.get('/:id', itemController);
itemsRouter.get('/:id/edit', editItemController);
itemsRouter.post('/:id/edit', updateItemController);

export default itemsRouter;
