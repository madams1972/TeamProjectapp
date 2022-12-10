const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Score extends Model {}

Score.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  score:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quiz_id: {
    type: DataTypes.INTEGER,
    refernce: {
      model: "quiz",
      key: "id"
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    refernce: {
      model: "user",
      key: "id"
    }
  }
},
{ sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "score"
});

module.exports = Score;