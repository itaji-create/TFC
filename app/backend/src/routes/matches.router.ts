import { Router } from 'express';
import LoginMiddleware from '../middlewares/login.middleware';
import MatchesController from '../controllers/matches.controller';

const router = Router();
const controller = new MatchesController();
const login = new LoginMiddleware();

router
  .get('/', controller.getAll)
  .get('/:id', controller.getById)
  .post('/', login.tokenAuthenticador, controller.create)
  .patch('/:id/finish', controller.finish)
  .patch('/:id', controller.updateGoals);
export default router;
