import createModel from '../models/user.model';
import IUser from '../interfaces/users';
import { generateToken } from '../utils/jwt';
import IResponseCreate from '../interfaces/responseService';

const createService = async (newUser: IUser): Promise<IResponseCreate> => {
  const { password, ...rest } = newUser;
  const id: number = await createModel(newUser);
  const token = generateToken({ id, ...rest });
  return { type: null, message: token };
};

export default createService;