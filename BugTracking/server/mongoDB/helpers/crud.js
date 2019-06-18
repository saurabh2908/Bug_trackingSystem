const userCrud = require('../models/schema');
const operations={
    search(object,res){
        
        userCrud.userSchema.findOne(object,(err,doc)=>{
            console.log("object is ---------",object);
            if(doc){
                    res.status(200).json({doc});
                    console.log(doc);
                    console.log('id is ',doc.id);
                    console.log("object is",object);
                   
                }
                else
                {
                    console.log("can't find in database"),err;
                }
            
        })
    },
    check(res){
    
        userCrud.readSchema.find({},(err,doc)=>{
            // console.log('object in check-------',object)
            if(doc){
                console.log(doc);
                res.status(200).json({record:doc});
            }
            else{
                console.log("this is rights data is is not found");
            }
        })
    
},
    chngPwd(userObject,response){
       
        console.log(userObject);
        userCrud.userSchema.findOneAndUpdate({username: userObject.username, password: userObject.password
        }, {$set:{username: userObject.newuser,email: userObject.email,password: userObject.newpass,flag: false}}, {new: true}, (err, doc) => {
            console.log("this is +++++++++++++++++++");
           
            
            if (err) {
                console.log("Something wrong ");
               
            }
            else{
                
             if(doc){

                 console.log("mein aa gya");
                 const mail = require('../../utils/mail');
           
                 mail("congrats","account has been created",userObject.email,response);
                response.status(200).json({doc});
             }else{
                console.log("incorrect")
             }
                
            }
        });
    }
}
module.exports=operations;