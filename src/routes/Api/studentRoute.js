import Router from 'express';
import studentController from '../../controllers/StudentController';

const route = new Router();

route.get('/', studentController.index);
route.get('/:id', studentController.show);
route.post('/create', studentController.create);
route.put('/:id', studentController.update);
route.delete('/:id', studentController.delete);

export default route;
