const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const upload = require('../middleware/upload'); // we can reuse the upload middleware or modify it for "home"

// Marquee
router.get('/marquee', homeController.getMarquees);
router.post('/marquee', homeController.addMarquee);
router.delete('/marquee/:id', homeController.deleteMarquee);

// Hero
router.get('/hero', homeController.getHeroes);
router.post('/hero', upload.single('photo'), homeController.addHero);
router.delete('/hero/:id', homeController.deleteHero);

// Timer
router.get('/timer', homeController.getTimers);
router.post('/timer', homeController.addTimer);
router.delete('/timer/:id', homeController.deleteTimer);

// News
router.get('/news', homeController.getNews);
router.post('/news', homeController.addNews);
router.delete('/news/:id', homeController.deleteNews);

// Video
router.get('/video', homeController.getVideos);
router.post('/video', homeController.addVideo);
router.delete('/video/:id', homeController.deleteVideo);

// Image
router.get('/image', homeController.getImages);
router.post('/image', upload.single('photo'), homeController.addImage);
router.delete('/image/:id', homeController.deleteImage);

// Principal
router.get('/principal', homeController.getPrincipals);
router.post('/principal', upload.single('photo'), homeController.addPrincipal);
router.delete('/principal/:id', homeController.deletePrincipal);

// UG Course
router.get('/ug_course', homeController.getUGCourses);
router.post('/ug_course', upload.single('photo'), homeController.addUGCourse);
router.delete('/ug_course/:id', homeController.deleteUGCourse);

// PG Course
router.get('/pg_course', homeController.getPGCourses);
router.post('/pg_course', upload.single('photo'), homeController.addPGCourse);
router.delete('/pg_course/:id', homeController.deletePGCourse);

// Counter
router.get('/counter', homeController.getCounters);
router.post('/counter', homeController.addCounter);
router.delete('/counter/:id', homeController.deleteCounter);

// Recruiter
router.get('/recruiter', homeController.getRecruiters);
router.post('/recruiter', upload.single('photo'), homeController.addRecruiter);
router.delete('/recruiter/:id', homeController.deleteRecruiter);

module.exports = router;
