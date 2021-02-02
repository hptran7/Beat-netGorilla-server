'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class leaderboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  leaderboard.init({
    userName: DataTypes.STRING,
    wpm: DataTypes.INTEGER,
    point: DataTypes.INTEGER,
    accuracy: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'leaderboard',
  });
  return leaderboard;
};