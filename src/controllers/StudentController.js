import Student from '../models/Student';

export default new class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }
}();
