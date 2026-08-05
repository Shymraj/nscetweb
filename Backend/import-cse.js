const fs = require('fs');
const path = require('path');
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
  
  const srcDir = path.join(__dirname, '../Frontend/public/CSE');
  const destDir = path.join(__dirname, 'uploads/staff');
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir);
  console.log(`Found ${files.length} files in ${srcDir}`);

  files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file);
    const destFilename = `cse-${uniqueSuffix}${ext}`;
    const destPath = path.join(destDir, destFilename);
    
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to ${destPath}`);

    const nameWithoutExt = path.basename(file, ext);
    let name = nameWithoutExt.replace(/_/g, ' ').trim();
    // basic capitalization
    name = name.charAt(0).toUpperCase() + name.slice(1);
    
    let is_hod = false;
    let designation = "Assistant Professor";
    let email = "";
    let qualifications = "";

    if (name.toLowerCase().includes('mathalairaj')) {
      name = "Dr. J. Mathalai Raj";
      designation = "Assistant Professor & Head [I/C]";
      is_hod = true;
      email = "hodcse@nscet.org";
      qualifications = "M.E (CSE), Ph.D";
    } else if (name.toLowerCase().includes('velkumar')) {
      name = "Mr. K. Velkumar";
      email = "velkumar@nscet.org";
      qualifications = "M.E., (Ph.D).,";
    } else if (name.toLowerCase().includes('archana')) {
      name = "Mrs. R. Archana";
      email = "archana@nscet.org";
      qualifications = "M.E., (Ph.D)";
    }

    const photo_url = `/uploads/staff/${destFilename}`;
    const department = "Computer Science and Engineering";
    const research = "N/A";

    const sql = "INSERT INTO staff (name, designation, department, photo_url, email, qualifications, research, is_hod) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sql, [name, designation, department, photo_url, email, qualifications, research, is_hod], (err, result) => {
      if (err) console.error("DB Error for " + name + ":", err);
      else console.log(`Inserted ${name} into DB`);
    });
  });
  
  setTimeout(() => process.exit(), 2000);
});
