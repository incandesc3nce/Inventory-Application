import { Router } from 'express';
import { categoriesController } from '../controllers/categoriesController';

const categoriesRouter: Router = Router();

categoriesRouter.get('/', categoriesController);

export default categoriesRouter;
