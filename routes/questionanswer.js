const express = require('express');
const questionAnswerController =  require('../controllers/questionanswer.controller');

const router = express.Router();
router.post("/", questionAnswerController.save);
router.get("/", questionAnswerController.showAll);


module.exports = router;