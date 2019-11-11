var db = require("../models");

module.exports = function(app) {
  // Get all Characters
  app.get("/api/Characters", function(req, res) {
    db.Characters.findAll({}).then(function(dbCharacters) {
      res.json(dbCharacters);
    });
  });

  // Create a new Characters
  app.post("/api/Characters", function(req, res) {
    db.Characters.create(req.body).then(function(dbCharacters) {
      res.json(dbCharacters);
    });
  });

  // Delete an Characters by id
  app.delete("/api/Characters/:id", function(req, res) {
    db.Characters.destroy({ where: { id: req.params.id } }).then(function(dbCharacters) {
      res.json(dbCharacters);
    });
  });
};
