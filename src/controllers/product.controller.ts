import { Response, Request } from 'express';
import { createService, getAllService } from '../services/product.service';

export const createController = async (req: Request, res: Response) => {
  const productInfo = req.body;
  const { message } = await createService(productInfo); 
  return res.status(201).json(message);
};

export const getAllController = async (req: Request, res: Response) => {
  const { message } = await getAllService();
  return res.status(200).json(message);
};