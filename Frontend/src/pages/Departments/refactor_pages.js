import fs from 'fs';

const files = [
  { path: 'd:/gowtham/ns/nscetweb/Frontend/src/pages/Departments/cse/CSE.jsx', prefix: 'cse', deptId: 'cse' },
  { path: 'd:/gowtham/ns/nscetweb/Frontend/src/pages/Departments/cse/it/IT.jsx', prefix: 'it', deptId: 'it' },
  { path: 'd:/gowtham/ns/nscetweb/Frontend/src/pages/Departments/cse/aids/AIDS.jsx', prefix: 'aids', deptId: 'aids' },
  { path: 'd:/gowtham/ns/nscetweb/Frontend/src/pages/Departments/electronics/Electronics.jsx', prefix: 'electronics', deptId: 'electronics' },
  { path: 'd:/gowtham/ns/nscetweb/Frontend/src/pages/Departments/electrical/Electrical.jsx', prefix: 'electrical', deptId: 'electrical' },
  { path: 'd:/gowtham/ns/nscetweb/Frontend/src/pages/Departments/mechanical/Mechanical.jsx', prefix: 'mechanical', deptId: 'mechanical' },
  { path: 'd:/gowtham/ns/nscetweb/Frontend/src/pages/Departments/s&h/ScienceHumanities.jsx', prefix: 'sh', deptId: 'science-humanities' }
];

files.forEach(f => {
  let content = fs.readFileSync(f.path, 'utf8');

  // 1. Add import for facultyData
  if (!content.includes(`import { ${f.prefix}FacultyData }`)) {
    content = content.replace(/(import .* from "react-icons.*";)/, `$1\nimport { ${f.prefix}FacultyData } from "./facultyData";`);
  }

  // 2. Remove FacultyProfileModal import
  content = content.replace(/import FacultyProfileModal[^;]+;\n/g, '');

  // 3. Replace setSelectedFacultyProfile with handleOpenProfile
  content = content.replace(/const \[selectedFacultyProfile, setSelectedFacultyProfile\] = useState\(null\);/g, `const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(\`/departments/${f.deptId}/faculty/\${facultyId}\`, "_blank");
  };`);

  // 4. Replace the faculties array declaration with assignment from import
  const arrayRegex = /const faculties = \[[\s\S]*?\];/m;
  content = content.replace(arrayRegex, `const faculties = ${f.prefix}FacultyData;`);

  // 5. Replace onOpenProfile={setSelectedFacultyProfile} with onOpenProfile={handleOpenProfile}
  content = content.replace(/onOpenProfile={setSelectedFacultyProfile}/g, `onOpenProfile={handleOpenProfile}`);

  // 6. Remove the rendered FacultyProfileModal component
  const modalRegex = /\{\/\* Reusable Faculty Academic Profile Fullscreen Modal \*\/\}[\s\S]*?<FacultyProfileModal[\s\S]*?\/>/m;
  content = content.replace(modalRegex, '');

  fs.writeFileSync(f.path, content, 'utf8');
  console.log(`Updated ${f.path}`);
});
