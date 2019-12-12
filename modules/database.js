// getting mongoose module for dealing with mongoDB
const mongoose = require('mongoose');

// gettiing employee structure declared in employeeStructure.js
require('./employeeStructure');

// connecting to mongoDB   and third para is callback function
mongoose.connect('mongodb://localhost:27017/EmployeeDatabase' ,(err) =>{

    if(!err)
    {
        console.log("CONNECTION WITH MONGO DATBASE IS SUCCESSFUL");
    }
    else
    {
        console.log(`CONNECTION FAILED :${err}`);
    }
});
