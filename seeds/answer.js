const { Answer } = require("../models");

const answerData = [
  { answer: "option1", question_id: 1 },
  { answer: "option2", question_id: 1 },
  { answer: "option3", question_id: 1 },
  { answer: "option4", question_id: 1 },
  { answer: "option1", question_id: 2 },
  { answer: "option2", question_id: 2 },
  { answer: "option3", question_id: 2 },
  { answer: "option4", question_id: 2 },
  { answer: "option1", question_id: 3 },
  { answer: "option2", question_id: 3 },
  { answer: "option3", question_id: 3 },
  { answer: "option4", question_id: 3 },
  { answer: "option1", question_id: 4 },
  { answer: "option2", question_id: 4 },
  { answer: "option3", question_id: 4 },
  { answer: "option4", question_id: 4 },
];

const seedAnswer = () => Answer.bulkCreate(answerData);

module.exports = seedAnswer;
