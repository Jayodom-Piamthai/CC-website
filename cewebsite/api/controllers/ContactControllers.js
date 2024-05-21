const express = require('express');
const app = express();
const ContactModel = require('../model/ContactModel');

app.get('/contactList' , async (req, res) => {
    try{
        const result = await ContactModel.findAll({
            attributes: ['name','head','text','createdAt'],
            order: [['createdAt','DESC']]
        })
        res.send({result: result, message: 'success'});
    }catch(e){
        res.statusCode = 500;
        res.send({message: e.message});
    }
})

app.post('/contactInsert', async (req, res) => {
    try{
        let payload = req.body;
        const result = await ContactModel.create(payload);
        res.send({result: result, message: 'success'}) 
    }catch(e){
        res.statusCode = 500;
        res.send({message: e.message});
    }
})

module.exports = app;