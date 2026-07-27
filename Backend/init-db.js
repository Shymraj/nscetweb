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
  console.log("✅ Connected to Database. Running initialization scripts...");

  const queries = [
    `CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS staff (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      designation VARCHAR(255),
      department VARCHAR(255),
      photo_url VARCHAR(500)
    )`,
    `CREATE TABLE IF NOT EXISTS events (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) NOT NULL UNIQUE,
      description TEXT
    )`,
    `CREATE TABLE IF NOT EXISTS event_photos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      event_id INT,
      photo_url VARCHAR(500) NOT NULL,
      FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
    )`,
    `CREATE TABLE IF NOT EXISTS departments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT,
      photo_url VARCHAR(500)
    )`,
    `INSERT INTO admins (username, password) 
     SELECT 'nscet', 'nscet9210' 
     WHERE NOT EXISTS (SELECT * FROM admins WHERE username = 'nscet')`
  ];

  let completed = 0;

  queries.forEach((query, index) => {
    connection.query(query, (err, results) => {
      if (err) {
        console.error(`❌ Error in query ${index + 1}:`, err.message);
      } else {
        console.log(`✅ Query ${index + 1} executed successfully.`);
      }
      completed++;
      if (completed === queries.length) {
        console.log("🎉 Database initialization complete.");
        process.exit(0);
      }
    });
  });
});
