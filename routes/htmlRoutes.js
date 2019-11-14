var path = require("path");
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/campaign", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/Loggedin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/loggedIn.html"));
  });

  // blog route loads blog.html
  app.get("/health", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/health.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/newuser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/newuser.html"));
  });
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
