var connection = require("../config/connection");

var orm = {
  selectAll: function (cb) {
    connection.query("SELECT * FROM burgers",
      function (err, result) {
        if (err) console.log(err);
        cb(result);
      }
    );
  },
  insertOne: function (name, cb) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)",
      name,
      function (err, result) {
        if (err) console.log(err);
        cb(result);
      });

  },
  updateOne: function (id, cb) {
    connection.query("UPDATE burgers SET devoured=true WHERE id=?",
      id,
      function (err, result) {
        if (err) console.log(err);
        cb(result);
      });
  }
};

module.exports = orm;