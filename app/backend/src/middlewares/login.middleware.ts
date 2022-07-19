import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schemas/login.schema';
import Token from '../helpers/createToken';

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
    token.authenticator(authorization!);

    next();
  };
}

export default LoginMiddleware;
