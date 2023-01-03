const models =  require('../models');

function save(req,res){
    const answers = {
        answer : req.body.answer,
        istrue : req.body.istrue
    }

    models.Answer.create(answers).then(result => {
        res.status(201).json({
            message : "Answer done",
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
    models.Answer.findAll().then(result => {
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