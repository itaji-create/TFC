import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret = process.env.JWT_SECRET || 'jwt_secret';

class Token {
  public create = (data: string | number): string => {
    const jwtConfig: jwt.SignOptions = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data }, secret, jwtConfig);
    return token;
  };

  public authenticator = (token: string) => {
    const data = jwt.verify(token, secret);
    return data;
  };
}

export default Token;
