import { Response, Request } from 'express';
import { createService, getAllService } from '../services/product.service';

export const createController = async (req: Request, res: Response) => {
  const productInfo = req.body;
  const { type, message } = await createService(productInfo); 
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

export const getAllController = async (_req: Request, res: Response) => {
  const { message } = await getAllService();
  return res.status(200).json(message);
};