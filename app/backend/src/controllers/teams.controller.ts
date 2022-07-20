import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

const service = new TeamsService();

class TeamsController {
  public getAll = async (req: Request, res: Response) => {
    const response = await service.getAll();
    return res.status(response.code).json(response.teams);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.getById(id);
    return res.status(response.code).json(response.teams);
  };
}

export default TeamsController;
