import { Router } from 'express';
import { genresController } from '../controllers/genres/genresController';
import { genreController } from '../controllers/genres/genreController';
import { deleteGenreController } from '../controllers/genres/deleteGenreController';
import { addGenreController, createGenreController } from '../controllers/genres/addGenreController';
import { editGenreController, updateGenreController } from '../controllers/genres/editGenreController';

const genresRouter: Router = Router();

genresRouter.get('/', genresController);
genresRouter.get('/new', addGenreController);
genresRouter.post('/new', createGenreController);
genresRouter.get('/:id', genreController);
genresRouter.get('/:id/edit', editGenreController);
genresRouter.post('/:id/edit', updateGenreController);
genresRouter.get('/:id/delete', deleteGenreController);

export default genresRouter;
