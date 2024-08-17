import { Router } from 'express';
import { categoriesController } from '../controllers/categories/categoriesController';
import { categoryController } from '../controllers/categories/categoryController';

const categoriesRouter: Router = Router();

categoriesRouter.get('/', categoriesController);
categoriesRouter.get('/:id', categoryController);

export default categoriesRouter;
