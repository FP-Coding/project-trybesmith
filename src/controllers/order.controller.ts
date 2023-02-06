import { Request, Response } from 'express';
import getAllService from '../services/order.service';

const getAllController = async (_req: Request, res: Response) => {
  const { message } = await getAllService();
  return res.status(200).json(message);
};

export default getAllController;