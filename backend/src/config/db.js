const mysql = require("mysql2/promise");

// create the connection to database
const connection = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "unitrends1",
  database: "salesforce",
});

module.exports = connection;
