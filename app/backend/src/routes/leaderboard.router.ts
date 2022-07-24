import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const router = Router();
const controller = new LeaderboardController();

router
  .get('/', controller.getAll)
  .get('/home', controller.getAllHome)
  .get('/away', controller.getAllAway);

export default router;
