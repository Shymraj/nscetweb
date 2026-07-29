const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) return console.error(err);
  connection.query("SELECT * FROM home_marquee", (err, results) => {
    if (err) console.error(err);
    console.log("Marquees:", results);
    process.exit(0);
  });
});
