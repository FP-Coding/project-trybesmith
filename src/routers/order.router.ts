import { Router } from 'express';
import { getAllController, createOrderController } from '../controllers/order.controller';
import validateFieldsOrder from '../middleware/orderMiddleware';
import tokenMiddleware from '../middleware/validateToken';

const route = Router();

route.get('/', getAllController);
route.post('/', tokenMiddleware, validateFieldsOrder, createOrderController);

export default route;