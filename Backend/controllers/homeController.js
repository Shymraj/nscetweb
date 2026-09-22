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

// Form Enquiries
exports.addEnquiry = (req, res) => {
  const { fullName, email, mobile, whatsapp, city, subject, message } = req.body;
  db.query(
    "INSERT INTO form_enquiries (fullName, email, mobile, whatsapp, city, subject, message) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [fullName, email, mobile, whatsapp, city, subject, message],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Enquiry submitted successfully", id: result.insertId });
    }
  );
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

// Marquee Settings
exports.getMarqueeSettings = (req, res) => {
  db.query("SELECT * FROM home_marquee_settings WHERE id = 1", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    if (results && results.length > 0) {
      return res.json({ success: true, data: results[0] });
    }
    // Initialize default row if not found
    db.query(
      "INSERT INTO home_marquee_settings (id, speed_mode, speed_seconds) VALUES (1, 'slow', 35)",
      (insertErr) => {
        if (insertErr) return res.status(500).json({ success: false, message: insertErr.message });
        res.json({ success: true, data: { id: 1, speed_mode: 'slow', speed_seconds: 35 } });
      }
    );
  });
};

exports.updateMarqueeSettings = (req, res) => {
  const { speed_mode, speed_seconds } = req.body;
  const speedSec = Math.max(4, Math.min(120, parseInt(speed_seconds, 10) || 35));
  const mode = speed_mode || 'custom';

  db.query(
    "INSERT INTO home_marquee_settings (id, speed_mode, speed_seconds) VALUES (1, ?, ?) ON DUPLICATE KEY UPDATE speed_mode = ?, speed_seconds = ?",
    [mode, speedSec, mode, speedSec],
    (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({
        success: true,
        message: "Marquee speed updated successfully",
        data: { id: 1, speed_mode: mode, speed_seconds: speedSec }
      });
    }
  );
};

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

// Centre of Excellence
exports.getCOE = (req, res) => {
  db.query("SELECT * FROM home_coe ORDER BY id ASC", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, data: results });
  });
};

exports.addCOE = (req, res) => {
  const { title, highlight, description } = req.body;
  const photo_url = req.files && req.files['photo'] && req.files['photo'][0]
    ? `/uploads/home/${req.files['photo'][0].filename}`
    : null;
  const photo_url2 = req.files && req.files['photo2'] && req.files['photo2'][0]
    ? `/uploads/home/${req.files['photo2'][0].filename}`
    : null;

  db.query(
    "INSERT INTO home_coe (title, highlight, description, photo_url, photo_url2) VALUES (?, ?, ?, ?, ?)",
    [title, highlight || 'Centre of Excellence', description, photo_url, photo_url2],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Added successfully", id: result.insertId });
    }
  );
};

exports.updateCOE = (req, res) => {
  const { id } = req.params;
  const { title, highlight, description } = req.body;

  const photo_url = req.files && req.files['photo'] && req.files['photo'][0]
    ? `/uploads/home/${req.files['photo'][0].filename}`
    : null;
  const photo_url2 = req.files && req.files['photo2'] && req.files['photo2'][0]
    ? `/uploads/home/${req.files['photo2'][0].filename}`
    : null;

  let query = "UPDATE home_coe SET title=?, highlight=?, description=?";
  let params = [title, highlight, description];

  if (photo_url) {
    query += ", photo_url=?";
    params.push(photo_url);
  }
  if (photo_url2) {
    query += ", photo_url2=?";
    params.push(photo_url2);
  }

  query += " WHERE id=?";
  params.push(id);

  db.query(query, params, (err) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Updated successfully" });
  });
};

exports.deleteCOE = deleteRecord('home_coe');

