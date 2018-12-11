var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.all(function(data) {
    console.log(data);
    res.render("index", { burgers: data });
  });
});

router.post("/api/burger/", function(req, res) {
  console.log("Creating burger with name: " + req.body.burgerName);
  burger.make(req.body.burgerName, function(result) {
    res.json(result);
  });
});

router.put("/api/burger/", function(req, res) {
  burger.devour(req.body.id, function(result) {
    if (result.changedRows == 0) {
      res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

module.exports = router;