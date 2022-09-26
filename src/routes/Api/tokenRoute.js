import Router from 'express';
import TokenController from '../../controllers/TokenController';

const route = new Router();

route.post('/', TokenController.create);
export default route;
