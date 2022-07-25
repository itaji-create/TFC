import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/login.service';

const service = new LoginService();

class LoginController {
  public start = async (req: Request, res: Response) => {
    const response = await service.start(req.body);
    return res.status(response.code).json(response);
  };

  public role = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const role = await service.getRole(authorization || '');
    return res.status(200).json({ role: role.data });
  };

  public authRole = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'faled authorization' });
    next();
  };
}

export default LoginController;
