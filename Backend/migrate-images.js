const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const frontendDir = path.join(__dirname, '..', 'Frontend', 'src', 'pages', 'Gallery', 'Events', 'assets', 'events');
const backendUploads = path.join(__dirname, 'uploads', 'events');

if (!fs.existsSync(backendUploads)) {
  fs.mkdirSync(backendUploads, { recursive: true });
}

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB.");

  const folders = fs.readdirSync(frontendDir);
  
  let processedFolders = 0;

  if (folders.length === 0) {
    console.log("No folders found.");
    process.exit(0);
  }

  folders.forEach((folder) => {
    const slug = folder;
    const folderPath = path.join(frontendDir, folder);
    
    if (fs.lstatSync(folderPath).isDirectory()) {
      // Find event ID by slug
      // Our database uses -2025, but some folders are -25. Let's do a LIKE search or fallback.
      const searchSlug = slug.replace('-2025', '-25').replace('-25', '%');
      
      connection.query('SELECT id FROM events WHERE slug LIKE ? OR slug = ? LIMIT 1', [`%${searchSlug}%`, slug], (err, results) => {
        if (err) throw err;
        
        if (results.length > 0) {
          const eventId = results[0].id;
          const files = fs.readdirSync(folderPath).filter(f => f.match(/\.(jpg|jpeg|png|webp)$/i));
          
          files.forEach(file => {
            const ext = path.extname(file);
            const newFilename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
            const destPath = path.join(backendUploads, newFilename);
            const dbPath = `/uploads/events/${newFilename}`;
            
            // Copy file
            fs.copyFileSync(path.join(folderPath, file), destPath);
            
            // Insert into db
            connection.query('INSERT INTO event_photos (event_id, photo_url) VALUES (?, ?)', [eventId, dbPath], (err) => {
              if (err) console.error("Error inserting photo:", err);
            });
          });
          console.log(`✅ Migrated ${files.length} images for ${slug}`);
        } else {
          console.log(`⚠️ No matching event found for slug: ${slug}`);
        }
        
        processedFolders++;
        if (processedFolders === folders.length) {
          setTimeout(() => {
            console.log("Migration complete!");
            process.exit(0);
          }, 1000);
        }
      });
    } else {
      processedFolders++;
      if (processedFolders === folders.length) {
        setTimeout(() => {
          console.log("Migration complete!");
          process.exit(0);
        }, 1000);
      }
    }
  });
});
