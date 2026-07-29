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
  
  // Create columns. We use a try-catch pattern or just ignore errors if columns exist.
  const queries = [
    `ALTER TABLE events ADD COLUMN department VARCHAR(255)`,
    `ALTER TABLE events ADD COLUMN date VARCHAR(255)`,
    `ALTER TABLE events ADD COLUMN image_url VARCHAR(500)`
  ];

  let completed = 0;

  queries.forEach((query, index) => {
    connection.query(query, (err, results) => {
      if (err) {
        console.error(`❌ Note: query ${index + 1} (may already exist):`, err.message);
      } else {
        console.log(`✅ Query ${index + 1} executed successfully.`);
      }
      completed++;
      if (completed === queries.length) {
        console.log("🎉 Database update complete.");
        process.exit(0);
      }
    });
  });
});
