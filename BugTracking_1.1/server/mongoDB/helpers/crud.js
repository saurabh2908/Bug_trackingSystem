const userCrud = require('../models/schema');
const config = require('../../utils/config');
const operations={
    search(object,res){
        
        userCrud.userSchema.findOne(object,(err,doc)=>{
            console.log("object is ---------",object);
            if(doc){
                if(doc.flag==true){
                    userCrud.mapSchema.create(config.map,(err)=>{
                       if(err){
                           console.log("eror in search")
                       }
                       else{
                           console.log("record added in serch")
                       }
                    })
                }
                else {
                    console.log("admin id is",doc.adminId);
                    userCrud.mapSchema.findOne({adminId: doc.adminId},(err,data)=>{
                        if(data){
                            console.log("rightid is",data.rightId);
                            userCrud.readSchema.findOne({rightId: data.rightId},(err,meta)=>{
                                if(meta){
                                res.json({ meta ,doc});
                                }
                                else{
                                    console.log(err);
                                }
                            });
                }
                else{
                    console.log("error in mapschema",err);
                }
            })
        }
                
                    // res.status(200).json({doc});
                    // console.log(doc);
                    // console.log('id is ',doc.id);
                    // console.log("object is",object);
                   
                }
                else
                {
                    console.log("can't find in database"),err;
                }
            
        })
    },
    check(res){
    
        userCrud.userSchema.findOne({},(err,doc)=>{
            // console.log('object in check-------',object)
            if(doc){
                console.log(doc);
                
                res.status(200).json({record:doc});
                
            }
            else{
                userCrud.userSchema.create(config.login,(err)=>{
                    if(err){
                       res.json({status:'S',message:'Record Not Added Due to Error'+ err});
                    }else{
                       res.json({status:'S',message:'Record Added'});
                    }
                })
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
                 userCrud.readSchema.create(config.Rights,(err)=>{
                       if(err){
                           console.log("record not added")
                       }
                       else{
                           console.log("added");
                       }
                 })
                
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