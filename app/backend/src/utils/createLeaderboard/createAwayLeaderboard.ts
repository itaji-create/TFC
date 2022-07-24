import IMatch from '../../interfaces/IMatch';

function matchesHomeTeam(params: IMatch[]) {
  const lb = {
    totalPoints: 0, totalVictories: 0, totalDraws: 0, totalLosses: 0, goalsFavor: 0, goalsOwn: 0,
  };
  for (let i = 0; i < params.length; i += 1) {
    const match = params[i];
    lb.goalsFavor += match.homeTeamGoals;
    lb.goalsOwn += match.awayTeamGoals;
    if (match.homeTeamGoals > match.awayTeamGoals) {
      lb.totalPoints += 3;
      lb.totalVictories += 1;
    } else if (match.homeTeamGoals < match.awayTeamGoals) {
      lb.totalLosses += 1;
    } else {
      lb.totalPoints += 1;
      lb.totalDraws += 1;
    }
  }
  return lb;
}

export default matchesHomeTeam;
