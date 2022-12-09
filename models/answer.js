const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class Answers extends Model {}

Answers.init (
    {
        answer: {
            type: DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },
        sequelize,
        moduleName:'answers',
    } 
);
 module.exports = Answers;

class Answer extends Model {}

Answer.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
  answer: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  question_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "question",
      key: "id",
    },
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'answer',
});

module.exports = Answer;

