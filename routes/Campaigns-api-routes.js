var db = require("../models");

module.exports = function (app) {
  // Get all Campaigns
  app.get("/api/Campaigns", function (req, res) {
    db.Campaigns.findAll({}).then(function (dbCampaigns) {
      res.json(dbCampaigns);
    });
  });

  // Create a new Campaigns
  app.post("/api/Campaigns", function (req, res) {
    db.Campaigns.create(req.body).then(function (dbCampaigns) {
      res.json(dbCampaigns);
    });
  });

  // Delete an Campaigns by id
  app.delete("/api/Campaigns/:id", function (req, res) {
    db.Campaigns.destroy({ where: { id: req.params.id } }).then(function (dbCampaigns) {
      res.json(dbCampaigns);
    });
  });
};
