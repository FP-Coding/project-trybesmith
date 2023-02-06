import { Router } from 'express';
import createController from '../controllers/user.controller';
import validateFieldsLogin from '../middleware/LoginMiddleware';
import validateFieldsUser from '../middleware/userMiddleware';

const route = Router();

route.post('/', validateFieldsLogin, validateFieldsUser, createController);

export default route;
