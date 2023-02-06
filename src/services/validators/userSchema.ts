import Joi from 'joi';
import IUser from '../../interfaces/users';

const userSchemama = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().integer().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validateUser = (product: IUser) => {
  const { error } = userSchemama.validate(product);
  if (error) return { type: 422, message: error.message };
  return { type: null, message: '' }; 
};

export default validateUser;