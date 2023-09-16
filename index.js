const express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
const port = 3000;
const connection = require('./Models/index')
const router = require('./Routes/user')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());

app.use('/',router)

app.listen(port, ()=>{
    console.log(`app is listening on ${port}`)
})