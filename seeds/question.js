const { Question } = require('../models');

const questionData  = [
    {
        id: 1,
        question: "this is a test question?",
    },
    {
        id: 2,
        question: "this is a test question?",
    },
    {
        id: 3,
        question: "this is a test question?",
    },
    {
        id: 4,
        question: "this is a test question?",
    },
]

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;