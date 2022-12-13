const Score = require('./score');
const Answer = require("./answer");
const Quiz = require("./quiz");
const Question = require("./question");
const Useranswer = require("./useranswer");
const Userlogin = require("./userlogin");
const User = require("./user");


Answer.belongsTo(Question, {
  foreignKey: "question_id",
});
Question.hasMany(Answer, {
  foreignKey: "question_id",
});

Question.belongsTo(Quiz, {
  foreignKey: "quiz_id",
});

Quiz.hasMany(Question, {
  foreignKey: "quiz_id",
});

module.exports = { Answer, Quiz, Question, Useranswer, Userlogin, Score, User };
