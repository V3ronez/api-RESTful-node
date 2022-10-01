/* eslint-disable camelcase */
import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/Photo';

const uploadPhoto = multer(multerConfig).single('photo_study');

export default new class PhotoController {
  index(req, res) {
    return uploadPhoto(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          errors: [err.code],
        });
      }
      const originalName = req.file.originalname;
      const fileName = req.file.filename;
      const studentId = req.body.student_id;
      const file = await Photo.create({
        original_name: originalName,
        file_name: fileName,
        student_id: studentId,
      });
      return res.json(file);
    });
  }
}();
