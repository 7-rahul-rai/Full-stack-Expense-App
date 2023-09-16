const {Sequelize, Datatypes} = require('sequelize');

const sequelize = new Sequelize('expressdb','root','12345',{
    host:'localhost',
    dialect : 'mysql',
    logging : false
}) 


try{
sequelize.authenticate()
console.log('connection established successfully')
}catch(err){
    console.log(err)
}

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db