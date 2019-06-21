const connection = require('./connection');
const schema = connection.Schema;
const usermodel = new schema({
       'adminId':{type:String},
       'user': {type:String, },
       'username':{type:String,},
       'password':{type:String,},
       'flag':{type:Boolean, },
       'email':{type:String, unique:true },
      
})

const Rights = new schema(
      { 
      'rightId':{type:String},
     
       'adminRight' : {type:Array} 
         
       } )



// const useroles = new schema({

// 'roleId':{type:String},
// 'roleName':{type:String},
// 'roleDesc':{type:String}      
// })

const usermap = new schema({
       'adminId':{type:String},
       'rightId':{type:String}
 //      'roleId':{type:String}      
 })

// const roleRight = new schema({
//    //    'roleId':{type:String},
      
// })

const userSchema = connection.model('admin',usermodel);
const readSchema = connection.model('right',Rights) ;
const mapSchema = connection.model('adminmap',usermap);
//const userRoleSchema= connection.model('rolemap',useroles);
//const useroleRight = connection.model('roleRight',roleRight);

module.exports = {
userSchema:userSchema,
readSchema:readSchema,
//useroleRight: useroleRight,
mapSchema: mapSchema,
//userRoleSchema: userRoleSchema,
};