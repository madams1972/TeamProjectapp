const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Userlogin extends Model {}

Userlogin.init(
    {
        quiz_id: { 
            type: DataType.INTGER,
            refernce: {
                model: quiz,
                key: 'id'
            },
        },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userlogin'   
});

module.exports = Userlogin;