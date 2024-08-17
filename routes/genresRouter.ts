import { Router } from 'express';
import { genresController } from '../controllers/genres/genresController';
import { genreController } from '../controllers/genres/genreController';

const genresRouter: Router = Router();

genresRouter.get('/', genresController);
genresRouter.get('/:id', genreController);

export default genresRouter;
