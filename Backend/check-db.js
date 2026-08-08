const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to DB");
  
  db.query(`SELECT id, name, department, designation, qualifications FROM staff ORDER BY department, name`, (err, results) => {
    if (err) console.error(err);
    else {
      console.log(`Total staff: ${results.length}`);
      const missed = results.filter(r => r.qualifications === 'N/A');
      console.log(`\n--- Staff with 'N/A' qualifications (${missed.length}) ---`);
      missed.forEach(r => console.log(`${r.department} | ${r.name}`));

      console.log(`\n--- Random Sample of Updated Staff (Checking for Mismatches) ---`);
      const updated = results.filter(r => r.qualifications !== 'N/A');
      updated.forEach(r => console.log(`${r.name} -> ${r.designation} | ${r.qualifications}`));
    }
    process.exit();
  });
});
