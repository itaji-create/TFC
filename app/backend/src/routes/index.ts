import { Application as App } from 'express';
import loginRouter from './login.router';
import teamsRouter from './teams.router';

const Routes = (app: App) => {
  app.use('/teams', teamsRouter);
  app.use('/login', loginRouter);
};

export default Routes;
