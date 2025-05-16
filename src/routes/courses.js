const express = require('express');
const router = express.Router();

const courseController = require('../Public/app/controllers/CourseController.js');
// courseController.index();

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);
router.put('/:id', courseController.update);
router.delete('/:id', courseController.destroy);
module.exports = router;