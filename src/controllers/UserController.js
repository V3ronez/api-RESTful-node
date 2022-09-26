import User from '../models/User';

export default new class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const userAll = await User.findAll({
        attributes: {
          exclude: ['password_hash', 'created_at', 'updated_at'],
        },
      });
      return res.status(200).json({
        success: true,
        userAll,
      });
    } catch (error) {
      return res.status(400).json({
        sucecss: false,
        errors: ['There are no registered users'],
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({
          success: false,
          error: ['user not found'],
        });
      }
      return res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        error: ['User not found'],
      });
    }
  }

  async update(req, res) {
    if (!req.params.id) {
      return res.status(400).json({
        success: false,
        errors: ['ID is required'],
      });
    }

    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          success: false,
          error: 'User not found',
        });
      }
      const newUser = await user.update(req.body);

      return res.status(200).json({
        success: true,
        newUser,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    if (!req.params.id) {
      return res.status(400).json({
        success: false,
        error: ['ID is required'],
      });
    }
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({
          success: false,
          error: 'User not found',
        });
      }
      await user.destroy();
      return res.status(200).json({
        success: true,
        user_deleted: user,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}();
