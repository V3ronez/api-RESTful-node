import { Router } from 'express';
import userController from '../../controllers/UserController';

const route = new Router();

route.get('/', userController.index);
route.get('/:id', userController.show);
route.post('/create', userController.create);
route.put('/:id', userController.update);
route.delete('/:id', userController.delete);
export default route;
