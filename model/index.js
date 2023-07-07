const User = require("./user-model");
const sequelize = require("../config/db-connection");

const ConnectToDatabase = async ()=>{
    await sequelize.authenticate();
    await sequelize.sync();
}
module.exports ={User,ConnectToDatabase}