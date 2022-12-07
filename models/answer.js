const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection")

class Answer extends Model {}

Answer.init (
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
 module.exports = Answer;