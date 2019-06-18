const express = require('express');
const Routes = express.Router();

Routes.post('/login',(req,res)=>{
    const json= req.body;
    const find = require('../mongoDB/helpers/crud');
    find.search(json,res);
    

})
Routes.post('/change',(req,res)=>{
    console.log("this is a router");
    const json= req.body;
    const find = require('../mongoDB/helpers/crud');
    find.chngPwd(json,res);
    

})

Routes.get('/rights',(request ,response)=>{
    const productOperations= require('../mongoDB/helpers/crud')
    productOperations.check(response);
})
module.exports = Routes;