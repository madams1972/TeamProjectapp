const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Quizes extends Model {}

Quizes.init (
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      level: {
        type: DataTypes.NUMBER,
        allowNull:false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user',
});

module.exports = Quizes