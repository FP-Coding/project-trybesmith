import getAllModel from '../models/order.model';
import IOrders from '../interfaces/orders';
import IResponseCreate from '../interfaces/responseService';

const getAllService = async (): Promise<IResponseCreate> => {
  const orders: IOrders[] = await getAllModel();
  return { type: null, message: orders };
};

export default getAllService;