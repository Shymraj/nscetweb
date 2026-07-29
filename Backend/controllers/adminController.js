const db = require("../config/db");
const fs = require("fs");
const path = require("path");

const loginAdmin = (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM admins WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: "Database Error" });
    if (result.length > 0) return res.json({ success: true, message: "Login Successful" });
    return res.status(401).json({ success: false, message: "Invalid Username or Password" });
  });
};

// --- STAFF ---
const getStaff = (req, res) => {
  db.query("SELECT * FROM staff", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database Error" });
    res.json({ success: true, data: results });
  });
};

const addStaff = (req, res) => {
  const { name, designation, department, email, qualifications, research, is_hod } = req.body;
  const photo_url = req.file ? `/uploads/staff/${req.file.filename}` : null;
  const sql = "INSERT INTO staff (name, designation, department, photo_url, email, qualifications, research, is_hod) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [name, designation, department, photo_url, email, qualifications, research, is_hod === 'true' || is_hod === true], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Staff added", id: result.insertId });
  });
};

const deleteStaff = (req, res) => {
  const { id } = req.params;
  db.query("SELECT photo_url FROM staff WHERE id = ?", [id], (err, results) => {
    if (results && results.length > 0 && results[0].photo_url) {
      const filePath = path.join(__dirname, "..", results[0].photo_url);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    db.query("DELETE FROM staff WHERE id = ?", [id], (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Staff deleted" });
    });
  });
};

// --- EVENTS ---
const getEvents = (req, res) => {
  db.query("SELECT * FROM events ORDER BY id DESC", (err, events) => {
    if (err) return res.status(500).json({ success: false, message: "Database Error" });
    db.query("SELECT * FROM event_photos", (err, photos) => {
      if (err) return res.status(500).json({ success: false, message: "Database Error" });
      const eventsWithPhotos = events.map(event => {
        return {
          ...event,
          images: photos.filter(p => p.event_id === event.id).map(p => p.photo_url),
          coverImage: event.image_url || photos.find(p => p.event_id === event.id)?.photo_url || null
        };
      });
      res.json({ success: true, data: eventsWithPhotos });
    });
  });
};

const addEvent = (req, res) => {
  const { title, description, department, date } = req.body;
  const baseSlug = title ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'event';
  const slug = `${baseSlug}-${Date.now()}`;
  const image_url = req.file ? `/uploads/events/${req.file.filename}` : null;
  
  const sql = "INSERT INTO events (title, slug, description, department, date, image_url) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [title, slug, description, department, date, image_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Event added", id: result.insertId });
  });
};

const updateEvent = (req, res) => {
  const { id } = req.params;
  const { title, description, department, date } = req.body;
  
  if (req.file) {
    // If a new file is uploaded, update image_url
    const image_url = `/uploads/events/${req.file.filename}`;
    // Optionally delete old image from disk here
    const sql = "UPDATE events SET title=?, description=?, department=?, date=?, image_url=? WHERE id=?";
    db.query(sql, [title, description, department, date, image_url, id], (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Event updated with new image" });
    });
  } else {
    // Keep existing image
    const sql = "UPDATE events SET title=?, description=?, department=?, date=? WHERE id=?";
    db.query(sql, [title, description, department, date, id], (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Event updated" });
    });
  }
};

const addEventPhoto = (req, res) => {
  const { id } = req.params; // event id
  if (!req.file) return res.status(400).json({ success: false, message: "No file uploaded" });
  const photo_url = `/uploads/events/${req.file.filename}`;
  db.query("INSERT INTO event_photos (event_id, photo_url) VALUES (?, ?)", [id, photo_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Photo added to event", photo_url });
  });
};

const deleteEvent = (req, res) => {
  const { id } = req.params;
  
  // First delete main image if exists
  db.query("SELECT image_url FROM events WHERE id = ?", [id], (err, results) => {
    if (results && results.length > 0 && results[0].image_url) {
      const filePath = path.join(__dirname, "..", results[0].image_url);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    
    // Then delete extra photos
    db.query("SELECT photo_url FROM event_photos WHERE event_id = ?", [id], (err, photoResults) => {
      if (photoResults) {
        photoResults.forEach(row => {
          const fp = path.join(__dirname, "..", row.photo_url);
          if (fs.existsSync(fp)) fs.unlinkSync(fp);
        });
      }
      
      // Finally delete DB record
      db.query("DELETE FROM events WHERE id = ?", [id], (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Event deleted" });
      });
    });
  });
};

// --- DEPARTMENTS ---
const getDepartments = (req, res) => {
  db.query("SELECT * FROM departments", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: "Database Error" });
    res.json({ success: true, data: results });
  });
};

const addDepartment = (req, res) => {
  const { name, description } = req.body;
  const photo_url = req.file ? `/uploads/departments/${req.file.filename}` : null;
  const sql = "INSERT INTO departments (name, description, photo_url) VALUES (?, ?, ?)";
  db.query(sql, [name, description, photo_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Department added", id: result.insertId });
  });
};

const deleteDepartment = (req, res) => {
  const { id } = req.params;
  db.query("SELECT photo_url FROM departments WHERE id = ?", [id], (err, results) => {
    if (results && results.length > 0 && results[0].photo_url) {
      const filePath = path.join(__dirname, "..", results[0].photo_url);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    db.query("DELETE FROM departments WHERE id = ?", [id], (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Department deleted" });
    });
  });
};

module.exports = { 
  loginAdmin, 
  getStaff, addStaff, deleteStaff,
  getEvents, addEvent, updateEvent, addEventPhoto, deleteEvent,
  getDepartments, addDepartment, deleteDepartment
};