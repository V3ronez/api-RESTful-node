import { Sequelize, Model } from 'sequelize';
import app from '../config/app';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      original_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'field original_name is required',
          },
        },
      },
      file_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'field file_name is required',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${app.url}/images/${this.getDataValue('file_name')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'photo_student',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
