'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    nickname: DataTypes.STRING,
    telegramId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};