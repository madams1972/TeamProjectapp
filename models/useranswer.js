const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Useranswers extends Model {}

Useranswers.init(
    {
        answer_id: { 
            type: DataType.INTGER,
            refernce: {
                model: answer,
                key: 'id'
            },
        },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'useranswer'   
});

module.exports = Useranswers;