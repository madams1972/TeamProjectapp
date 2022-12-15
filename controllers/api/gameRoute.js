const router = require("express").Router();
const Question = require("../../seed/question");
const Answer = require('../../seeds/answer');

router.get('Question/:id', async (req, res) => {
    const questionDisplay = await Question.findByPk(req.params.id);
    console.log(questionDisplay)
    res.render
})

module.exports = router;
 