import jwt from 'jsonwebtoken';
import User from '../models/User';

export default new class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        error: ['Email and password is required'],
      });
    }
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        success: false,
        error: ['User not exist'],
      });
    }

    if (!(await user.passwordValidate(password))) {
      return res.status(401).json({
        success: false,
        error: ['password invalid'],
      });
    }
    const { id } = user;
    const token = jwt.sign({ email, id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
    return res.json({ success: true, token });
  }
}();
