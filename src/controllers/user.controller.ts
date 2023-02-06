import { Request, Response } from 'express';
import createService from '../services/user.service';

const createController = async (req: Request, res: Response) => {
  const newUserInfo = req.body;
  const { type, message } = await createService(newUserInfo);
  if (type) return res.status(type).json({ message });
  return res.status(201).json({ token: message });
};

export default createController;