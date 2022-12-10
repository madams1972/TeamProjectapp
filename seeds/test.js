// const sequelize = require("../config/connection");
// const { Question, Quiz, Answer } = require("../models");

// const quizData = [
//   {
//     level: 1,
//     name: "Jhon doe",
//   },
// ];

// const questionData = [
//   {
//     quiz_id: 1,
//     question: "question_one",
//     answer: [{ answer: "options1" }, { answer: "options2" }],
//   },
// ];

// // "answer": "option1"
// const seedQuestions = async () => {
//   await sequelize.sync({ force: true });
//   console.log("synced with database");

//   await Quiz.bulkCreate(quizData);
//   console.log("created quizs");

//   await Question.bulkCreate(questionData, {
//     include: [Answer],
//     individualHooks: true,
//     returning: true,
//   });
//   console.log("created questions");
//   process.exit(0);
// };
// // module.exports = seedQuestions
// seedQuestions();
