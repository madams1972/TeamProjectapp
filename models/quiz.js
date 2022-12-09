const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quizes extends Model {}

<<<<<<< HEAD
Quizes.init (
    {
=======
Quiz.init(
  {
>>>>>>> 89fabfd5f8e3b63335f95df74c0980a223b5e1e8
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "quiz",
  }
);

<<<<<<< HEAD
module.exports = Quizes
=======
module.exports = Quiz;
>>>>>>> 89fabfd5f8e3b63335f95df74c0980a223b5e1e8
