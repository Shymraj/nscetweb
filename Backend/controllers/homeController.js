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

exports.updateMarquee = (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  db.query(
    "UPDATE home_marquee SET content=? WHERE id=?",
    [content, id],
    (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Updated successfully" });
    }
  );
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
exports.updateHero = (req, res) => {
  const { id } = req.params;
  const { heading, sub_heading, paragraph, button_name, url } = req.body;
  
  if (req.file) {
    const photo_url = `/uploads/home/${req.file.filename}`;
    db.query(
      "UPDATE home_hero SET heading=?, sub_heading=?, paragraph=?, button_name=?, url=?, photo_url=? WHERE id=?",
      [heading, sub_heading, paragraph, button_name, url, photo_url, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  } else {
    db.query(
      "UPDATE home_hero SET heading=?, sub_heading=?, paragraph=?, button_name=?, url=? WHERE id=?",
      [heading, sub_heading, paragraph, button_name, url, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  }
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

exports.updateTimer = (req, res) => {
  const { id } = req.params;
  const { event_name, target_date } = req.body;
  db.query(
    "UPDATE home_timer SET event_name=?, target_date=? WHERE id=?",
    [event_name, target_date, id],
    (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Updated successfully" });
    }
  );
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

exports.updateNews = (req, res) => {
  const { id } = req.params;
  const { title, date, content } = req.body;
  db.query(
    "UPDATE home_news SET title=?, date=?, content=? WHERE id=?",
    [title, date, content, id],
    (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Updated successfully" });
    }
  );
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

exports.updateVideo = (req, res) => {
  const { id } = req.params;
  const { title, video_url } = req.body;
  db.query(
    "UPDATE home_video SET title=?, video_url=? WHERE id=?",
    [title, video_url, id],
    (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Updated successfully" });
    }
  );
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

exports.updateImage = (req, res) => {
  const { id } = req.params;
  const { caption } = req.body;
  if (req.file) {
    const photo_url = `/uploads/home/${req.file.filename}`;
    db.query(
      "UPDATE home_image SET caption=?, photo_url=? WHERE id=?",
      [caption, photo_url, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  } else {
    db.query(
      "UPDATE home_image SET caption=? WHERE id=?",
      [caption, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  }
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

exports.updatePrincipal = (req, res) => {
  const { id } = req.params;
  const { name, message } = req.body;
  if (req.file) {
    const photo_url = `/uploads/home/${req.file.filename}`;
    db.query(
      "UPDATE home_principal SET name=?, message=?, photo_url=? WHERE id=?",
      [name, message, photo_url, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  } else {
    db.query(
      "UPDATE home_principal SET name=?, message=? WHERE id=?",
      [name, message, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  }
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

exports.updateUGCourse = (req, res) => {
  const { id } = req.params;
  const { course_name, description } = req.body;
  if (req.file) {
    const photo_url = `/uploads/home/${req.file.filename}`;
    db.query(
      "UPDATE home_ug_course SET course_name=?, description=?, photo_url=? WHERE id=?",
      [course_name, description, photo_url, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  } else {
    db.query(
      "UPDATE home_ug_course SET course_name=?, description=? WHERE id=?",
      [course_name, description, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  }
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

exports.updatePGCourse = (req, res) => {
  const { id } = req.params;
  const { course_name, description } = req.body;
  if (req.file) {
    const photo_url = `/uploads/home/${req.file.filename}`;
    db.query(
      "UPDATE home_pg_course SET course_name=?, description=?, photo_url=? WHERE id=?",
      [course_name, description, photo_url, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  } else {
    db.query(
      "UPDATE home_pg_course SET course_name=?, description=? WHERE id=?",
      [course_name, description, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  }
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

exports.updateCounter = (req, res) => {
  const { id } = req.params;
  const { title, count_value } = req.body;
  db.query(
    "UPDATE home_counter SET title=?, count_value=? WHERE id=?",
    [title, count_value, id],
    (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Updated successfully" });
    }
  );
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

exports.updateRecruiter = (req, res) => {
  const { id } = req.params;
  const { company_name } = req.body;
  if (req.file) {
    const photo_url = `/uploads/home/${req.file.filename}`;
    db.query(
      "UPDATE home_recruiter SET company_name=?, photo_url=? WHERE id=?",
      [company_name, photo_url, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  } else {
    db.query(
      "UPDATE home_recruiter SET company_name=? WHERE id=?",
      [company_name, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  }
};
exports.deleteRecruiter = deleteRecord('home_recruiter');
