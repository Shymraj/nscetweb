const db = require('./config/db');

const heading = 'NADAR SARASWATHI COLLEGE OF ENGINEERING & TECHNOLOGY';
const subHeading = 'Empowering Minds, Shaping the Future';
const paragraph = 'Approved by AICTE, New Delhi & Affiliated to Anna University, Chennai\nAccredited by NAAC with \'A\' Grade\nRecognized under 2(f) of the UGC Act, 1956\nAn ISO 9001:2015 Certified Institution\nVadapudupatti, Annanji (PO), Theni - 625531.';

db.query(
  "UPDATE home_hero SET heading = ?, sub_heading = ?, paragraph = ? WHERE id = (SELECT MIN(id) FROM (SELECT id FROM home_hero) AS t)",
  [heading, subHeading, paragraph],
  (err, result) => {
    if (err) console.error("Error:", err.message);
    else console.log("Default hero updated to plain text");
    process.exit();
  }
);
