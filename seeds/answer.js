const { Answer } = require("../models");

const answerData = [
  { answer: "a. $(target)", question_id: 1 },
  { answer: "b. $('target')", question_id: 1 },
  { answer: "c. $('.target')", question_id: 1 },
  { answer: "d. $('#target')", question_id: 1 },

  { answer: "a. slice()", question_id: 2 },
  { answer: "b. substr()", question_id: 2 },
  { answer: "c. split()", question_id: 2 },
  { answer: "d. substring()", question_id: 2 },

  { answer: "a. var", question_id: 3 },
  { answer: "b. let", question_id: 3 },
  { answer: "c. const", question_id: 3 },
  { answer: "d. All of the Above", question_id: 3 },

  { answer: "a. n+", question_id: 4 },
  { answer: "b. n++", question_id: 4 },
  { answer: "c. n = n + 1", question_id: 4 },
  { answer: "d. These can all be used", question_id: 4 },

  { answer: "a. /", question_id: 5 },
  { answer: "b. %", question_id: 5 },
  { answer: "c. !", question_id: 5 },
  { answer: "d. :", question_id: 5 },

  { answer: "a. /", question_id: 6 },
  { answer: "b. %", question_id: 6 },
  { answer: "c. !", question_id: 6 },
  { answer: "d. :", question_id: 6 },

  { answer: "a. #", question_id: 7 },
  { answer: "b. &", question_id: 7 },
  { answer: "c. $", question_id: 7 },
  { answer: "d. !", question_id: 7 },

  { answer: "a. Direct Oriented Methods", question_id: 8 },
  { answer: "b. Directed Operator Mechanism", question_id: 8 },
  { answer: "c. Data Output Mode", question_id: 8 },
  { answer: "d. Document Object Model", question_id: 8 },

  { answer: "a. document.querySelector('.main')", question_id: 9 },
  { answer: "b. document.getElementById('main')", question_id: 9 },
  { answer: "c. document.innerText('main')", question_id: 9 },
  { answer: "d. document.querySelector('#main')", question_id: 9 },

  { answer: "a. 1990", question_id: 10 },
  { answer: "b. 1995", question_id: 10 },
  { answer: "c. 2000", question_id: 10 },
  { answer: "d. 2005", question_id: 10 },

  { answer: "a.  <javascript>", question_id: 11 },
  { answer: "b. <java>", question_id: 11 },
  { answer: "c. <script>", question_id: 11 },
  { answer: "d. <js>", question_id: 11 },
];

const seedAnswer = () => Answer.bulkCreate(answerData);

module.exports = seedAnswer;
