const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Game extends Model {}

Game.init()