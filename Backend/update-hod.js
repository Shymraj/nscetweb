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
  
  // Update IT HOD
  db.query(
    `UPDATE staff SET is_hod = 1, name = 'Mr. C. Pradhap', designation = 'Assistant Professor & Head [I/C]' WHERE department = 'Information Technology' AND name LIKE '%Prathap%'`, 
    (err, result) => {
      if (err) console.error("Error updating IT HOD:", err);
      else console.log("Updated IT HOD: C. Pradhap", result.affectedRows);
    }
  );

  // Update AIDS HOD
  db.query(
    `UPDATE staff SET is_hod = 1, name = 'Mr. L.S. Vignesh', designation = 'Assistant Professor & Head [I/C]' WHERE department = 'Artificial Intelligence & Data Science' AND name LIKE '%Vignesh%'`, 
    (err, result) => {
      if (err) console.error("Error updating AIDS HOD:", err);
      else console.log("Updated AIDS HOD: L.S. Vignesh", result.affectedRows);
    }
  );

  setTimeout(() => process.exit(), 2000);
});
