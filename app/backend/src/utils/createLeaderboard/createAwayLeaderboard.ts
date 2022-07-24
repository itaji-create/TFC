import IMatch from '../../interfaces/IMatch';
import Leaderboard from '../../interfaces/leaderboard';
import ITeam from '../../interfaces/ITeam';

function gamesAwayTeam(matches: IMatch[]) {
  const lb = {
    totalPoints: 0, totalVictories: 0, totalDraws: 0, totalLosses: 0, goalsFavor: 0, goalsOwn: 0,
  };
  for (let i = 0; i < matches.length; i += 1) {
    const match = matches[i];
    lb.goalsFavor += match.awayTeamGoals;
    lb.goalsOwn += match.homeTeamGoals;
    if (match.homeTeamGoals < match.awayTeamGoals) {
      lb.totalPoints += 3;
      lb.totalVictories += 1;
    } else if (match.homeTeamGoals > match.awayTeamGoals) {
      lb.totalLosses += 1;
    } else if (match.homeTeamGoals === match.awayTeamGoals) {
      lb.totalPoints += 1;
      lb.totalDraws += 1;
    }
  }
  return lb;
}

function matchesTeamAway(team: ITeam, matches: IMatch[]) {
  const matchesHome = matches.filter((e) => e.awayTeam === team.id);
  const dataAwayTeam = gamesAwayTeam(matchesHome);

  const awayTeamLb: Leaderboard = {
    name: team.teamName,
    totalGames: matchesHome.length,
    totalPoints: dataAwayTeam.totalPoints,
    totalVictories: dataAwayTeam.totalVictories,
    totalDraws: dataAwayTeam.totalDraws,
    totalLosses: dataAwayTeam.totalLosses,
    goalsFavor: dataAwayTeam.goalsFavor,
    goalsOwn: dataAwayTeam.goalsOwn,
    efficiency: 0,
    goalsBalance: 0,
  };
  return awayTeamLb;
}

function createAwayLeaderboard(teams: ITeam[], matches: IMatch[]) {
  const leaderboard: Leaderboard[] = [];

  teams.forEach((team: ITeam) => {
    const lb = matchesTeamAway(team, matches);
    lb.goalsBalance = lb.goalsFavor - lb.goalsOwn;
    lb.efficiency = Number((((lb.totalPoints) / (lb.totalGames * 3)) * (100)).toFixed(2));
    leaderboard.push(lb);
  });

  return leaderboard;
}

export default createAwayLeaderboard;
