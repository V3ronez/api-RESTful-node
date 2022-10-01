import multer from 'multer';
import multerConfig from '../config/multer';

const uploadPhoto = multer(multerConfig).single('photo_study');

export default new class PhotoController {
  async index(req, res) {
    return uploadPhoto(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          errors: [err.code],
        });
      }
      return res.json(req.file);
    });
  }
}();
