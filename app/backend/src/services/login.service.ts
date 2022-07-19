import { StatusCodes } from 'http-status-codes';
import bcrypt = require('bcryptjs');
import User from '../database/models/user';
import login from '../interfaces/login.interface';
import Token from '../helpers/createToken';

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
      return { code: 401, message: 'Incorrect email or password' };
    }
    const auth = bcrypt.compareSync(password, userData.password);

    if (!auth) return { code: 401, message: 'Incorrect email or password' };

    const sign = token.create(password);

    const { id, username, role } = userData;

    return { user: { id, username, role, email }, token: sign, code: StatusCodes.OK };
  };

  public getRole = async (email: string): Promise<string | undefined> => {
    const user = await User.findOne({
      where: { email },
    });

    return user?.role;
  };
}

export default LoginService;
