import { Request, Response } from 'express';
import ILogin from '../interfaces/login';
import loginService from '../services/login.service';

const loginController = async (req: Request, res: Response) => {
  const loginInfo: ILogin = req.body;
  const { type, message } = await loginService(loginInfo);
  if (type) return res.status(type).json({ message });
  return res.status(200).json({ token: message });
};

export default loginController;