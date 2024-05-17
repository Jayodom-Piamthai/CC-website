const { Sequelize, Model } = require('sequelize');

const sequelize =new Sequelize('DB_CEwebsite','postgres','159',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize