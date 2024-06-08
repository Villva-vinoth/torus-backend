const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 100,
  // port:3306,
  // connectTimeout: 30000

});



module.exports = pool;
