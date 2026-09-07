const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('d:/gowtham/ns/nscetweb/Frontend/src/pages/Departments').filter(f => f.endsWith('facultyData.js'));
const results = {};

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const items = [];
  
  const regex = /name:\s*["']([^"']+)["'][^}]*desig:\s*["']([^"']+)["'][^}]*qual:\s*["']([^"']*)["']/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    items.push({
      name: match[1],
      designation: match[2],
      qualification: match[3]
    });
  }
  if (items.length > 0) {
    results[file] = items;
  }
}

fs.writeFileSync('d:/gowtham/ns/nscetweb/scratch/extracted_faculty.json', JSON.stringify(results, null, 2));
