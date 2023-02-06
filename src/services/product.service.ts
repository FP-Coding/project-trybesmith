import { createModel, getAllModel } from '../models/product.model';
import IProduct from '../interfaces/products';
import IResponseCreate from '../interfaces/responseService';

export const createService = async (newProduct: IProduct): Promise<IResponseCreate> => {
  const id: number = await createModel(newProduct);
  return { type: null, message: { id, ...newProduct } };
};

export const getAllService = async (): Promise<IResponseCreate> => {
  const products: IProduct[] = await getAllModel();
  return { type: null, message: products };
};