const models =  require('../models');

function save(req,res){
    const questions = {
        question : req.body.question,
        userid : req.body.userid
    }

    models.Question.create(questions).then(result => {
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
    
    models.Question.findAll({
        include : [
            {
                model : models.QuestionAnswer,
                as : "questionanswer",
                attributes:['id'],
                include:{
                    model:models.Answer,
                    as:"ans"
                }
            }
        ]
    }).then(result => {
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