import Router from 'express';
import StudentController from '../../controllers/StudentController';

const route = new Router();

route.get('/', StudentController.index);

export default route;
