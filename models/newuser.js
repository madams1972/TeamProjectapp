const {Model, DataTypes} = require('sequelize')
const sequelize = require("../config/connection")

class newUser extends Model {}

newUser.init(
    
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            username: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                len: [15]
              }
            },
            password: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                len: [8]
              }
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false,
                primaryKey:true
            }
          }, 
    
)