module.exports = function(sequelize, DataTypes) {
    var Campaigns = sequelize.define("Campaigns", {
      text: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return Campaigns;
  };
  