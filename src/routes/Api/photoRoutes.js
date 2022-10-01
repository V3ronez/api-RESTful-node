import { Router } from 'express';
import loginRequired from '../../middlewares/loginRequired';

import photoController from '../../controllers/PhotoController';

const route = new Router();

route.post('/', loginRequired, photoController.index);
export default route;
