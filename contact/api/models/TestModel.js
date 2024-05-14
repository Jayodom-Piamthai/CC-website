const conn = require('../connect');
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = conn.define('user',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
    },
    usr:{
        type: DataTypes.STRING
    },
    pwd:{
        type: DataTypes.STRING
    },
    level:{
        type: DataTypes.STRING
    },
    userId:{
        type: DataTypes.BIGINT
    }
})

UserModel.sync({alter:true});

module.exports = UserModel;