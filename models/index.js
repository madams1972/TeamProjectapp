const User = require('./user');
const Answer = require('./answer');
const Quiz = require('./quiz');
const Question = require('./question');
const Useranswer = require('./useranswer');
const Userlogin = require('./userlogin');
 
Answer.belongsTo(Question,{
    foreignKey: 'question_id' 
});
Question.hasMany(Answer, {
    foreignKey: 'question_id'
});

Question.belongsTo(Quiz, {
    foreignKey: 'quiz_id'
});

Quiz.hasMany(Question, {
    foreignKey: 'quiz_id'
});



module.exports = { User, Answer, Quiz, Question, Useranswer, Userlogin};