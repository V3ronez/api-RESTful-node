import { Router } from 'express';
import userController from '../../controllers/UserController';
import loginRequired from '../../middlewares/loginRequired';

const route = new Router();

route.get('/', userController.index);
route.get('/:id', userController.show);

route.post('/create', userController.create);
route.put('/', loginRequired, userController.update);
route.delete('/', loginRequired, userController.delete);
export default route;
