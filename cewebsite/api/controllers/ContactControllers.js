const express = require('express');
const app = express();
const ContactModel = require('../model/ContactModel');

app.get('/', async (req, res) => {
    try{
        res.send("Hello");
    
    }catch(e){
        res.statusCode = 500;
        res.send({message: e.message});
    }
})

module.exports = app;