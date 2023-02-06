import { Router } from 'express';
import { createController, getAllController } from '../controllers/product.controller';

const route = Router();

route.post('/', createController);
route.get('/', getAllController);

export default route;