import Sequelize from 'sequelize';
import DBConfig from '../config/db';
import Student from '../models/Student';
import User from '../models/User';

const models = [Student, User];
const connection = new Sequelize(DBConfig);

models.forEach((model) => model.init(connection));
