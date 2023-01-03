const express = require('express');
const answerController =  require('../controllers/answer.controller');

const router = express.Router();
router.post("/", answerController.save);
router.get("/", answerController.showAll);


module.exports = router;