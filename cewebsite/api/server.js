const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000 //npm run start
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ContactControllers = require('./controllers/ContactControllers');

app.use(ContactControllers);

app.listen(port,() =>{
    console.log('listening on port ', port);
})
