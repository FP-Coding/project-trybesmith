import { productModel } from '../models';
import IProduct from '../interfaces/products';
import IResponseCreate from '../interfaces/responseService';

const create = async (newProduct: IProduct): Promise<IResponseCreate> => {
  const id: number = await productModel(newProduct);
  return { type: null, message: { id, ...newProduct } };
};

export default create;