// Featured News (Campus News & Announcements Left Side)
exports.getFeaturedNews = getRecords('home_featured_news');
exports.addFeaturedNews = (req, res) => {
  const { tag, title, description, news_date, link_url } = req.body;
  const photo_url = req.file ? `/uploads/home/${req.file.filename}` : null;
  db.query(
    "INSERT INTO home_featured_news (tag, title, description, news_date, photo_url, link_url) VALUES (?, ?, ?, ?, ?, ?)",
    [tag || 'Campus Event', title, description, news_date, photo_url, link_url || ''],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Added successfully", id: result.insertId });
    }
  );
};
exports.updateFeaturedNews = (req, res) => {
  const { id } = req.params;
  const { tag, title, description, news_date, link_url } = req.body;
  let query = "UPDATE home_featured_news SET tag=?, title=?, description=?, news_date=?, link_url=? WHERE id=?";
  let params = [tag || 'Campus Event', title, description, news_date, link_url || '', id];
  if (req.file) {
    const photo_url = `/uploads/home/${req.file.filename}`;
    query = "UPDATE home_featured_news SET tag=?, title=?, description=?, news_date=?, link_url=?, photo_url=? WHERE id=?";
    params = [tag || 'Campus Event', title, description, news_date, link_url || '', photo_url, id];
  }
  db.query(query, params, (err) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Updated successfully" });
  });
};
exports.deleteFeaturedNews = deleteRecord('home_featured_news');

// Notice Board (Campus News & Announcements Right Side)
exports.getNoticeBoard = (req, res) => {
  db.query("SELECT * FROM home_notice_board ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, data: results });
  });
};
exports.addNoticeBoard = (req, res) => {
  const { title, date, type, link_url } = req.body;
  db.query(
    "INSERT INTO home_notice_board (title, date, type, link_url) VALUES (?, ?, ?, ?)",
    [title, date, type || 'standard', link_url || ''],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Added successfully", id: result.insertId });
    }
  );
};
exports.updateNoticeBoard = (req, res) => {
  const { id } = req.params;
  const { title, date, type, link_url } = req.body;
  db.query(
    "UPDATE home_notice_board SET title=?, date=?, type=?, link_url=? WHERE id=?",
    [title, date, type || 'standard', link_url || '', id],
    (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Updated successfully" });
    }
  );
};
exports.deleteNoticeBoard = deleteRecord('home_notice_board');

// News (Legacy)
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

// Announcement
exports.getAnnouncements = getRecords('home_announcement');
exports.addAnnouncement = (req, res) => {
  const photo_url = req.file ? `/uploads/home/${req.file.filename}` : null;
  if (!photo_url) return res.status(400).json({ success: false, message: "Image is required" });
  db.query("INSERT INTO home_announcement (photo_url) VALUES (?)", [photo_url], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, message: "Added successfully", id: result.insertId });
  });
};

exports.updateAnnouncement = (req, res) => {
  const { id } = req.params;
  if (req.file) {
    const photo_url = `/uploads/home/${req.file.filename}`;
    db.query(
      "UPDATE home_announcement SET photo_url=? WHERE id=?",
      [photo_url, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Updated successfully" });
      }
    );
  } else {
    res.json({ success: true, message: "No image provided for update" });
  }
};
exports.deleteAnnouncement = deleteRecord('home_announcement');

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
    const logo_url = `/uploads/home/${req.file.filename}`;
    db.query(
      "UPDATE home_recruiter SET company_name=?, logo_url=? WHERE id=?",
      [company_name, logo_url, id],
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

// Recruiter Settings
exports.getRecruiterSettings = (req, res) => {
  db.query("SELECT * FROM home_recruiter_settings WHERE id = 1", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({
      success: true,
      data: results[0] || {
        title_prefix: 'OUR',
        title_highlight: 'INDUSTRY CONNECT',
        subtitle: 'A strong network of organizations shaping our students’ careers.'
      }
    });
  });
};

exports.updateRecruiterSettings = (req, res) => {
  const { title_prefix, title_highlight, subtitle } = req.body;
  db.query(
    `INSERT INTO home_recruiter_settings (id, title_prefix, title_highlight, subtitle)
     VALUES (1, ?, ?, ?)
     ON DUPLICATE KEY UPDATE title_prefix=?, title_highlight=?, subtitle=?`,
    [title_prefix, title_highlight, subtitle, title_prefix, title_highlight, subtitle],
    (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Recruiter settings updated successfully" });
    }
  );
};

