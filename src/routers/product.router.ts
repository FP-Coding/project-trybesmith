import { Router } from 'express';
import { productController } from '../controllers';

const route = Router();

route.use('/', productController);

export default route;