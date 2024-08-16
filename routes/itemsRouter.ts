import { Router } from 'express';
import { itemsController } from '../controllers/itemsController';

const itemsRouter: Router = Router();

itemsRouter.get('/', itemsController);

export default itemsRouter;
