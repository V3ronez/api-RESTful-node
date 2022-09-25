import { Router } from 'express';
import userController from '../../controllers/UserController';

const route = new Router();

route.post('/create', userController.create);
export default route;
