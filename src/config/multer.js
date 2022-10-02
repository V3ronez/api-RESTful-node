import multer from 'multer';
import { resolve, extname } from 'path';

const rand = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    console.log(file);
    if (file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
      return cb(new multer.MulterError('file must be PNG or JPG'));
    }
    return cb(null, true);
  },

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'upload', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${rand()}${extname(file.originalname)}`);
    },
  }),
};
