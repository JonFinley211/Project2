module.exports = function(sequelize, DataTypes) {
    var Logins = sequelize.define("Logins", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Logins;
  };
  