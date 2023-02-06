import { Router } from 'express';
import createController from '../controllers/user.controller';

const route = Router();

route.post('/', createController);

export default route;
