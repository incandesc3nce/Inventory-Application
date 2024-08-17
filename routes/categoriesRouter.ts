import { Router } from 'express';
import { categoriesController } from '../controllers/categoriesController';
import { categoryController } from '../controllers/categoryController';

const categoriesRouter: Router = Router();

categoriesRouter.get('/', categoriesController);
categoriesRouter.get('/:id', categoryController);

export default categoriesRouter;
