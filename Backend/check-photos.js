const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
db.query("SELECT name, photo_url FROM staff WHERE department = 'Civil Engineering'", (err, res) => {
  console.log(res);
  process.exit();
});
