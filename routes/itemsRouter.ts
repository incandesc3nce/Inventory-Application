import { Router } from 'express';
import { itemsController } from '../controllers/itemsController';
import { itemController } from '../controllers/itemController';

const itemsRouter: Router = Router();

itemsRouter.get('/', itemsController);
itemsRouter.get('/:id', itemController);

export default itemsRouter;
