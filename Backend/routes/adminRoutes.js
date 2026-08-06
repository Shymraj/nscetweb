const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

console.log("✅ adminRoutes.js Loaded");

router.get("/test", (req, res) => {
    res.send("Admin Route Working");
});

const { 
  loginAdmin,
  getStaff, addStaff, updateStaff, deleteStaff,
  getEvents, addEvent, updateEvent, addEventPhoto, deleteEvent, deleteEventPhoto,
  getDepartments, addDepartment, deleteDepartment,
  getPlacements, addPlacement, deletePlacement
} = require("../controllers/adminController");

router.post("/login", loginAdmin);

// Staff Routes
router.get("/staff", getStaff);
router.post("/staff", upload.single("photo"), addStaff);
router.put("/staff/:id", upload.single("photo"), updateStaff);
router.delete("/staff/:id", deleteStaff);

// Event Routes
router.get("/events", getEvents);
router.post("/events", upload.single("image"), addEvent);
router.put("/events/:id", upload.single("image"), updateEvent);
router.post("/events/:id/photo", upload.single("photo"), addEventPhoto);
router.delete("/events/photo/:id", deleteEventPhoto);
router.delete("/events/:id", deleteEvent);

// Department Routes
router.get("/departments", getDepartments);
router.post("/departments", upload.single("photo"), addDepartment);
router.delete("/departments/:id", deleteDepartment);

// Placement Routes
router.get("/placements", getPlacements);
router.post("/placements", upload.single("photo"), addPlacement);
router.delete("/placements/:id", deletePlacement);

module.exports = router;
