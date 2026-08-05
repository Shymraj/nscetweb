const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Database Connection Failed:", err.message);
    process.exit(1);
  }
  
  const eventsToCreate = [
    { title: "Diwali Celebration 2025", slug: "diwali-celebration-2025" },
    { title: "Waves'25", slug: "waves-25" },
    { title: "Onam Celebration 2025", slug: "onam-celebration-2025" },
    { title: "Fresher's Day 2025", slug: "freshers-day-2025" },
    { title: "Independence Day 2025", slug: "independence-day-2025" },
    { title: "Signout Day 2025", slug: "signout-day-2025" },
    { title: "Pongal 2025", slug: "pongal-2025" }
  ];

  let completed = 0;

  eventsToCreate.forEach((event, index) => {
    const query = `INSERT INTO events (title, slug, description, department, date) VALUES (?, ?, ?, ?, ?)`;
    connection.query(query, [event.title, event.slug, 'Gallery Event', 'Gallery', '2025'], (err, results) => {
      if (err) {
        console.error(`❌ Error inserting ${event.title}:`, err.message);
      } else {
        console.log(`✅ Inserted ${event.title}`);
      }
      completed++;
      if (completed === eventsToCreate.length) {
        console.log("🎉 Database initialization complete.");
        process.exit(0);
      }
    });
  });
});
