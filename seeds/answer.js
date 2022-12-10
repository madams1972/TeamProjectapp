const {Answer} = require("../models");
const {Question} = require("../models");

const answerData = [
    {answer: "option1",
    answer: "option2",
    answer: "option3",
    answer: "option4",
    question_id: 1
    },
    {answer: "option1",
    answer: "option2",
    answer: "option3",
    answer: "option4",
    question_id: 2
    },
    {answer: "option1",
    answer: "option2",
    answer: "option3",
    answer: "option4",
    question_id: 3
    },
    {answer: "option1",
    answer: "option2",
    answer: "option3",
    answer: "option4",
    question_id: 4
    }
]

const seedAnswer = () => Answer.bulkCreate(answerData);

module.exports = seedAnswer;
