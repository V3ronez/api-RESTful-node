import { Sequelize, Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'name must be between 3 and 50 characters',
          },
        },
      },
      last_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'last name must be between 3 and 50 characters',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'invalid email',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            msg: 'age must be a integer number',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
