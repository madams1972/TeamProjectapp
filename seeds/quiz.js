const {Quiz} = require("../models");

const quizData = [
    {
        id: 1,
        level: "1",
        name: "super awesome quiz name",
    }
]

const seedQuiz = () => Quiz.bulkCreate(quizData);

module.exports = seedQuiz;