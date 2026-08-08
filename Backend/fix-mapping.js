const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

function normalizeName(name) {
  return name.replace(/^(dr|mr|mrs|ms|prof)\.?\s+/i, '').replace(/[^a-z]/gi, '').toLowerCase();
}

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

async function run() {
  console.log("Connected to DB");
  const [dbStaff] = await pool.query('SELECT id, name FROM staff');
  
  const frontendDeptsDir = path.join(__dirname, '../Frontend/src/pages/Departments');
  const facultyFiles = findFacultyFiles(frontendDeptsDir);
  
  const frontendStaff = [];
  
  facultyFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const blocks = content.split(/id:\s*["']/);
    blocks.shift(); 
    
    blocks.forEach(block => {
      const nameMatch = block.match(/name:\s*["']([^"']+)["']/);
      const desigMatch = block.match(/desig:\s*["']([^"']+)["']/);
      const qualMatch = block.match(/qual:\s*["']([^"']+)["']/);
      const emailMatch = block.match(/email:\s*["']([^"']+)["']/);
      const specMatch = block.match(/spec:\s*["']([^"']+)["']/);
      
      if (nameMatch) {
        frontendStaff.push({
          name: nameMatch[1],
          desig: desigMatch ? desigMatch[1] : 'Assistant Professor',
          qual: qualMatch ? qualMatch[1] : 'N/A',
          email: emailMatch ? emailMatch[1] : 'N/A',
          spec: specMatch ? specMatch[1] : 'N/A'
        });
      }
    });
  });
  
  let matchCount = 0;
  
  for (const dbRow of dbStaff) {
    const dbNameNorm = normalizeName(dbRow.name);
    
    // Find best match from frontendStaff
    let bestMatch = null;
    for (const fs of frontendStaff) {
      const fsNameNorm = normalizeName(fs.name);
      
      if (dbNameNorm === fsNameNorm || 
         (dbNameNorm.length > 5 && fsNameNorm.includes(dbNameNorm)) || 
         (fsNameNorm.length > 5 && dbNameNorm.includes(fsNameNorm))) {
        bestMatch = fs;
        break; // Found a match
      }
    }
    
    if (bestMatch) {
      await pool.query(
        `UPDATE staff SET name = ?, designation = ?, qualifications = ?, email = ?, research = ? WHERE id = ?`,
        [bestMatch.name, bestMatch.desig, bestMatch.qual, bestMatch.email, bestMatch.spec, dbRow.id]
      );
      matchCount++;
      // console.log(`Matched: ${dbRow.name} -> ${bestMatch.name}`);
    } else {
      console.log(`NO MATCH FOUND FOR DB STAFF: ${dbRow.name}`);
    }
  }
  
  console.log(`Successfully fixed mapping for ${matchCount} out of ${dbStaff.length} staff.`);
  
  // Let's re-run the HOD script just to be sure we didn't overwrite the HOD designations with standard ones!
  const hodUpdates = [
    { name: 'Mathalai', title: 'Assistant Professor & Head [I/C]', dept: 'Computer Science and Engineering' },
    { name: 'Venish', title: 'Head of the Department (HOD)', dept: 'Electronics and Communication Engineering' },
    { name: 'Athilingam', title: 'Head of the Department (HOD)', dept: 'Electrical and Electronics Engineering' },
    { name: 'Radhakrishnan', title: 'Head of the Department (HOD)', dept: 'Mechanical Engineering' },
    { name: 'Nagarathinam', title: 'Head of the Department (HOD)', dept: 'Civil Engineering' }
  ];

  for (const u of hodUpdates) {
    await pool.query(
      `UPDATE staff SET is_hod = 1, designation = ? WHERE department = ? AND name LIKE ?`, 
      [u.title, u.dept, "%" + u.name + "%"]
    );
  }

  process.exit();
}

run();