// Reviews (Alumni / Testimonials)
exports.getReviews = (req, res) => {
  db.query("SELECT * FROM home_reviews ORDER BY id ASC", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({ success: true, data: results });
  });
};

exports.addReview = (req, res) => {
  const { name, batch, company, role, package: pkg, rating, review } = req.body;
  const image_url = req.file ? `/uploads/home/${req.file.filename}` : null;
  const ratingVal = rating ? parseInt(rating) : 5;

  db.query(
    "INSERT INTO home_reviews (name, batch, company, role, package, rating, image_url, review) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [name, batch, company, role, pkg, ratingVal, image_url, review],
    (err, result) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Review added successfully", id: result.insertId });
    }
  );
};

exports.updateReview = (req, res) => {
  const { id } = req.params;
  const { name, batch, company, role, package: pkg, rating, review } = req.body;
  const ratingVal = rating ? parseInt(rating) : 5;

  if (req.file) {
    const image_url = `/uploads/home/${req.file.filename}`;
    db.query(
      "UPDATE home_reviews SET name=?, batch=?, company=?, role=?, package=?, rating=?, image_url=?, review=? WHERE id=?",
      [name, batch, company, role, pkg, ratingVal, image_url, review, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Review updated successfully" });
      }
    );
  } else {
    db.query(
      "UPDATE home_reviews SET name=?, batch=?, company=?, role=?, package=?, rating=?, review=? WHERE id=?",
      [name, batch, company, role, pkg, ratingVal, review, id],
      (err) => {
        if (err) return res.status(500).json({ success: false, message: err.message });
        res.json({ success: true, message: "Review updated successfully" });
      }
    );
  }
};

exports.deleteReview = deleteRecord('home_reviews');

// Reviews Settings
exports.getReviewsSettings = (req, res) => {
  db.query("SELECT * FROM home_reviews_settings WHERE id = 1", (err, results) => {
    if (err) return res.status(500).json({ success: false, message: err.message });
    res.json({
      success: true,
      data: results[0] || {
        badge: 'PLACEMENT RECORD',
        title: 'Proven Track Record of Excellence',
        description: 'Our campus placements stand as a testament to our quality education, modern lab ecosystem, and industry-oriented syllabus.',
        stat1_label: 'Placement Rate', stat1_value: '98%',
        stat2_label: 'Highest Package', stat2_value: '28 LPA',
        stat3_label: 'Top Recruiters', stat3_value: '60+',
        stat4_label: 'Total Offers', stat4_value: '200+'
      }
    });
  });
};

exports.updateReviewsSettings = (req, res) => {
  const {
    badge, title, description,
    stat1_label, stat1_value,
    stat2_label, stat2_value,
    stat3_label, stat3_value,
    stat4_label, stat4_value
  } = req.body;

  db.query(
    `INSERT INTO home_reviews_settings (
      id, badge, title, description,
      stat1_label, stat1_value,
      stat2_label, stat2_value,
      stat3_label, stat3_value,
      stat4_label, stat4_value
    ) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      badge=?, title=?, description=?,
      stat1_label=?, stat1_value=?,
      stat2_label=?, stat2_value=?,
      stat3_label=?, stat3_value=?,
      stat4_label=?, stat4_value=?`,
    [
      badge, title, description,
      stat1_label, stat1_value,
      stat2_label, stat2_value,
      stat3_label, stat3_value,
      stat4_label, stat4_value,
      badge, title, description,
      stat1_label, stat1_value,
      stat2_label, stat2_value,
      stat3_label, stat3_value,
      stat4_label, stat4_value
    ],
    (err) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      res.json({ success: true, message: "Reviews settings updated successfully" });
    }
  );
};

