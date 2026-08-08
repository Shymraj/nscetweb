const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

async function run() {
  console.log("Connected to DB");
  const manualUpdates = [
    { dbName: 'Dr. K. Velkumar', newName: 'Dr. Velkumar K', qual: 'M.E, Ph.D', desig: 'Assistant Professor', email: 'velkumarskc@gmail.com', spec: 'Recommendation Systems' },
    { dbName: 'Mrs. R. Archana', newName: 'Archana R', qual: 'M.E., (Ph.D)', desig: 'Assistant Professor', email: 'archana@nscet.org', spec: 'Data Science' },
    { dbName: 'Nithya Preethi', newName: 'V.Nithyapriya', qual: 'M.E.', desig: 'Assistant Professor', email: 'nithyapriya@nscet.org', spec: 'Operating System' },
    { dbName: 'PAVITHRA M', newName: 'M. Pavithra', qual: 'M.E.', desig: 'Assistant Professor', email: 'pavithra@nscet.org', spec: 'Network Security' },
    { dbName: 'Mr. C. Pradhap', newName: 'Prathap C', qual: 'M.Tech., (Ph.D)', desig: 'Assistant Professor & Head [I/C]', email: 'pradhap@nscet.org', spec: 'Wireless Networks' },
    { dbName: 'Shiva', newName: 'Shiva C', qual: 'M.E., (Ph.D.)', desig: 'Assistant Professor', email: 'shiva@nscet.org', spec: 'Renewable Energy Systems' },
    { dbName: 'Chakravarthysamydurai', newName: 'Mr. J. Chakaravarthy Samy Durai', qual: 'M.E., MISTE.', desig: 'Assistant Professor', email: 'chakravarthysamydurai@nscet.org', spec: 'Industrial Engineering' },
    { dbName: 'Nathira', newName: 'Nathirun Sabinash', qual: 'M.E.', desig: 'Assistant Professor', email: 'nathirunsabinash@nscet.org', spec: 'Structural Engineering' }
  ];

  for (const u of manualUpdates) {
    const [result] = await pool.query(
      `UPDATE staff SET name = ?, designation = ?, qualifications = ?, email = ?, research = ? WHERE name = ?`, 
      [u.newName, u.desig, u.qual, u.email, u.spec, u.dbName]
    );
    if (result.affectedRows > 0) {
      console.log(`Successfully fixed details for: ${u.dbName}`);
    } else {
      console.log(`Failed to find in DB: ${u.dbName}`);
    }
  }

  process.exit();
}

run();
