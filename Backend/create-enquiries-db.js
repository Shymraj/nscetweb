const db = require('./config/db');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS form_enquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  whatsapp VARCHAR(20),
  city VARCHAR(100),
  subject VARCHAR(255) NOT NULL,
  message TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

db.query(createTableQuery, (err, results) => {
  if (err) {
    console.error("Error creating form_enquiries table:", err);
  } else {
    console.log("form_enquiries table created successfully.");
  }
  process.exit();
});
