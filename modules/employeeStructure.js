const mongoose = require('mongoose');

// declaring employee Structure
var employeeSchema = new mongoose.Schema({
    name: 
    {
        type:String
    },
    email:
    {
        type:String
    },
    phnNo:
    {
        type:String
    },
    city:
    {
        type:String
    }
});

mongoose.model('employee',employeeSchema);