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
     
       'adminRight' : {type:Array},

       'testerRight' : {type:Array},
       
       'developerRight' : {type:Array}
         
       } )

       
const usermap = new schema({
       'adminId':{type:String},
       'rightId':{type:String}
       
 })


const issues = new schema({
       'rightId':{type: String, required: true},
       'projectName':{type: String,required: true},
       'type':{type: String,required: true},
       'name': {type: String,required: true},
       'title':{type: String,required: true},
       'description': {type: String,required: true},
       'photo':{type: String,required: true},
      'assignTo':{type: String, required: true},
       'reportingOfficer':{type: String,required: true},
       'bugSatus':{type:String ,required: true}
})

const userSchema = connection.model('admin',usermodel);
const readSchema = connection.model('right',Rights) ;
const mapSchema = connection.model('adminmap',usermap);
const isuueSchema = connection.model('issue',issues);
module.exports = {
userSchema:userSchema,
readSchema:readSchema,
isuueSchema: isuueSchema,
mapSchema: mapSchema,

};