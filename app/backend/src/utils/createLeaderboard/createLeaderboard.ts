import ITeam from '../../interfaces/ITeam';
import createHomeLeaderboard from './createHomeLeaderboard';
import createAwayLeaderboard from './createAwayLeaderboard';
import IMatch from '../../interfaces/IMatch';
import Leaderboard from '../../interfaces/leaderboard';

function combineDatas(dataHomeTeam: Leaderboard[], dataAwayTeam: Leaderboard[]) {
  return dataHomeTeam.map((team, i) => {
    const goalsFavor = team.goalsFavor + dataAwayTeam[i].goalsFavor;
    const goalsOwn = team.goalsOwn + dataAwayTeam[i].goalsOwn;
    const totalGames = team.totalGames + dataAwayTeam[i].totalGames;
    const totalPoints = team.totalPoints + dataAwayTeam[i].totalPoints;
    return {
      name: team.name,
      totalGames,
      totalPoints,
      totalVictories: team.totalVictories + dataAwayTeam[i].totalVictories,
      totalDraws: team.totalDraws + dataAwayTeam[i].totalDraws,
      totalLosses: team.totalLosses + dataAwayTeam[i].totalLosses,
      goalsFavor,
      goalsOwn,
      efficiency: Number((((totalPoints) / (totalGames * 3)) * (100)).toFixed(2)),
      goalsBalance: goalsFavor - goalsOwn,
    };
  });
}

function createLeaderboard(teams: ITeam[], matches: IMatch[]) {
  const dataAwayTeam = createAwayLeaderboard(teams, matches);
  const dataHomeTeam = createHomeLeaderboard(teams, matches);

  const leaderboard = combineDatas(dataHomeTeam, dataAwayTeam);
  return leaderboard;
}

export default createLeaderboard;
