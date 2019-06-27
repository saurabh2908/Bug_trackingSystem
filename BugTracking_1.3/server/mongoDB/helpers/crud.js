const userCrud = require('../models/schema');
const config = require('../../utils/config');
const operations={
    search(object,res){
        
        userCrud.userSchema.findOne(object,(err,doc)=>{
            console.log("object is ---------",object);
            if(doc){
                // res.json({doc});
                console.log("search docis00000000000000000000",doc);
               
                if(doc.flag==true){
                    if(doc.user=="admin"){
                    userCrud.mapSchema.create(config.Admmap,(err)=>{
                       if(err){
                           console.log("eror in search")
                       }
                       else{
                           res.json({doc});
                           console.log("record added in serch")
                       }
                    })
                }
         
                if(doc.user=="tester"){
                    userCrud.mapSchema.create(config.Tesmap,(err)=>{
                       if(err){
                           console.log("eror in search")
                       }
                       else{
                           res.json({doc});
                           console.log("record added in serch")
                       }
                    })
                }      
                
                if(doc.user=="developer"){
                    userCrud.mapSchema.create(config.Devmap,(err)=>{
                       if(err){
                           console.log("eror in search")
                       }
                       else{
                           res.json({doc});
                           console.log("record added in serch")
                       }
                    })
                }
    }  

    
    
    else {
        if(doc.user=='admin'){
        console.log("admin id is",doc.adminId);
        userCrud.mapSchema.findOne({adminId: doc.adminId},(err,data)=>{
            if(data){
                console.log("rightid is",data.rightId);
                userCrud.readSchema.findOne({rightId: data.rightId},(err,meta)=>{
                    if(meta){
                    res.json({ meta ,doc});
                   
                    console.log(meta);
                    console.log("admin document is",doc);
                   
    // console.log('id is ',doc.id);
    // console.log("object is",object);
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


if(doc.user=='tester'){
    console.log("admin id is",doc.adminId);
    userCrud.mapSchema.findOne({adminId: doc.adminId},(err,data)=>{
        if(data){
            console.log("rightid is",data.rightId);
            userCrud.readSchema.findOne({rightId: data.rightId},(err,meta)=>{
                if(meta){
                res.json({ meta ,doc});
               
                console.log(meta);
                console.log("tester document is",doc);
               
// console.log('id is ',doc.id);
// console.log("object is",object);
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


if(doc.user=='developer'){
    console.log("admin id is",doc.adminId);
    userCrud.mapSchema.findOne({adminId: doc.adminId},(err,data)=>{
        if(data){
            console.log("rightid is",data.rightId);
            userCrud.readSchema.findOne({rightId: data.rightId},(err,meta)=>{
                if(meta){
                res.json({ meta ,doc});
               
                console.log(meta);
                console.log("developer document is",doc);
               
// console.log('id is ',doc.id);
// console.log("object is",object);
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
            }
                }
                else
                {
                    console.log("can't find in database",err);
                }
            
        })
    },
    check(res){
    
        userCrud.userSchema.findOne({},(err,doc)=>{
            // console.log('object in check-------',object)
            if(doc){
                // console.log(doc);
                
                console.log(doc);
                
            }
            else{
                // console.log(doc);

                userCrud.userSchema.create(config.login,(err,tok)=>{
                    if(err){
                       res.json({status:'S',message:'Record Not Added Due to Error'+ err});
                    }else{
                        console.log(tok);
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
                 console.log("document is==================",doc);
                 console.log("old user is",userObject.username);
                 console.log("username is", userObject.newuser);
                 if(doc.user=='admin'){
                    userCrud.readSchema.create(config.AdmRights,(err,sat)=>{
                        if(err){
                            console.log("record not added admin")
                        }
                        else{
                            console.log("added admin");
                            console.log(sat);
                        }
                  })
                 }
                 if(doc.user=='tester'){
                    userCrud.readSchema.create(config.TesRights,(err,test)=>{
                        if(err){
                            console.log("record not added tester")
                        }
                        else{
                            console.log("added tester");
                            console.log(test);
                        }
                  })
                 }
                 if(doc.user=='developer'){
                    userCrud.readSchema.create(config.DevRights,(err,dev)=>{
                        if(err){
                            console.log("record not added devloper")
                        }
                        else{
                            console.log("added developer");
                            console.log(dev);
                        }
                  })
                 }
                
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