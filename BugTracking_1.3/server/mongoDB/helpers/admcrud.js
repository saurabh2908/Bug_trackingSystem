const adminCrud = require('../models/schema');
const sort = require('shortid');
var id = sort.generate();
const admopr={
    add(user){
        for(let userObject of user ){
            if(userObject!=''){
                console.log("why it is added");
                userObject.adminId= id;
        adminCrud.userSchema.insertMany(userObject,(err)=>{
            if(err){
            console.log(err)
            }else{
            
             console.log("added succesfully");
            }
        });
    }
    else{
        console.log("hi");
        break;
    }
    }
     },
    }

module.exports= admopr;