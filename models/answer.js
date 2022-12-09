const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection")

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