import { Request, Response } from 'express';
import LoginService from '../services/login.service';

const service = new LoginService();

class LoginController {
  public start = async (req: Request, res: Response) => {
    const response = await service.start(req.body);
    return res.status(response.code).json(response);
  };

  public getRole = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'token do not exist' });
    const role = { role: 'admin' };
    return res.status(200).json(role);
  };
}

export default LoginController;
