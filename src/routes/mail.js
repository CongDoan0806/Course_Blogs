const express = require("express");
const router = express.Router();


const mailController = require('../Public/app/controllers/MailController.js');
router.post("/", mailController.index);

module.exports = router;
