import { Router } from 'express';
import { genresController } from '../controllers/genresController';

const genresRouter: Router = Router();

genresRouter.get('/', genresController);

export default genresRouter;
