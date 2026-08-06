const fs = require('fs');
const path = require('path');

const mappings = [
  { file: 'Frontend/src/pages/Student Life/AntiRaggingCell/AntiRaggingCell.jsx', banner: '/banners/banner_antiragging.png' },
  { file: 'Frontend/src/pages/Student Life/EqualOpportunityCell/EqualOpportunityCell.jsx', banner: '/banners/banner_equalopp.png' },
  { file: 'Frontend/src/pages/Student Life/GrievanceRedressal/GrievanceRedressal.jsx', banner: '/banners/banner_grievance.png' },
  { file: 'Frontend/src/pages/Student Life/HealthMedicalFacilities/HealthMedicalFacilities.jsx', banner: '/banners/banner_medical.png' },
  { file: 'Frontend/src/pages/Student Life/NSS/NSS.jsx', banner: '/banners/banner_nss.png' },
  { file: 'Frontend/src/pages/Student Life/Placements/Placements.jsx', banner: '/banners/banner_placements.png' },
  { file: 'Frontend/src/pages/Student Life/SEDG/SEDG.jsx', banner: '/banners/banner_sedg.png' },
  { file: 'Frontend/src/pages/Student Life/Sports/Sports.jsx', banner: '/banners/banner_sports.png' },
  { file: 'Frontend/src/pages/Student Life/TransportFacilities/TransportFacilities.jsx', banner: '/banners/banner_transport.png' }
];

mappings.forEach(mapping => {
  const filePath = path.join(__dirname, mapping.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace existing backgroundImage prop (whether string or expression)
    if (content.match(/backgroundImage=\{.*?\}/)) {
      content = content.replace(/backgroundImage=\{.*?\}/, `backgroundImage="${mapping.banner}"`);
    } else if (content.match(/backgroundImage=["'].*?["']/)) {
      content = content.replace(/backgroundImage=["'].*?["']/, `backgroundImage="${mapping.banner}"`);
    } else {
      // Add backgroundImage prop to PageBanner if not present
      content = content.replace(/<PageBanner/, `<PageBanner\n        backgroundImage="${mapping.banner}"`);
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${mapping.file}`);
  }
});
