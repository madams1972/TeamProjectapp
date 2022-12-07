const sequelize = require('../config/connection');
const { Questions, Quiz, Answer } = require('../models');

const quizData = [
   {
      "level": 1,
      "name": "Jhon doe",
   }
] 

const questionData = 
[   
   { "quiz_id": 1,
"question": "question_one",
"answer": [{"answer": "options1"}, {"answer": "options2"}],
}
]

// "answer": "option1"
const seedQuestions = async () => 
{
await sequelize.sync({ force: true });

await Quiz.bulkcreate(quizData);

await Questions.bulkcreate(questionData, {
   include: [Answer],
   individualHooks: true,
   returning: true,});
}


// module.exports = seedQuestions
seedQuestions();