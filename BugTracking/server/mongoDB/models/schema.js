const connection = require('./connection');
const schema = connection.Schema;
const usermodel = new schema({
       'user': {type:String, },
       'username':{type:String,},
       'password':{type:String,},
       'flag':{type:Boolean, },
       'email':{type:String, unique:true },
      
})

const Rights = new schema({
       'addUser': {type:String, required: true},
       'Rights':{type:String, required: true},
       'IssueType':{type:String,  required: true},
       'AddXLs':{type:String}
})

const userSchema = connection.model('admin',usermodel);
const readSchema = connection.model('right',Rights) ;
module.exports = {
userSchema:userSchema,
readSchema:readSchema
};