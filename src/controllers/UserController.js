import User from '../models/User';

export default new class UserController {
  async create(req, res) {
    try {
      const user = await User.create({
        name: 'veronezsapeca',
        email: 'veronezsapeca@gmail.com',
        password: '1020304050',
      });
      res.json({
        success: true,
        user,
      });
    } catch (erro) {
      res.status(400).json({
        sucess: false,
        errors: erro.errors.map((err) => err.message),
      });
    }
  }
}();
