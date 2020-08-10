const mysql = require("mysql");

const connectionString = process.env.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Vetrivelk01#",
  database: "burgers_db",
};

const connection = mysql.createConnection(connectionString);

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
