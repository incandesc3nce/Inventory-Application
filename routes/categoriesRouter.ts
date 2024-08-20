import { Router } from 'express';
import { categoriesController } from '../controllers/categories/categoriesController';
import { categoryController } from '../controllers/categories/categoryController';
import { addCategoryController, createCategoryController } from '../controllers/categories/addCategoryController';
import { editCategoryController, updateCategoryController } from '../controllers/categories/editCategoryController';
import { deleteCategoryController } from '../controllers/categories/deleteCategoryController';

const categoriesRouter: Router = Router();

categoriesRouter.get('/', categoriesController);
categoriesRouter.get('/new', addCategoryController);
categoriesRouter.post('/new', createCategoryController);
categoriesRouter.get('/:id', categoryController);
categoriesRouter.get('/:id/edit', editCategoryController);
categoriesRouter.post('/:id/edit', updateCategoryController);
categoriesRouter.get('/:id/delete', deleteCategoryController);

export default categoriesRouter;
