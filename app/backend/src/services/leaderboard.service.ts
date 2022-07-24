import { StatusCodes } from 'http-status-codes';
// import createLeaderboard from '../utils/createLeaderboard/createLeaderboard';
import createHomeLeaderboard from '../utils/createLeaderboard/createHomeLeaderboard';
import createAwayLeaderboard from '../utils/createLeaderboard/createAwayLeaderboard';
import MatchesService from './matches.service';
import Team from '../database/models/team';
import classification from '../utils/createLeaderboard/classification';

const service = new MatchesService();

class LeaderboardService {
  public getAll = async () => {
    const leaderboard = {};

    return { code: StatusCodes.OK, leaderboard };
  };

  public getAllHome = async () => {
    const teams = await Team.findAll();
    const { matches } = await service.getAll('false');
    const leaderboard = createHomeLeaderboard(teams, matches);
    classification(leaderboard);

    return { code: StatusCodes.OK, leaderboard };
  };

  public getAllAway = async () => {
    const teams = await Team.findAll();
    const { matches } = await service.getAll('false');
    const leaderboard = createAwayLeaderboard(teams, matches);
    classification(leaderboard);

    return { code: StatusCodes.OK, leaderboard };
  };
}

export default LeaderboardService;
