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
  
  const destDir = path.join(__dirname, 'uploads/staff');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const depts = [
    { srcName: 'AIDS', dbName: 'Artificial Intelligence & Data Science' },
    { srcName: 'IT', dbName: 'Information Technology' }
  ];

  depts.forEach(dept => {
    const srcDir = path.join(__dirname, '../Frontend/public', dept.srcName);
    if (!fs.existsSync(srcDir)) {
      console.log(`Directory not found: ${srcDir}`);
      return;
    }

    const files = fs.readdirSync(srcDir).filter(f => f.match(/\.(jpg|jpeg|png|gif)$/i));
    console.log(`Found ${files.length} files in ${srcDir}`);

    files.forEach(file => {
      const srcPath = path.join(srcDir, file);
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file);
      const destFilename = `${dept.srcName.toLowerCase()}-${uniqueSuffix}${ext}`;
      const destPath = path.join(destDir, destFilename);
      
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to ${destPath}`);

      const nameWithoutExt = path.basename(file, ext);
      let name = nameWithoutExt.replace(/_/g, ' ').trim();
      name = name.charAt(0).toUpperCase() + name.slice(1);
      
      const is_hod = false;
      const designation = "Assistant Professor";
      const email = "N/A";
      const qualifications = "N/A";
      const research = "N/A";
      const photo_url = `/uploads/staff/${destFilename}`;

      const sql = "INSERT INTO staff (name, designation, department, photo_url, email, qualifications, research, is_hod) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      
      db.query(sql, [name, designation, dept.dbName, photo_url, email, qualifications, research, is_hod], (err, result) => {
        if (err) console.error("DB Error for " + name + ":", err);
        else console.log(`Inserted ${name} into DB for ${dept.dbName}`);
      });
    });
  });

  setTimeout(() => process.exit(), 3000);
});
