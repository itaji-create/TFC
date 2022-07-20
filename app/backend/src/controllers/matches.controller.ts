import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

const service = new MatchesService();

class MatchesController {
  public getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    let response = await service.getAll();
    if (inProgress) {
      response = await service.getAll(inProgress);
    }
    return res.status(response.code).json(response.matches);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.getById(id);
    return res.status(response.code).json(response.matches);
  };

  public create = async (req: Request, res: Response) => {
    const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals } = req.body;

    const response = await service.create({
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress: true,
    });
    return res.status(response.code).json(response.matches);
  };

  public finish = async (req: Request, res: Response) => {
    const { id } = req.params;
    await service.finish(id);
    return res.status(200).json({ message: 'Finished' });
  };

  public updateGoals = async (req: Request, res: Response) => {
    const { id } = req.params;
    await service.updateGoals(req.body, id);
    return res.status(200).json({ message: 'Finished' });
  };
}

export default MatchesController;
