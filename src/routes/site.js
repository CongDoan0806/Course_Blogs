const express = require('express');
const router = express.Router();

const siteController = require('../Public/app/controllers/SiteController.js');
// NewsController.index();

router.get('/:search', siteController.search);
router.get('/', siteController.index);
module.exports = router;