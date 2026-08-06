const db = require("./config/db");

const createTable = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS placements (
        id INT AUTO_INCREMENT PRIMARY KEY,
        image_url VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    `;

    db.query(query, (err, result) => {
        if (err) {
            console.error("Error creating placements table:", err);
            process.exit(1);
        }
        console.log("Placements table created successfully.");
        process.exit(0);
    });
};

createTable();
