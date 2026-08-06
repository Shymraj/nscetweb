const fs = require('fs');
const path = require('path');

const girlsCssPath = path.join(__dirname, 'Frontend/src/pages/Student Life/GirlsHostel/GirlsHostel.css');
if (fs.existsSync(girlsCssPath)) {
  let content = fs.readFileSync(girlsCssPath, 'utf8');
  content = content.replace(/background:.*?(url\(.*?\)).*?;/, `background: url('/banners/banner_girlshostel.png') no-repeat center center/cover;`);
  fs.writeFileSync(girlsCssPath, content, 'utf8');
  console.log(`Updated GirlsHostel.css`);
}

const boysCssPath = path.join(__dirname, 'Frontend/src/pages/Student Life/BoysHostel/BoysHostel.css');
if (fs.existsSync(boysCssPath)) {
  let content = fs.readFileSync(boysCssPath, 'utf8');
  content = content.replace(/background:.*?(url\(.*?\)).*?;/, `background: url('/banners/banner_boyshostel.png') no-repeat center center/cover;`);
  fs.writeFileSync(boysCssPath, content, 'utf8');
  console.log(`Updated BoysHostel.css`);
}
