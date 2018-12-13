var connection = require("./connection.js");

//ORM Object Relational Mapper 

var orm = {
  selectAll: function(tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},
insertOne: function(table, cols, vals, cb) {
  connection.query("INSERT INTO ?? (burger_name, devoured) VALUES (?, ?)", [req.body.burger_name, req.body.devoured], function(
    err,
    result
  ) {
    if (err) {
      // If an error occurred, send a generic server failure
      return res.status(500).end();
    }
    // Send back the ID
    res.json({ id: result.insertId });
  });
  var queryString = "INSERT INTO " + table;
  queryString += " (";
  queryString += burger_name;
  queryString += ") ";
  

  console.log(queryString);

  connection.query(queryString, val, function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
},

updateOne: function(table, burger_name, cb) {
  var queryString = "UPDATE " + table;
  queryString += " SET ";
  queryString += burger_name;
  queryString += " WHERE ";
  queryString += devoured;

  console.log(queryString);
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }

    cb(result);
  });
},

};

//export orm
module.exports = orm;