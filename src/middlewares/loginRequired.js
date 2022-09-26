import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      success: false,
      error: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    const { id, email } = data;

    const user = await User.findOne({ where: { id, email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: ['User invalid'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: ['Token invalid'],
    });
  }
};
