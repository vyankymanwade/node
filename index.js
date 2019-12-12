require('./modules/database');

const path = require('path');
const exphbs = require('express-handlebars');
const employeeOperation = require('./operationModule/employeeOperation');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();

// setting the views 
app.set('views',path.join(__dirname ,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname + '/views/layouts/'}));
app.set('view engine','hbs');
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.listen(2001 ,() =>{
    console.log('CONENCTED WITHH EXPRESS');
})
app.use('/employee',employeeOperation);