import { Router } from 'express';
import LoginMiddleware from '../middlewares/login.middleware';
import LoginController from '../controllers/login.controller';

const login = new LoginMiddleware();
const loginController = new LoginController();

const router = Router();

router
  .get('/validate', loginController.role)
  .post('/', login.validateProperties, loginController.start);

export default router;
