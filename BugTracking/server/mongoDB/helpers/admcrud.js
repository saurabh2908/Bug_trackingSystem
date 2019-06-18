const adminCrud = require('../models/schema');
const admopr={
    add(user){
        for(let userObject of user ){
            if(userObject!=''){
        adminCrud.userSchema.insertMany(userObject,(err)=>{
            if(err){
            console.log(err)
            }else{
            
             console.log("added succesfully");
            }
        });
    }
    else{
        break;
    }
    }
     },
    }

module.exports= admopr;