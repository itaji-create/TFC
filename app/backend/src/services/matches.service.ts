import { StatusCodes } from 'http-status-codes';
import { ParsedQs } from 'qs';
import Team from '../database/models/team';
import Match from '../database/models/match';
import IMatch from '../interfaces/IMatch';

class MatchesService {
  public getAll = async (progress?: boolean | string | ParsedQs | string[] | ParsedQs[]) => {
    const include = [{ model: Team, as: 'teamHome' }, { model: Team, as: 'teamAway' }];
    let matches = await Match.findAll({ include });
    if (progress === 'true') {
      matches = await Match.findAll({
        where: { inProgress: true },
        include,
      });
    }
    if (progress === 'false') {
      matches = await Match.findAll({
        where: { inProgress: false },
        include,
      });
    }
    return { code: StatusCodes.OK, matches };
  };

  public getById = async (id: string) => {
    const matches = await Match.findByPk(Number(id));
    return { code: StatusCodes.OK, matches };
  };

  public create = async (match: IMatch) => {
    const existHome = await Team.findByPk(Number(match.homeTeam));
    const existAway = await Team.findByPk(Number(match.awayTeam));
    if (!existAway || !existHome) {
      return {
        code: StatusCodes.NOT_FOUND,
        matches: { message: 'There is no team with such id!' },
      };
    }
    if (match.homeTeam === match.awayTeam) {
      return {
        code: StatusCodes.UNAUTHORIZED,
        matches: { message: 'It is not possible to create a match with two equal teams' },
      };
    }

    const matches = await Match.create(match);
    return { code: StatusCodes.CREATED, matches };
  };

  public finish = async (id: string) => {
    const [matches] = await Match.update(
      { inProgress: false },
      { where: { id: Number(id) } },
    );
    return { code: StatusCodes.CREATED, matches };
  };

  public updateGoals = async (body: any, id: string) => {
    const { homeTeamGoals, awayTeamGoals } = body;
    const [matches] = await Match.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id: Number(id) } },
    );
    return { code: StatusCodes.CREATED, matches };
  };
}

export default MatchesService;
