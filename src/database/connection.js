import Sequelize from 'sequelize';
import DBConfig from '../config/db';
import Student from '../models/Student';
import User from '../models/User';
import Photo from '../models/Photo';

const models = [Student, User, Photo];
const connection = new Sequelize(DBConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
