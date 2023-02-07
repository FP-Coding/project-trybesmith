import { Request, Response } from 'express';
import IUser from '../interfaces/users';
import { getAllService, createOrderService } from '../services/order.service';
import { decodeToken } from '../utils/jwt';

export const getAllController = async (_req: Request, res: Response) => {
  const { message } = await getAllService();
  return res.status(200).json(message);
};

export const createOrderController = async (req: Request, res: Response) => {
  const { productsIds } = req.body;
  const token = req.header('Authorization') as string;
  const { id } = decodeToken(token) as IUser;
  const { type, message } = await createOrderService({ id, productsIds });
  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};
