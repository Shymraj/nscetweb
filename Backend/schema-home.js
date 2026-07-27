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
  console.log("✅ Connected to MySQL Database");

  const queries = [
    `CREATE TABLE IF NOT EXISTS home_marquee (
      id INT AUTO_INCREMENT PRIMARY KEY,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_hero (
      id INT AUTO_INCREMENT PRIMARY KEY,
      heading VARCHAR(255) NOT NULL,
      sub_heading VARCHAR(255),
      paragraph TEXT,
      button_name VARCHAR(100),
      url VARCHAR(500),
      photo_url VARCHAR(500),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_timer (
      id INT AUTO_INCREMENT PRIMARY KEY,
      event_name VARCHAR(255) NOT NULL,
      target_date DATETIME NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_news (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date DATE,
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_video (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255),
      video_url VARCHAR(500) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_image (
      id INT AUTO_INCREMENT PRIMARY KEY,
      caption VARCHAR(255),
      photo_url VARCHAR(500) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_principal (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      message TEXT,
      photo_url VARCHAR(500),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_ug_course (
      id INT AUTO_INCREMENT PRIMARY KEY,
      course_name VARCHAR(255) NOT NULL,
      description TEXT,
      photo_url VARCHAR(500),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_pg_course (
      id INT AUTO_INCREMENT PRIMARY KEY,
      course_name VARCHAR(255) NOT NULL,
      description TEXT,
      photo_url VARCHAR(500),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_counter (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      count_value INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS home_recruiter (
      id INT AUTO_INCREMENT PRIMARY KEY,
      company_name VARCHAR(255),
      logo_url VARCHAR(500) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`
  ];

  let completed = 0;
  queries.forEach((query) => {
    connection.query(query, (err) => {
      if (err) {
        console.error("❌ Error creating table:", err.message);
      } else {
        console.log("✅ Table created successfully");
      }
      completed++;
      if (completed === queries.length) {
        console.log("🎉 All Home Page tables initialized.");
        process.exit(0);
      }
    });
  });
});
