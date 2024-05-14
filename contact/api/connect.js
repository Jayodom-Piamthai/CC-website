const { Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize('DB_CEwebsite', 'postgres', '159', {
    host: 'localhost',
    dialect: 'postgres', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    logging: false
    });

module.exports = sequelize;