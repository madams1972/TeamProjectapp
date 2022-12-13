const { Question } = require("../models");

const questionData = [
  {
    quiz_id: 1,
    question: "Using jQuery, which of the following would select an element with an ID of 'target'?",
  },
  {
    quiz_id: 1,
    question: "Which of these string methods splits a string into a returned array of substrings by taking a separator?",
  },
  {
    quiz_id: 1,
    question: "Which kind of variable must be assigned a value upon declaration?",
  },
  {
    quiz_id: 1,
    question: "Which is not a way to add 1 to variable n?",
  },
  {
    quiz_id: 1,
    question: "Which operator returns the remainder of a division problem?",
  },
  {
    quiz_id: 1,
    question: "Which of the following is a logical operator in JavaScript meaning NOT?",
  },
  {
    quiz_id: 1,
    question: "Which of the following is a logical operator in JavaScript meaning NOT?",
  },
  {
    quiz_id: 1,
    question: "What does DOM stand for?",
  },
  {
    quiz_id: 1,
    question: "Which of the following DOM method calls would select an HTML element with a class of 'main'?",
  },
  {
    quiz_id: 1,
    question: "When was JavaScript developed?",
  },
  {
    quiz_id: 1,
    question: "In what kind of HTML tag can embedded JavaScript be placed?",
  },
];

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;
