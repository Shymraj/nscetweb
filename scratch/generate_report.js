const providedData = {
  "civil": [
    { name: "Mr. Nagarathinam N", desig: "Assistant Professor", qual: "B.E - Civil, M.E - Structural" },
    { name: "Ms. Gayathri S", desig: "Assistant Professor", qual: "B.E - Civil, M.E - Structural" },
    { name: "Mr. Shanmugapriyan R", desig: "Assistant Professor", qual: "B.E - Civil, M.E - Structural" },
    { name: "Ms. Sowmiya B", desig: "Assistant Professor", qual: "B.E - Civil, M.E - Environmental" },
    { name: "Ms. Kanimozhi M", desig: "Assistant Professor", qual: "B.E - Civil, M.E - Structural" },
    { name: "Mr. Arul Jebaraj P", desig: "Assistant Professor", qual: "B.E - Civil, M.Tech - Structural" },
    { name: "Ms. Nathirun Sabinash R", desig: "Assistant Professor", qual: "B.E - Civil, M.E - Environmental" },
    { name: "Mr. Manojprabakar R", desig: "Assistant Professor", qual: "B.Tech - Civil, M.E - Environmental" },
    { name: "Mr. Hariprasath T", desig: "Assistant Professor", qual: "B.E - Civil, M.E - Construction" }
  ],
  "civil/mestructural": [
    { name: "Dr. Anantha Krishnan E", desig: "Associate Professor", qual: "B.E - Civil, M.E - Structural, Ph.D – Civil Engg" },
    { name: "Ms. Sindhu M", desig: "Assistant Professor", qual: "B.E - Civil, M.E - Structural" },
    { name: "Ms. Benita Merlin Isabella K", desig: "Assistant Professor", qual: "B.E - Civil, M.Tech - Structural" }
  ],
  "cse": [
    { name: "Dr. Mathalai Raj J", desig: "Assistant Professor", qual: "B.Tech. - IT, M.E - CSE, Ph.D - Information & Communication" },
    { name: "Ms. Archana R", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" },
    { name: "Ms. Deepiga K", desig: "Assistant Professor", qual: "B.E - ECE, M.E - CSE (Networks)" },
    { name: "Ms. Abirami Kayathiri S", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" },
    { name: "Mr. Velkumar K", desig: "Assistant Professor", qual: "B.Tech. - IT, M.E - CSE" },
    { name: "Ms. Venkatalakshmi M", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" },
    { name: "Ms. Anusuya V", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" },
    { name: "Ms. Vinothini V", desig: "Assistant Professor", qual: "B.E - CSE, M.E - Software" },
    { name: "Ms. Snega Priyanka J S", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" }
  ],
  "cse/mecse": [
    { name: "Dr. Sathya M", desig: "Professor", qual: "B.E - CSE, M.Tech. - IT, Ph.D - Information & Communication" },
    { name: "Mr. Naveenkarthick G R", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE (Networks)" }
  ],
  "electrical": [
    { name: "Mr. K. Ganesh", desig: "Assistant Professor", qual: "B.E - EEE, M.Tech - Power Systems" },
    { name: "Ms. Chitra R", desig: "Assistant Professor", qual: "B.E - Bio Medical, M.E - Applied Electronics" },
    { name: "Mr. R. Raja Karthick", desig: "Assistant Professor", qual: "B.E - ICE, M.E - Applied Electronics" },
    { name: "Ms. A. Nishetha Jeflin Nixon", desig: "Assistant Professor", qual: "B.E - EEE, M.E - Power Electronics and Drives" },
    { name: "Ms. M. Vijayalakshmi", desig: "Assistant Professor", qual: "B.E - EEE, M.E - Power Systems" },
    { name: "Mr. C. Shiva", desig: "Assistant Professor", qual: "B.E - EEE, M.E - Power Electronics and Drives" },
    { name: "Ms. N. Abirami", desig: "Assistant Professor", qual: "B.E - EEE, M.E - VLSI Design" },
    { name: "Ms. H. Juriya Banu", desig: "Assistant Professor", qual: "B.E - EEE, M.E - Power Systems" },
    { name: "Dr. N. Pandi Selvi", desig: "Assistant Professor", qual: "B.E - EEE, M.E - Power Systems" }
  ],
  "electronics": [
    { name: "Dr. T. Venishkumar", desig: "Professor & Head [I/C]", qual: "B.E - ECE, M.E - VLSI Design, Ph.D - Information & Communication" },
    { name: "Dr. N. Mathavan", desig: "Assistant Professor", qual: "B.Tech - ECE, M.E - Computer & Communication, Ph.D - Information & Communication" },
    { name: "Mr. M. Idhayachandran", desig: "Assistant Professor", qual: "B.E - ECE, M.E - VLSI Design" },
    { name: "Mr. S. Prathap", desig: "Assistant Professor", qual: "B.E - ECE, M.E - Communication Systems" },
    { name: "Mr. R. Pradeep Kumar", desig: "Assistant Professor", qual: "B.E - ECE, M.E - Applied Electronics" },
    { name: "Ms. T. Tamilselvi", desig: "Assistant Professor", qual: "B.E - ECE, M.Tech - VLSI Design" },
    { name: "Ms. P. Shantha Devi", desig: "Assistant Professor", qual: "B.E - ECE, M.E - VLSI Design" },
    { name: "Ms. P. Gowthami", desig: "Assistant Professor", qual: "B.E - ECE, M.E - Communication Systems" },
    { name: "Mr. K. Bharathi Kannan", desig: "Assistant Professor", qual: "B.E - ECE, M.E - VLSI Design" }
  ],
  "electrical/meembedded": [
    { name: "Dr. R. Athilingam", desig: "Associate Professor", qual: "B.E - EIE, M.E - Applied Electronics, Ph.D - Information & Communication" },
    { name: "Ms. S. Kalaivani", desig: "Assistant Professor", qual: "B.E - ECE, M.E - VLSI & Embedded System" }
  ],
  "mechanical": [
    { name: "Dr. B. Radha krishnan", desig: "Professor & Head [I/C] Mech & MFE", qual: "B.E - Mechanical, M.E - Manufacturing, Ph.D - Mechanical" },
    { name: "Mr. V. Sivaganesan", desig: "Assistant Professor / Deputy COE", qual: "B.E - Mechanical, M.E - Engineering Design" },
    { name: "Mr. R. Santhaseelan", desig: "Assistant Professor", qual: "B.E - Mechanical, M.E - Industrial Safety" },
    { name: "Mr. R. Nagaraja", desig: "Assistant Professor", qual: "B.E - Mechanical, M.E - Engineering Design" },
    { name: "Dr. B. Nagarajan", desig: "Assistant Professor", qual: "B.E - Mechanical, M.E - Manufacturing, Ph.D - Mechanical" },
    { name: "Mr. P. Surulimani", desig: "Assistant Professor", qual: "B.E - Mechanical, M.E - Manufacturing" },
    { name: "Mr. S. Harikishore", desig: "Assistant Professor", qual: "B.E - Mechanical, M.E - Manufacturing" },
    { name: "Mr. J. Chakaravarthy Samy Durai", desig: "Assistant Professor", qual: "B.E - Mechanical, M.E - Manufacturing" }
  ],
  "mechanical/memanufacturing": [
    { name: "Dr. C. Mathalai Sundaram", desig: "Principal", qual: "B.E - Mechanical, M.E - Manufacturing, Ph.D - Mechanical" },
    { name: "Dr. A. Vennimalai Rajan", desig: "Assistant Professor", qual: "B.E - Mechanical, M.E - Manufacturing, Ph.D - Mechanical" }
  ],
  "cse/aids": [
    { name: "Mr. Vignesh L S", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" },
    { name: "Mr. Vinoth Kumar J", desig: "Assistant Professor", qual: "B.E - ECE, M.E - CSE" },
    { name: "Ms. Kanimoli J", desig: "Assistant Professor", qual: "B.E - CSE, M.E. - Software" },
    { name: "Ms. Geerthiga G", desig: "Assistant Professor", qual: "B.Tech. - IT, M.E. - Software" },
    { name: "Ms. Pavithra M", desig: "Assistant Professor", qual: "B.Tech. - IT, M.E - CSE" },
    { name: "Ms. Nagajothi P", desig: "Assistant Professor", qual: "B.E - CSE, M.E. - Software" },
    { name: "Ms. Sunitha S", desig: "Assistant Professor", qual: "B.Tech. - IT, M.E - CSE" },
    { name: "Mr. Kodeeswaran S", desig: "Assistant Professor", qual: "B.Tech. - IT, M.Tech. - IT" }
  ],
  "cse/it": [
    { name: "Mr. C. Prathap", desig: "Assistant Professor", qual: "B.E - CSE, M.Tech - CSE" },
    { name: "Mr. R. Udhaya Kumar", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE, M.B.A - ITM" },
    { name: "Ms. S. Arul Jothi", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" },
    { name: "Mr. N. Kesavamoorthy", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" },
    { name: "Ms. B. Sai Suganya", desig: "Assistant Professor", qual: "B.Tech. - IT, M.Tech. - IT" },
    { name: "Ms. S. Mahalakshmi", desig: "Assistant Professor", qual: "B.Tech. - IT, M.E - CSE" },
    { name: "Ms. M. Bhavani", desig: "Assistant Professor", qual: "B.E - CSE, M.Tech - CSE" },
    { name: "Ms. P. Jasmine Jose", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" }
  ],
  "s&h": [
    { name: "Dr. David Mathan N", desig: "Professor", qual: "B.Sc., M.Sc., Ph.D - Chemistry" },
    { name: "Dr. Saravana Kumar R", desig: "Associate Professor", qual: "B.Sc., M.Sc., Ph.D - Chemistry" },
    { name: "Dr. Srinithi S", desig: "Assistant Professor", qual: "B.Sc., M.Sc., Ph.D - Chemistry" },
    { name: "Dr. Devimeenakshi S", desig: "Assistant Professor", qual: "B.Sc., M.Sc., Ph.D - Chemistry" },
    { name: "Dr. Sumathra M", desig: "Assistant Professor", qual: "B.Sc., M.Sc., Ph.D - Chemistry" },
    { name: "Dr. Malarvizhi P", desig: "Assistant Professor", qual: "B.A., M.A., Ph.D - English" },
    { name: "Dr. Valarmathi R", desig: "Assistant Professor", qual: "B.A., M.A., Ph.D - English" },
    { name: "Dr. Selvapriya S", desig: "Assistant Professor", qual: "B.A., M.A., Ph.D - English" },
    { name: "Ms. Reka S", desig: "Assistant Professor", qual: "B.A., M.A., English (SET)" },
    { name: "Ms. Sangeetha V", desig: "Assistant Professor", qual: "B.A., M.A., English (NET)" },
    { name: "Dr. Mallaiyasamy B", desig: "Associate Professor", qual: "B.Sc., M.Sc., Ph.D - Maths" },
    { name: "Dr. Chithra C", desig: "Professor", qual: "B.Sc., M.Sc., Ph.D - Maths" },
    { name: "Mr. Murugan M", desig: "Assistant Professor", qual: "B.Sc., M.Sc – Maths (SET)" },
    { name: "Dr. Krishnamoorthi S R", desig: "Associate Professor", qual: "B.Sc., M.Sc., Ph.D - Physics" },
    { name: "Dr. Diana P", desig: "Assistant Professor", qual: "B.Sc., M.Sc., Ph.D - Physics" },
    { name: "Dr. Buvaneshwari P", desig: "Assistant Professor", qual: "B.Sc., M.Sc., Ph.D - Physics" },
    { name: "Dr. Easwari M", desig: "Assistant Professor", qual: "B.Sc., M.Sc., Ph.D - Physics" },
    { name: "Ms. Thisha N", desig: "Assistant Professor", qual: "B.A., M.A., Tamil (SET)" },
    { name: "Mr. Arunkumar G", desig: "Assistant Professor", qual: "B.E - Mechanical, M.E - Manufacturing" },
    { name: "Dr. Premkumar S", desig: "Assistant Professor", qual: "B.E - Civil, M.E - Hydrology & Water Resources, Ph.D – Civil Engineering" },
    { name: "Mr. Ram Kumar K", desig: "Assistant Professor", qual: "B.E - EEE, M.B.A - Financial Management" },
    { name: "Ms. S. Rajeshshree", desig: "Assistant Professor", qual: "B.E - ECE, M.E - Applied Electronics" },
    { name: "Ms. Iniya A", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" },
    { name: "Ms. Jenifer K", desig: "Assistant Professor", qual: "B.Tech. - IT, M.E - CSE" },
    { name: "Ms. Nandhini M", desig: "Assistant Professor", qual: "B.E - CSE, M.E - CSE" },
    { name: "Dr. A. Vembathurajesh", desig: "Assistant Professor & Head [I/C] / S&H", qual: "B.E - Mechanical, M.E - Thermal, Ph.D - Mechanical" }
  ]
};

const fs = require('fs');

function normalizeName(name) {
  // Lowercase, remove common prefixes, spaces, dots
  let n = name.toLowerCase();
  n = n.replace(/^(dr\.|mr\.|mrs\.|ms\.|prof\.)\s*/, '');
  n = n.replace(/[^a-z]/g, '');
  return n;
}

const extractedData = JSON.parse(fs.readFileSync('d:/gowtham/ns/nscetweb/scratch/extracted_faculty.json', 'utf8'));

// Convert extractedData paths to keys
const siteData = {};
for (const key of Object.keys(extractedData)) {
  const parts = key.split('/');
  let deptKey = 'unknown';
  if (key.includes('civil/mestructural')) deptKey = 'civil/mestructural';
  else if (key.includes('civil')) deptKey = 'civil';
  else if (key.includes('cse/aids')) deptKey = 'cse/aids';
  else if (key.includes('cse/mecse')) deptKey = 'cse/mecse';
  else if (key.includes('cse/it')) deptKey = 'cse/it';
  else if (key.includes('cse')) deptKey = 'cse';
  else if (key.includes('electrical/meembedded')) deptKey = 'electrical/meembedded';
  else if (key.includes('electrical')) deptKey = 'electrical';
  else if (key.includes('electronics')) deptKey = 'electronics';
  else if (key.includes('mechanical/memanufacturing')) deptKey = 'mechanical/memanufacturing';
  else if (key.includes('mechanical')) deptKey = 'mechanical';
  else if (key.includes('s&h')) deptKey = 's&h';
  
  siteData[deptKey] = extractedData[key];
}

let report = "# Faculty Data Mismatch Report\n\n";

for (const dept of Object.keys(providedData)) {
  report += `## Department: ${dept}\n\n`;
  const provList = providedData[dept];
  const siteList = siteData[dept] || [];
  
  const provNamesNorm = provList.map(p => ({ original: p, norm: normalizeName(p.name) }));
  const siteNamesNorm = siteList.map(s => ({ original: s, norm: normalizeName(s.name) }));
  
  // Find additions (in provided, not in site)
  const additions = provNamesNorm.filter(p => !siteNamesNorm.find(s => s.norm === p.norm || p.norm.includes(s.norm) || s.norm.includes(p.norm)));
  
  // Find removals (in site, not in provided)
  const removals = siteNamesNorm.filter(s => !provNamesNorm.find(p => p.norm === s.norm || p.norm.includes(s.norm) || s.norm.includes(p.norm)));
  
  // Find updates (in both, but details changed)
  const updates = [];
  for (const p of provNamesNorm) {
    const s = siteNamesNorm.find(s => s.norm === p.norm || p.norm.includes(s.norm) || s.norm.includes(p.norm));
    if (s) {
      if (p.original.desig !== s.original.designation || p.original.qual !== s.original.qualification) {
        updates.push({ provided: p.original, site: s.original });
      }
    }
  }
  
  if (additions.length > 0) {
    report += `### 🟢 New Faculty to Add\n`;
    for (const a of additions) {
      report += `- **${a.original.name}** (${a.original.desig}) - ${a.original.qual}\n`;
    }
    report += "\n";
  }
  
  if (removals.length > 0) {
    report += `### 🔴 Faculty to Remove (Not in 2026-27 list)\n`;
    for (const r of removals) {
      report += `- **${r.original.name}** (${r.original.designation})\n`;
    }
    report += "\n";
  }
  
  if (updates.length > 0) {
    report += `### 🟡 Updates (Designation/Qualification changes)\n`;
    for (const u of updates) {
      report += `- **${u.provided.name}**\n`;
      if (u.provided.desig !== u.site.designation) {
         report += `  - Designation: \`${u.site.designation}\` -> \`${u.provided.desig}\`\n`;
      }
      if (u.provided.qual !== u.site.qualification) {
         report += `  - Qualification: \`${u.site.qualification}\` -> \`${u.provided.qual}\`\n`;
      }
    }
    report += "\n";
  }
  
  if (additions.length === 0 && removals.length === 0 && updates.length === 0) {
    report += "*No changes required.*\n\n";
  }
  
  report += "---\n\n";
}

fs.writeFileSync('C:/Users/PC 01/.gemini/antigravity-ide/brain/b3b4e97e-e147-417d-9e4c-1c2defc8f2a6/faculty_mismatch_report.md', report);
console.log("Report generated.");
