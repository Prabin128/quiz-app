const express = require('express');
const bodyparser = require('body-parser');

const app =  express();
const answerRoute = require('./routes/answer');
const questionRoute = require('./routes/question');
const questionanswerRoute = require('./routes/questionanswer');

app.use(bodyparser.json());

app.use("/answer", answerRoute);
app.use("/question", questionRoute);
app.use("/questionanswer", questionanswerRoute);




module.exports = app;