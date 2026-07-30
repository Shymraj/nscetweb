const db = require('./config/db');

const heading = 'NADAR SARASWATHI <br /> <span class="accent-text">COLLEGE OF <br /> ENGINEERING & <br /> TECHNOLOGY</span>';
const subHeading = 'Empowering Minds, Shaping the Future';
const paragraph = 'Approved by AICTE, New Delhi & Affiliated to Anna University, Chennai<br />Accredited by NAAC with \'A\' Grade <br />Recognized under 2(f) of the UGC Act, 1956 <br />An ISO 9001:2015 Certified Institution <br />Vadapudupatti, Annanji (PO), Theni - 625531.';
const buttonName = 'Apply Now';
const url = '#';
const photoUrl = null;

db.query(
  "INSERT INTO home_hero (heading, sub_heading, paragraph, button_name, url, photo_url) VALUES (?, ?, ?, ?, ?, ?)",
  [heading, subHeading, paragraph, buttonName, url, photoUrl],
  (err, result) => {
    if (err) console.error("Error:", err.message);
    else console.log("Default hero inserted");
    process.exit();
  }
);
