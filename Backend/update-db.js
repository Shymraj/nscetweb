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
  console.log("✅ Connected to Database. Running schema update...");

  const query = `ALTER TABLE staff 
                 ADD COLUMN email VARCHAR(255), 
                 ADD COLUMN qualifications TEXT, 
                 ADD COLUMN is_hod BOOLEAN DEFAULT false`;

  connection.query(query, (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_FIELDNAME') {
         console.log("✅ Columns already exist.");
      } else {
         console.error(`❌ Error updating schema:`, err.message);
      }
    } else {
      console.log(`✅ Schema updated successfully.`);
    }
    process.exit(0);
  });
});
