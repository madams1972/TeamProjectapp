const sequelize = require("../config/connection");
const seedAnswer = require("./answer.js");
const seedQuestion = require("./question.js");
const seedQuiz = require("./quiz.js");
const seedUser = require("./user");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedQuiz();
  await seedQuestion();
  await seedAnswer();

  process.exit(0);
};

seedAll();
