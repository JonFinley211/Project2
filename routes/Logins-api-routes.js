var db = require("../models");

module.exports = function(app) {
    // Get all Logins
    app.get("/api/Logins", function(req, res) {
      db.Logins.findAll({}).then(function(dbLogins) {
        res.json(dbLogins);
      });
    });
  
    // Create a new Logins
    app.post("/api/Logins", function(req, res) {
      db.Logins.create(req.body).then(function(dbLogins) {
        res.json(dbLogins);
      });
    });
  
    // Delete an Logins by id
    app.delete("/api/Logins/:id", function(req, res) {
      db.Logins.destroy({ where: { id: req.params.id } }).then(function(dbLogins) {
        res.json(dbLogins);
      });
    });
  };
  