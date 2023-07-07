const { DataTypes } = require("sequelize")
const sequelize = require("../config/db-connection")

const User = sequelize.define("users",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING   
    },
    password:{

        type:DataTypes.STRING   
    },
    address:{
        type: DataTypes.STRING
    },
    phone:{
        type:DataTypes.STRING
    }
},{
    freezeTableName:true
})

module.exports= User;