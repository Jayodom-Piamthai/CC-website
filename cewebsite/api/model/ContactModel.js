const conn = require('../connect');
const { Sequelize, DataTypes } = require('sequelize');
const ContactModel = conn.define('Contact',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
    },
    head:{
        type: DataTypes.STRING
    },
    text:{
        type: DataTypes.STRING
    }
})

ContactModel.sync({alter:true});

module.exports = ContactModel;