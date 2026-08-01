import fs from 'fs';
import path from 'path';

const basePath = 'd:/gowtham/ns/nscetweb/Frontend/src/pages/Departments';

const departments = [
  { dir: 'cse/it', name: 'IT', prefix: 'it', file: 'IT.jsx' },
  { dir: 'cse/aids', name: 'AIDS', prefix: 'aids', file: 'AIDS.jsx' },
  { dir: 'electronics', name: 'Electronics', prefix: 'electronics', file: 'Electronics.jsx' },
  { dir: 'electrical', name: 'Electrical', prefix: 'electrical', file: 'Electrical.jsx' },
  { dir: 'mechanical', name: 'Mechanical', prefix: 'mechanical', file: 'Mechanical.jsx' },
  { dir: 's&h', name: 'SH', prefix: 'sh', file: 'ScienceHumanities.jsx' },
];

departments.forEach(dept => {
  const jsxFile = path.join(basePath, dept.dir, dept.file);
  const dataFile = path.join(basePath, dept.dir, 'facultyData.js');

  if (fs.existsSync(jsxFile)) {
    const content = fs.readFileSync(jsxFile, 'utf8');
    
    // Extract imports for images
    const imports = [];
    const importRegex = /import\s+(\w+)\s+from\s+["'](\.\/images\/[^"']+)["'];/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      imports.push(match[0]);
    }
    
    // Extract faculties array
    const arrayRegex = /const faculties = (\[[\s\S]*?\]);/m;
    const arrayMatch = content.match(arrayRegex);
    
    if (arrayMatch) {
      let arrayContent = arrayMatch[1];
      
      // We need to inject the dummy data into each object
      // We'll just replace "}" with dummy data + "}" for each object
      
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

      // add id and slug if not present
      let index = 0;
      arrayContent = arrayContent.replace(/\{([\s\S]*?)\}/g, (match, inner) => {
        let result = inner;
        if (!inner.includes('id:')) {
            const nameMatch = inner.match(/name:\s*["']([^"']+)["']/);
            const name = nameMatch ? nameMatch[1] : `faculty-${index}`;
            const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            result = `id: "${slug}", slug: "${slug}", ${result}`;
        }
        
        // Append dummy data
        result += dummyDataStr;
        index++;
        return `{${result}}`;
      });
      
      const fileOutput = `${imports.join('\n')}\n\nexport const ${dept.prefix}FacultyData = ${arrayContent};\n`;
      fs.writeFileSync(dataFile, fileOutput, 'utf8');
      console.log(`Generated ${dept.dir}/facultyData.js`);
    } else {
      console.log(`No faculties array found in ${dept.dir}/${dept.file}`);
    }
  }
});
