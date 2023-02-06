import ILogin from '../interfaces/login';
import IResponseCreate from '../interfaces/responseService';
import IUser from '../interfaces/users';
import loginModel from '../models/login.model';
import { generateToken } from '../utils/jwt';

const loginService = async ({ username, password }: ILogin): Promise<IResponseCreate> => {
  const user: IUser = await loginModel(username);
  if (!user || user.password !== password) { 
    return { type: 401, message: 'Username or password invalid' }; 
  }
  const { password: p, ...rest } = user;
  const token = generateToken(rest);
  return { type: null, message: token };
};

export default loginService;