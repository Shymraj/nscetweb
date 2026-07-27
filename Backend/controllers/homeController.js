const db = require("../config/db");

// Generic GET function
const getRecords = (table) => (req, res) => {
  db.query(`SELECT * FROM ${table} ORDER BY created_at DESC`, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, data: results });
  });
};

// Generic DELETE function
const deleteRecord = (table) => (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM ${table} WHERE id = ?`, [id], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Deleted successfully" });
  });
};

// Marquee
exports.getMarquees = getRecords('home_marquee');
exports.addMarquee = (req, res) => {
  const { content } = req.body;
  db.query("INSERT INTO home_marquee (content) VALUES (?)", [content], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deleteMarquee = deleteRecord('home_marquee');

// Hero
exports.getHeroes = getRecords('home_hero');
exports.addHero = (req, res) => {
  const { heading, sub_heading, paragraph, button_name, url } = req.body;
  const photo_url = req.file ? `/uploads/home/${req.file.filename}` : null;
  db.query(
    "INSERT INTO home_hero (heading, sub_heading, paragraph, button_name, url, photo_url) VALUES (?, ?, ?, ?, ?, ?)",
    [heading, sub_heading, paragraph, button_name, url, photo_url],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Added successfully", id: result.insertId });
    }
  );
};
exports.deleteHero = deleteRecord('home_hero');

// Timer
exports.getTimers = getRecords('home_timer');
exports.addTimer = (req, res) => {
  const { event_name, target_date } = req.body;
  db.query("INSERT INTO home_timer (event_name, target_date) VALUES (?, ?)", [event_name, target_date], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deleteTimer = deleteRecord('home_timer');

// News
exports.getNews = getRecords('home_news');
exports.addNews = (req, res) => {
  const { title, date, content } = req.body;
  db.query("INSERT INTO home_news (title, date, content) VALUES (?, ?, ?)", [title, date, content], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deleteNews = deleteRecord('home_news');

// Video
exports.getVideos = getRecords('home_video');
exports.addVideo = (req, res) => {
  const { title, video_url } = req.body;
  db.query("INSERT INTO home_video (title, video_url) VALUES (?, ?)", [title, video_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deleteVideo = deleteRecord('home_video');

// Image
exports.getImages = getRecords('home_image');
exports.addImage = (req, res) => {
  const { caption } = req.body;
  const photo_url = req.file ? `/uploads/home/${req.file.filename}` : null;
  db.query("INSERT INTO home_image (caption, photo_url) VALUES (?, ?)", [caption, photo_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deleteImage = deleteRecord('home_image');

// Principal
exports.getPrincipals = getRecords('home_principal');
exports.addPrincipal = (req, res) => {
  const { name, message } = req.body;
  const photo_url = req.file ? `/uploads/home/${req.file.filename}` : null;
  db.query("INSERT INTO home_principal (name, message, photo_url) VALUES (?, ?, ?)", [name, message, photo_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deletePrincipal = deleteRecord('home_principal');

// UG Course
exports.getUGCourses = getRecords('home_ug_course');
exports.addUGCourse = (req, res) => {
  const { course_name, description } = req.body;
  const photo_url = req.file ? `/uploads/home/${req.file.filename}` : null;
  db.query("INSERT INTO home_ug_course (course_name, description, photo_url) VALUES (?, ?, ?)", [course_name, description, photo_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deleteUGCourse = deleteRecord('home_ug_course');

// PG Course
exports.getPGCourses = getRecords('home_pg_course');
exports.addPGCourse = (req, res) => {
  const { course_name, description } = req.body;
  const photo_url = req.file ? `/uploads/home/${req.file.filename}` : null;
  db.query("INSERT INTO home_pg_course (course_name, description, photo_url) VALUES (?, ?, ?)", [course_name, description, photo_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deletePGCourse = deleteRecord('home_pg_course');

// Counter
exports.getCounters = getRecords('home_counter');
exports.addCounter = (req, res) => {
  const { title, count_value } = req.body;
  db.query("INSERT INTO home_counter (title, count_value) VALUES (?, ?)", [title, count_value], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deleteCounter = deleteRecord('home_counter');

// Recruiter
exports.getRecruiters = getRecords('home_recruiter');
exports.addRecruiter = (req, res) => {
  const { company_name } = req.body;
  const logo_url = req.file ? `/uploads/home/${req.file.filename}` : null;
  db.query("INSERT INTO home_recruiter (company_name, logo_url) VALUES (?, ?)", [company_name, logo_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};
exports.deleteRecruiter = deleteRecord('home_recruiter');
