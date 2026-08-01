import fs from 'fs';
import path from 'path';

const basePath = 'd:/gowtham/ns/nscetweb/Frontend/src/pages/Departments';

const departments = [
  { dir: 'cse', file: 'MECSE.jsx', prefix: 'mecse', deptId: 'me-cse', outDir: 'cse/mecse' },
  { dir: 'electrical', file: 'MEEmbedded.jsx', prefix: 'meembedded', deptId: 'me-embedded', outDir: 'electrical/meembedded' },
  { dir: 'mechanical', file: 'MEManufacturing.jsx', prefix: 'memanufacturing', deptId: 'me-manufacturing', outDir: 'mechanical/memanufacturing' },
  { dir: 'civil', file: 'MEStructural.jsx', prefix: 'mestructural', deptId: 'me-structural', outDir: 'civil/mestructural' },
];

departments.forEach(dept => {
  const jsxFile = path.join(basePath, dept.dir, dept.file);
  const outDirPath = path.join(basePath, dept.outDir);
  const dataFile = path.join(outDirPath, 'facultyData.js');

  // Create directory if not exists
  if (!fs.existsSync(outDirPath)) {
    fs.mkdirSync(outDirPath, { recursive: true });
  }

  if (fs.existsSync(jsxFile)) {
    let content = fs.readFileSync(jsxFile, 'utf8');
    
    // Extract imports for images
    const imports = [];
    const importRegex = /import\s+(\w+)\s+from\s+["'](\.\/images\/[^"']+|(?:\.\.\/)+images\/[^"']+|[^"']+\.jpg|[^"']+\.png|[^"']+\.jpeg|[^"']+\.webp)["'];/gi;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      // Fix relative paths for images if necessary
      let importPath = match[2];
      if (importPath.startsWith('./images/')) {
        importPath = '../' + importPath.substring(2);
      } else if (importPath.startsWith('../images/')) {
        importPath = '../../' + importPath.substring(3);
      }
      imports.push(`import ${match[1]} from "${importPath}";`);
    }
    
    // Extract faculties array
    const arrayRegex = /const faculties = (\[[\s\S]*?\]);/m;
    const arrayMatch = content.match(arrayRegex);
    
    if (arrayMatch) {
      let arrayContent = arrayMatch[1];
      
      const dummyDataStr = `,
    linkedin: "https://www.linkedin.com/in/dummy-nscet",
    about: "This is a placeholder professional summary. The actual academic and professional details will be updated shortly.",
    publications: [
      "Dummy Publication Title 1 — Journal of Engineering, 2024",
      "Dummy Publication Title 2 — International Conference, 2023"
    ],
    projects: [
      "Dummy Funded Project 1",
      "Dummy Consultancy Project 2"
    ],
    patents: [
      "Dummy Patent Application (Published - 2023)"
    ],
    awards: [
      "Dummy Excellence Award - 2024",
      "Dummy Best Researcher Award - 2023"
    ],
    experience: [
      "Assistant Professor, NSCET (2020 - Present)"
    ]`;

      let index = 0;
      arrayContent = arrayContent.replace(/\{([\s\S]*?)\}/g, (m, inner) => {
        let result = inner;
        if (!inner.includes('id:')) {
            const nameMatch = inner.match(/name:\s*["']([^"']+)["']/);
            const name = nameMatch ? nameMatch[1] : `faculty-${index}`;
            const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            result = `id: "${slug}", slug: "${slug}", ${result}`;
        }
        
        result += dummyDataStr;
        index++;
        return `{${result}}`;
      });
      
      // Filter out duplicate imports
      const uniqueImports = [...new Set(imports)];
      
      const fileOutput = `${uniqueImports.join('\n')}\n\nexport const ${dept.prefix}FacultyData = ${arrayContent};\n`;
      fs.writeFileSync(dataFile, fileOutput, 'utf8');
      console.log(`Generated ${dept.outDir}/facultyData.js`);
      
      // Now refactor the JSX file!
      // 1. Add import for facultyData
      if (!content.includes(`import { ${dept.prefix}FacultyData }`)) {
        content = content.replace(/(import .* from "react-icons.*";)/, `$1\nimport { ${dept.prefix}FacultyData } from "./${dept.outDir.split('/')[1]}/facultyData";`);
      }

      // 2. Remove FacultyProfileModal import
      content = content.replace(/import FacultyProfileModal[^;]+;\n/g, '');

      // 3. Replace setSelectedFacultyProfile with handleOpenProfile
      content = content.replace(/const \[selectedFacultyProfile, setSelectedFacultyProfile\] = useState\(null\);/g, `const handleOpenProfile = (member) => {
    if (!member) return;
    const facultyId = member.id || member.slug || "hod";
    window.open(\`/departments/${dept.deptId}/faculty/\${facultyId}\`, "_blank");
  };`);

      // 4. Replace the faculties array declaration with assignment from import
      content = content.replace(arrayRegex, `const faculties = ${dept.prefix}FacultyData;`);

      // 5. Replace onOpenProfile={setSelectedFacultyProfile} with onOpenProfile={handleOpenProfile}
      content = content.replace(/onOpenProfile={setSelectedFacultyProfile}/g, `onOpenProfile={handleOpenProfile}`);

      // 6. Remove the rendered FacultyProfileModal component
      const modalRegex = /\{\/\* Reusable Faculty Academic Profile Fullscreen Modal \*\/\}[\s\S]*?<FacultyProfileModal[\s\S]*?\/>/m;
      content = content.replace(modalRegex, '');

      fs.writeFileSync(jsxFile, content, 'utf8');
      console.log(`Refactored ${dept.dir}/${dept.file}`);
      
    } else {
      console.log(`No faculties array found in ${dept.dir}/${dept.file}`);
    }
  }
});
