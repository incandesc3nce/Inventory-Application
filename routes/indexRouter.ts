import { Router, Request, Response } from 'express';
import { indexController } from '../controllers/indexController';

const indexRouter: Router = Router();

indexRouter.get('/', indexController);

export default indexRouter;
