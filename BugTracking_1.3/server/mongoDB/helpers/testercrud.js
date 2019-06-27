const tesModel = require("../models/schema");

const sort = require('shortid');
//var id = sort.generate();

const tesopr={
    add(){
        
                console.log("why it is added");
               // userObject.adminId= id;
        tesModel.userSchema.create(userObject,(err)=>{
            if(err){
            console.log(err)
            }else{
            
             console.log("added succesfully");
            }
        });
    
  
    
     },
    }

module.exports= tesopr;