import { Router } from 'express';
import getAllController from '../controllers/order.controller';

const route = Router();

route.get('/', getAllController);

export default route;