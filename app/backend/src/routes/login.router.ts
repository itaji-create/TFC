import { Router } from 'express';
import LoginMiddleware from '../middlewares/login.middleware';
import LoginController from '../controllers/login.controller';

const login = new LoginMiddleware();
const controller = new LoginController();

const router = Router();

router
  .get('/validate', login.tokenAuthenticador, controller.getRole)
  .post('/', login.validateProperties, controller.start);

export default router;
