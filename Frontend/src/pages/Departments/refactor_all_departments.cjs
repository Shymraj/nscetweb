const fs = require('fs');
const path = require('path');

const departments = [
  { file: 'mechanical/Mechanical.jsx', name: 'mechanical', data: 'mechanicalFacultyData', depth: '../../../' },
  { file: 'civil/Civil.jsx', name: 'civil', data: 'civilFacultyData', depth: '../../../' },
  { file: 'electronics/Electronics.jsx', name: 'electronics', data: 'electronicsFacultyData', depth: '../../../' },
  { file: 'electrical/Electrical.jsx', name: 'electrical', data: 'electricalFacultyData', depth: '../../../' },
  { file: 's&h/ScienceHumanities.jsx', name: 'science and humanities', data: 'shFacultyData', depth: '../../../' },
  { file: 'cse/MECSE.jsx', name: 'm.e. - computer science', data: 'mecseFacultyData', depth: '../../../' },
  { file: 'mechanical/MEManufacturing.jsx', name: 'm.e. - manufacturing', data: 'memanufacturingFacultyData', depth: '../../../../' },
  { file: 'civil/MEStructural.jsx', name: 'm.e. - structural', data: 'mestructuralFacultyData', depth: '../../../../' },
  { file: 'electrical/MEEmbedded.jsx', name: 'm.e. - embedded', data: 'meembeddedFacultyData', depth: '../../../../' }
];

departments.forEach(dept => {
  const filePath = path.join(__dirname, dept.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes('useDepartmentStaff')) {
      content = content.replace(/(import React.*from "react";\r?\nimport { motion } from "framer-motion";)/, `$1\nimport { useDepartmentStaff } from "${dept.depth}hooks/useDepartmentStaff";`);
      
      const regex = new RegExp(`const faculties = ${dept.data};`);
      if (content.match(regex)) {
        content = content.replace(regex, `const faculties = useDepartmentStaff(['${dept.name}'], ${dept.data});`);
        fs.writeFileSync(filePath, content);
        console.log(`Refactored ${dept.file}`);
      } else {
        console.log(`Failed to find 'const faculties = ${dept.data};' in ${dept.file}`);
      }
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
