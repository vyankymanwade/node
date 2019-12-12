const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('employee');
// using router level middleware to use get method
router.get('/',(req,res) =>{
    res.render("employeeViews/add",{
        viewTitle:"Insert Employee"
    });
    
})

router.post('/',(req,res) =>{
   insertIntoEmployee(req,res);
   console.log(req.body);
})

function insertIntoEmployee(req,res)
{
    var employee = new Employee();
    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.country = req.body.country;
    employee.phnNo = req.body.phnNo;
    
    employee.save((err,doc) =>
    {
        if(!err)
        {
            res.redirect('employee/list');
        }
        else
        {
            console.log('ERROR DURING INSEERTION');
        }
    });
}

router.get('/list',(req,res) =>{
    res.json('from list');
});
module.exports = router;