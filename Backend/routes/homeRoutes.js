const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const upload = require('../middleware/upload'); // we can reuse the upload middleware or modify it for "home"

// Marquee
router.get('/marquee', homeController.getMarquees);
router.post('/marquee', homeController.addMarquee);
router.put('/marquee/:id', homeController.updateMarquee);
router.delete('/marquee/:id', homeController.deleteMarquee);

// Hero
router.get('/hero', homeController.getHeroes);
router.post('/hero', upload.single('photo'), homeController.addHero);
router.put('/hero/:id', upload.single('photo'), homeController.updateHero);
router.delete('/hero/:id', homeController.deleteHero);

// Timer
router.get('/timer', homeController.getTimers);
router.post('/timer', homeController.addTimer);
router.put('/timer/:id', homeController.updateTimer);
router.delete('/timer/:id', homeController.deleteTimer);


// News
router.get('/news', homeController.getNews);
router.post('/news', homeController.addNews);
router.put('/news/:id', homeController.updateNews);
router.delete('/news/:id', homeController.deleteNews);

// Announcement
router.get('/announcement', homeController.getAnnouncements);
router.post('/announcement', upload.single('photo'), homeController.addAnnouncement);
router.put('/announcement/:id', upload.single('photo'), homeController.updateAnnouncement);
router.delete('/announcement/:id', homeController.deleteAnnouncement);

// Image
router.get('/image', homeController.getImages);
router.post('/image', upload.single('photo'), homeController.addImage);
router.put('/image/:id', upload.single('photo'), homeController.updateImage);
router.delete('/image/:id', homeController.deleteImage);
// Principal
router.get('/principal', homeController.getPrincipals);
router.post('/principal', upload.single('photo'), homeController.addPrincipal);
router.put('/principal/:id', upload.single('photo'), homeController.updatePrincipal);
router.delete('/principal/:id', homeController.deletePrincipal);

// UG Course
router.get('/ug_course', homeController.getUGCourses);
router.post('/ug_course', upload.single('photo'), homeController.addUGCourse);
router.put('/ug_course/:id', upload.single('photo'), homeController.updateUGCourse);
router.delete('/ug_course/:id', homeController.deleteUGCourse);

// PG Course
router.get('/pg_course', homeController.getPGCourses);
router.post('/pg_course', upload.single('photo'), homeController.addPGCourse);
router.put('/pg_course/:id', upload.single('photo'), homeController.updatePGCourse);
router.delete('/pg_course/:id', homeController.deletePGCourse);

// Counter
router.get('/counter', homeController.getCounters);
router.post('/counter', homeController.addCounter);
router.put('/counter/:id', homeController.updateCounter);
router.delete('/counter/:id', homeController.deleteCounter);

// Recruiter
router.get('/recruiter', homeController.getRecruiters);
router.post('/recruiter', upload.single('photo'), homeController.addRecruiter);
router.put('/recruiter/:id', upload.single('photo'), homeController.updateRecruiter);
router.delete('/recruiter/:id', homeController.deleteRecruiter);

module.exports = router;
