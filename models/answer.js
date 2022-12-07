const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection")

class ANSWER extends Model {}

ANSWER.init (
    {
        answer: {
            type: DataTypes.STRING,
            allowNull:false,
            primaryKey: true
        }
    }
)