import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';

const service = new LeaderboardService();

class LeaderboardController {
  public getAll = async (req: Request, res: Response) => {
    const result = await service.getAll();
    return res.status(result.code).json(result.leaderboard);
  };

  public getAllHome = async (req: Request, res: Response) => {
    const result = await service.getAllHome();
    return res.status(result.code).json(result.leaderboard);
  };
}

export default LeaderboardController;
