'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    createdAt: DataTypes.DATE,
    description: DataTypes.STRING,
    file: DataTypes.STRING,
    votesFor: DataTypes.INTEGER,
    votesAgainst: DataTypes.INTEGER,
    abstains: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};