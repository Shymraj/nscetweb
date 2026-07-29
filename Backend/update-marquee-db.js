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
  if (err) {
    console.error("❌ Database Connection Failed:", err.message);
    process.exit(1);
  }
  console.log("✅ Connected to Database. Creating home_marquee table...");

  const query = `CREATE TABLE IF NOT EXISTS home_marquee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error(`❌ Error creating table:`, err.message);
    } else {
      console.log(`✅ Table home_marquee created or already exists.`);
    }
    process.exit(0);
  });
});
