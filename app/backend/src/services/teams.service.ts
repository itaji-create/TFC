import { StatusCodes } from 'http-status-codes';
import Team from '../database/models/team';

class TeamsService {
  public getAll = async () => {
    const teams = await Team.findAll();
    return { code: StatusCodes.OK, teams };
  };

  public getById = async (id: string) => {
    const teams = await Team.findByPk(Number(id));
    return { code: StatusCodes.OK, teams };
  };
}

export default TeamsService;
