import { Router } from 'express';
import { genresController } from '../controllers/genresController';
import { genreController } from '../controllers/genreController';

const genresRouter: Router = Router();

genresRouter.get('/', genresController);
genresRouter.get('/:id', genreController);

export default genresRouter;
