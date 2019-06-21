const sort = require('shortid');
const adminId = sort.generate() 
const rightid = sort.generate();
arr=[adminId,rightid];
ADID=arr[0];
RID = arr[1];
const operation = {
    login:{
        'adminId':ADID,
        'user':"admin",
        'username':"admin",
        'password':"admin",
        'email':"admi@gmail.com",
        'flag':true,
       
    },

    Rights:{
        'rightId':RID,
        
     
             
        'adminRight': [
               {
                 'rightname':"addUser",
                 'url':"/add"
               },
               {
                'rightname':"rihts",
                'url':"/rights"
               },
               {
                'rightname':"issueType",
                'url':"/issue"
               },

              {
                'rightname':"addxls",
                'url':"/xls"
              }
             ]
        },
        map:{
             "adminId":ADID,
             "rightId":RID        
        }

    }
    


module.exports= operation;