import { Response, Request } from 'express';
import { productService } from '../services';

const create = async (req: Request, res: Response) => {
  const productInfo = req.body;
  const { message } = await productService(productInfo); 
  return res.status(201).json(message);
};

export default create;