import { Request, Response } from 'express';
import LoginService from '../services/login.service';

const service = new LoginService();

class LoginController {
  public start = async (req: Request, res: Response) => {
    const response = await service.start(req.body);
    return res.status(response.code).json(response);
  };

  public role = async (req: Request, res: Response) => {
    const { email } = req.body;
    const role = await service.getRole(email);
    return res.status(200).json(role);
  };
}

export default LoginController;
