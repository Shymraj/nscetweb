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
  connection.query("DROP TABLE IF EXISTS home_marquee", (err) => {
    if (err) return console.error(err);
    
    const query = `CREATE TABLE IF NOT EXISTS home_marquee (
      id INT AUTO_INCREMENT PRIMARY KEY,
      content TEXT NOT NULL,
      is_active BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    
    connection.query(query, (err) => {
      if (err) return console.error(err);
      console.log("Fixed home_marquee table to use 'content' column.");
      process.exit(0);
    });
  });
});
