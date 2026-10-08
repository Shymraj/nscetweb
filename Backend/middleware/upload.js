const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let destFolder = path.join(__dirname, "../uploads");
    
    // Determine subdirectory based on the route
    if (req.originalUrl.includes("/staff")) {
      destFolder = path.join(destFolder, "staff");
    } else if (req.originalUrl.includes("/events")) {
      destFolder = path.join(destFolder, "events");
    } else if (req.originalUrl.includes("/departments")) {
      destFolder = path.join(destFolder, "departments");
    } else if (req.originalUrl.includes("/home")) {
      destFolder = path.join(destFolder, "home");
    } else if (req.originalUrl.includes("/placements")) {
      destFolder = path.join(destFolder, "placements");
    }

    // Ensure the folder exists
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
  if (file.mimetype.startsWith("image/") || file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only image and PDF files are allowed!"), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

module.exports = upload;
