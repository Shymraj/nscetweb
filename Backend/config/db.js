const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : "",
  database: process.env.DB_NAME || "college_db",
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000
});

// Test connection and initialize tables
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database Connection Failed:", err.message);
    console.error("👉 Please verify your DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT in .env");
  } else {
    console.log("✅ Database Connected Successfully");
    connection.release();

    try {
      const { initializeDatabase } = require("./initDb");
      initializeDatabase().catch((initErr) => {
        console.error("⚠️ Error during database initialization:", initErr.message);
      });
    } catch (e) {
      console.error("⚠️ Could not trigger initializeDatabase:", e.message);
    }
  }
});

module.exports = db;
