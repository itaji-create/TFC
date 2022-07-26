import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schemas/login.schema';
import Token from '../utils/token';

const token = new Token();

class LoginMiddleware {
  public validateProperties = (req: Request, res: Response, next: NextFunction) => {
    const validate = loginSchema.validate(req.body);
    if (validate.error) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    next();
  };

  public tokenAuthenticador = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    try {
      if (!authorization) return res.status(401).json({ message: 'token do not exist' });
      token.authenticator(authorization);
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    next();
  };
}

export default LoginMiddleware;
