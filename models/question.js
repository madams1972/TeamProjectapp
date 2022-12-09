const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

<<<<<<< HEAD
class Questions extends Model {}

Questions.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

        question: {
            type: DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        },


        quiz_id: { 
            type: DataType.INTGER,
            refernce: {
                model: quiz,
                key: 'id'
            }
        }
        },
       { sequelize,
        moduleName:'answers',}
     
);
 module.exports = Questions;
=======
class Question extends Model {}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      refernce: {
        model: "quiz",
        key: "id",
      },
    },
  },
  {  sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'question' 
});

module.exports = Question;
>>>>>>> 89fabfd5f8e3b63335f95df74c0980a223b5e1e8
