import { Application as App } from 'express';
import loginRouter from './login.router';
import teamsRouter from './teams.router';
import matchesRouter from './matches.router';
import leaderboard from './leaderboard.router';

const Routes = (app: App) => {
  app.use('/teams', teamsRouter);
  app.use('/matches', matchesRouter);
  app.use('/login', loginRouter);
  app.use('/leaderboard', leaderboard);
};

export default Routes;
