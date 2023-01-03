const models =  require('../models');

function save(req,res){
    const questionAnswer = {
        qid : req.body.qid,
        aid : req.body.aid
    }

    models.QuestionAnswer.create(questionAnswer).then(result => {
        res.status(201).json({
            message : "Questions done",
            result : result
        });
    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong",
            error : error
        });
    });
}

function showAll(req, res){
    models.QuestionAnswer.findAll().then(result => {
        res.status(201).json(result);

    }).catch(error => {
        res.status(500).json({
            message : "Something went wrong",
            error : error
        });

    });
}

module.exports = {
    save : save,
    showAll : showAll
}