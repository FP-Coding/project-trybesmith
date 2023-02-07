import Joi from 'joi';
import IProduct from '../../interfaces/products';

const productSchemama = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const productsIdsSchema = Joi.array()
  .items(Joi.number()).label('productsIds');

export const validateProduct = (product: IProduct) => {
  const { error } = productSchemama.validate(product);
  if (error) return { type: 422, message: error.message };
  return { type: null, message: '' }; 
};

export const validateProductsIds = (productsIds: number[]) => {
  const { error } = productsIdsSchema.validate(productsIds);
  if (error) return { type: 422, message: error.message };
  return { type: null, message: '' };
};
