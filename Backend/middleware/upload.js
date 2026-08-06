const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let destFolder = "uploads/";
    
    // Determine subdirectory based on the route
    if (req.originalUrl.includes("/staff")) {
      destFolder += "staff/";
    } else if (req.originalUrl.includes("/events")) {
      destFolder += "events/";
    } else if (req.originalUrl.includes("/departments")) {
      destFolder += "departments/";
    } else if (req.originalUrl.includes("/home")) {
      destFolder += "home/";
    } else if (req.originalUrl.includes("/placements")) {
      destFolder += "placements/";
    }

    // Ensure the folder exists, though we created them manually
    if (!fs.existsSync(destFolder)) {
      fs.mkdirSync(destFolder, { recursive: true });
    }

    cb(null, destFolder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

module.exports = upload;
