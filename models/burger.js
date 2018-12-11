var orm = require("../config/orm");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  make: function(burgerName, cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },
  devour: function(burgerId, cb) {
    console.log(burgerId);
    orm.updateOne(burgerId, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;