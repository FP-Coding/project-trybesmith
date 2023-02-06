import { Router } from 'express';
import { createController, getAllController } from '../controllers/product.controller';
import validateFieldsProduct from '../middleware/productMiddleware';

const route = Router();

route.post('/', validateFieldsProduct, createController);
route.get('/', getAllController);

export default route;