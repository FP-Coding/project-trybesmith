import createModel from '../models/user.model';
import IUser from '../interfaces/users';
import { generateToken } from '../utils/jwt';
import IResponseCreate from '../interfaces/responseService';
import validateUser from './validators/userSchema';

const createService = async (newUser: IUser): Promise<IResponseCreate> => {
  const error = validateUser(newUser);
  if (error.type) return error;
  const { password, ...rest } = newUser;
  const id: number = await createModel(newUser);
  const token = generateToken({ id, ...rest });
  return { type: null, message: token };
};

export default createService;