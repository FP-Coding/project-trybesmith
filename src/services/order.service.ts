import { getAllModel, createOrderModel } from '../models/order.model';
import IOrders from '../interfaces/orders';
import IResponseCreate from '../interfaces/responseService';
import { validateProductsIds } from './validators/productSchema';

export const getAllService = async (): Promise<IResponseCreate> => {
  const orders: IOrders[] = await getAllModel();
  return { type: null, message: orders };
};

export const createOrderService = async (infoOrder: IOrders): Promise<IResponseCreate> => {
  const error = validateProductsIds(infoOrder.productsIds);
  if (error.type) return error;
  const isCreated: boolean = await createOrderModel(infoOrder);
  const { id: userId, ...rest } = infoOrder;
  
  if (isCreated) { return { type: null, message: { userId, ...rest } }; } 
  return { type: 500, message: 'Internal error' };
};
