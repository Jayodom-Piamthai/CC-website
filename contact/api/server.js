const express = require('express');
const app = express();
const port = 3000
var cors = require('cors')
const Testcontrollers = require('./controller/Testcontroller')
app.use(cors());
app.use(Testcontrollers)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,() =>{
    console.log('listening on port ', port);
})