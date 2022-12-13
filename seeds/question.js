const { Question } = require("../models");

const questionData = [
  {
    quiz_id: 1,
    question: "this is a test question?",
  },
  {
    quiz_id: 1,
    question: "this is a test question?",
  },
  {
    quiz_id: 1,
    question: "this is a test question?",
  },
  {
    quiz_id: 1,
    question: "this is a test question?",
  },
];

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;
