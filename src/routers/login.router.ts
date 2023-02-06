import { Router } from 'express';
import loginController from '../controllers/login.controller';
import validateFieldsLogin from '../middleware/LoginMiddleware';

const route = Router();

route.post('/', validateFieldsLogin, loginController);

export default route;