const express = require('express');
const questionController =  require('../controllers/question.controller');

const router = express.Router();
router.post("/", questionController.save);
router.get("/", questionController.showAll);


module.exports = router;