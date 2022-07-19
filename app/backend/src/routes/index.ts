import { Application as App } from 'express';
import loginRouter from './login.router';

const Routes = (app: App) => {
  app.use('/login', loginRouter);
};

export default Routes;
