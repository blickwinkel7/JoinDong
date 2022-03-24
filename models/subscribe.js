'use strict';
const { database } = require('pg/lib/defaults');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscribe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subscribe.init({
    totalMember: DataTypes.INTEGER,
    UserId : DataTypes.INTEGER,
    ProductId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subscribe',
  });
  return Subscribe;
};