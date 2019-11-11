module.exports = function(sequelize, DataTypes) {
  var Characters = sequelize.define("Characters", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Characters;
};
