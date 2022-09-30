import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../../config/multer';
import photoController from '../../controllers/PhotoController';

const route = new Router();
const uploadPhoto = multer(multerConfig);

route.post('/', uploadPhoto.single('photo_study'), photoController.index);
export default route;
