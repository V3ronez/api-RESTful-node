import Sequelize from 'sequelize';
import DBConfig from '../config/db';
import Student from '../models/Student';

const models = [Student];
const connection = new Sequelize(DBConfig);

models.forEach((model) => model.init(connection));
