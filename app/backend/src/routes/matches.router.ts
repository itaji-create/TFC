import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const router = Router();
const controller = new MatchesController();

router
  .get('/', controller.getAll)
  .get('/:id', controller.getById)
  .post('/', controller.create)
  .patch('/:id/finish', controller.finish)
  .patch('/:id', controller.updateGoals);
export default router;
