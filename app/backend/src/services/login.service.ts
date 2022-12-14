import { StatusCodes } from 'http-status-codes';
import bcrypt = require('bcryptjs');
import User from '../database/models/user';
import login from '../interfaces/login.interface';
import Token from '../utils/token';

const token = new Token();

class LoginService {
  public start = async (properties: login): Promise<{
    user?: any; token?: string; message?: string; code: number
  }> => {
    const { email, password } = properties;
    const userData = await User.findOne({
      where: { email },
    });

    if (userData === null) {
      return { code: StatusCodes.UNAUTHORIZED, message: 'Incorrect email or password' };
    }
    const auth = bcrypt.compareSync(password, userData.password);

    if (!auth) return { code: StatusCodes.UNAUTHORIZED, message: 'Incorrect email or password' };

    const sign = token.create(properties);

    const { id, username, role } = userData;

    return { user: { id, username, role, email }, token: sign, code: StatusCodes.OK };
  };
}

export default LoginService;
