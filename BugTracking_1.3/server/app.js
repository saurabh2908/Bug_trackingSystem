const express = require("express");
const addxlx = require('./Routes/Rights');


const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(require('./utils/cors'));
app.use('/',require("./Routes/tesapi"));
app.use('/',addxlx);

app.use('/api',require('./Routes/api'));
app.listen(process.env.PORT||1234,(err,res)=>{
    if(err){
        console.log("server not start........");
    }
    else{
        console.log('server started........');
    }
})