// import ITeam from '../../interfaces/ITeam';
// import Leaderboard from '../../interfaces/leaderboard';
// import createHomeLeaderboard from './createHomeLeaderboard';
// import createAwayLeaderboard from './createAwayLeaderboard';
// import IMatch from '../../interfaces/IMatch';

// function matchesTeam(team: ITeam, matches: IMatch[]) {
//   const matchesHomeTeam = matches.filter((e) => e.homeTeam === team.id);
//   const matchesAwayTeam = matches.filter((e) => e.awayTeam === team.id);
//   const dataAwayTeam = createAwayLeaderboard(matchesAwayTeam);
//   const dataHomeTeam = createHomeLeaderboard(matchesHomeTeam);

//   const lb: Leaderboard = {
//     name: team.teamName,
//     totalGames: matchesHomeTeam.concat(matchesAwayTeam).length,
//     totalPoints: dataAwayTeam.totalPoints + dataHomeTeam.totalPoints,
//     totalVictories: dataAwayTeam.totalVictories + dataHomeTeam.totalVictories,
//     totalDraws: dataAwayTeam.totalDraws + dataHomeTeam.totalDraws,
//     totalLosses: dataAwayTeam.totalLosses + dataHomeTeam.totalLosses,
//     goalsFavor: dataAwayTeam.goalsFavor + dataHomeTeam.goalsFavor,
//     goalsOwn: dataAwayTeam.goalsOwn + dataHomeTeam.goalsOwn,
//     efficiency: 0,
//     goalsBalance: 0,
//   };
//   return lb;
// }

// function createLeaderboard(teams: ITeam[], matches: IMatch[]) {
//   const leaderboard: Leaderboard[] = [];

//   teams.forEach((team: ITeam) => {
//     const lb = matchesTeam(team, matches);
//     lb.goalsBalance = lb.goalsFavor - lb.goalsOwn;
//     lb.efficiency = Number((((lb.totalPoints) / (lb.totalGames * 3)) * (100)).toFixed(2));
//     leaderboard.push(lb);
//   });

//   return leaderboard;
// }

// export default createLeaderboard;
