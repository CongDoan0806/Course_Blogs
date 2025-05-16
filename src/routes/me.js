const express = require('express');
const router = express.Router();

const meController = require('../Public/app/controllers/MeController.js');
// meController.index();

// router.get('/:slug', meController.show);
router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);
module.exports = router;