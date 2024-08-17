import { Router } from 'express';
import { itemsController } from '../controllers/items/itemsController';
import { itemController } from '../controllers/items/itemController';

const itemsRouter: Router = Router();

itemsRouter.get('/', itemsController);
itemsRouter.get('/:id', itemController);

export default itemsRouter;
