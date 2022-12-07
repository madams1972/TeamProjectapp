const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection")

class QUESTION extends Model {}

QUESTION.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },

        questions: {
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
 module.exports = answers;