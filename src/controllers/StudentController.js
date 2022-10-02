import Photo from '../models/Photo';
import Student from '../models/Student';

export default new class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: ['id', 'name', 'last_name', 'email', 'age'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        attributes: ['id', 'original_name', 'file_name'],
        model: Photo,
      },
    });
    res.json(students);
  }

  async create(req, res) {
    if (!req.body) {
      return res.status(400).json({
        success: false,
        error: 'Body is required',
      });
    }
    try {
      const student = await Student.create(req.body);
      return res.status(200).json({
        success: true,
        student,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          error: ['id student is missing'],
        });
      }
      const study = await Student.findByPk(id, {
        attributes: ['id', 'name', 'last_name', 'email', 'age'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          attributes: ['id', 'original_name', 'file_name'],
          model: Photo,
        },
      });

      return res.status(200).json({
        success: true,
        study,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          error: ['id student is missing'],
        });
      }
      const study = await Student.findByPk(id);
      if (!study) {
        return res.status(404).json({
          success: false,
          errors: ['Study not found'],
        });
      }

      const newStudy = await study.update(req.body);
      return res.status(200).json({
        success: true,
        newStudy,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          errors: ['id student is missing'],
        });
      }
      const study = await Student.findByPk(id);
      study.destroy();
      return res.status(200).json({
        success: true,
        study_delted: study,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.errors.map((err) => err.message),
      });
    }
  }
}();
