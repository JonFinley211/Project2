var db = require("../models");

module.exports = function (app) {
  // Load index page

  app.get("/", function (req, res) {
    db.Logins.findAll({}).then(function(dbLogins) {
      res.render("index");
    });
  });


  //  Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {

  // app.get("/", function (req, res) {
  //   res.render("index");
  // });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {

  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get("/createuser", function (req, res) {
    res.render("password");
  });
  app.get("/signin", function (req, res) {
    res.render("passwordvarification");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
}

