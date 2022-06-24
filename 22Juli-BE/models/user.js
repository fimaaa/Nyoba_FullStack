'use strict';

const { encryptPassword } = require('../helpers/bcrypt')
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  user.init({
    nama: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING

    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING
    }
}, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = encryptPassword(user.password);
        user.image = user.image || "https://via.placeholder.com/150";
      },
      beforeUpdate: (user, options) => {
        user.password = encryptPassword(user.password);
      },
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};