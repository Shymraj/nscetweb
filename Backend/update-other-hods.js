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
  
  const updates = [
    { name: 'Mathalai', title: 'Assistant Professor & Head [I/C]', dept: 'Computer Science and Engineering' },
    { name: 'Venish', title: 'Head of the Department (HOD)', dept: 'Electronics and Communication Engineering' },
    { name: 'Athilingam', title: 'Head of the Department (HOD)', dept: 'Electrical and Electronics Engineering' },
    { name: 'Radhakrishnan', title: 'Head of the Department (HOD)', dept: 'Mechanical Engineering' },
    { name: 'Nagarathinam', title: 'Head of the Department (HOD)', dept: 'Civil Engineering' }
  ];

  updates.forEach(u => {
    db.query(
      `UPDATE staff SET is_hod = 1, designation = ? WHERE department = ? AND name LIKE ?`, 
      [u.title, u.dept, "%" + u.name + "%"],
      (err, result) => {
        if (err) console.error(`Error updating HOD for ${u.dept}:`, err);
        else console.log(`Updated HOD for ${u.dept}: ${u.name}`, result.affectedRows);
      }
    );
  });

  setTimeout(() => process.exit(), 2000);
});
