const Sequelize = require("sequelize");

/*
*const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' 
});
*/
const sequelize = new Sequelize("node","root","",{
    host:"localhost",
    dialect:"mysql"
});

module.exports = sequelize;

