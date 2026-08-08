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

function findFacultyFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findFacultyFiles(fullPath, fileList);
    } else if (file === 'facultyData.js') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const frontendDeptsDir = path.join(__dirname, '../Frontend/src/pages/Departments');
const facultyFiles = findFacultyFiles(frontendDeptsDir);

db.connect(err => {
  if (err) throw err;
  console.log("Connected to DB");

  let updates = 0;
  
  facultyFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    const blocks = content.split(/id:\s*["']/);
    blocks.shift(); // Remove the top imports/preamble
    
    blocks.forEach(block => {
      const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
      const desigMatch = block.match(/desig:\s*["']([^"']+)["']/);
      const qualMatch = block.match(/qual:\s*["']([^"']+)["']/);
      const emailMatch = block.match(/email:\s*["']([^"']+)["']/);
      const specMatch = block.match(/spec:\s*["']([^"']+)["']/);
      
      if (nameMatch) {
        const name = nameMatch[1];
        const desig = desigMatch ? desigMatch[1] : 'Assistant Professor';
        const qual = qualMatch ? qualMatch[1] : 'N/A';
        const email = emailMatch ? emailMatch[1] : 'N/A';
        const spec = specMatch ? specMatch[1] : 'N/A';
        
        // Remove titles and split by space or dot
        const nameParts = name.replace(/Dr\.\s*|Mr\.\s*|Mrs\.\s*|Ms\.\s*/i, '').trim().split(/[\s.]+/);
        // Use the longest word in the name to match against the DB
        const searchName = nameParts.reduce((a, b) => a.length > b.length ? a : b);
        
        if (searchName.length < 3) return;
        
        db.query(
          `UPDATE staff SET designation = ?, qualifications = ?, email = ?, research = ? WHERE name LIKE ? AND qualifications = 'N/A'`,
          [desig, qual, email, spec, "%" + searchName + "%"],
          (err, result) => {
            if (err) {
              console.error(`Error updating ${name}:`, err);
            } else if (result.affectedRows > 0) {
              console.log(`Updated details for: ${name}`);
              updates++;
            }
          }
        );
      }
    });
  });

  setTimeout(() => {
    console.log(`Finished updating DB. Total matches: ${updates}`);
    process.exit();
  }, 3000);
});
