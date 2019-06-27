const sort = require('shortid');
const adminId = sort.generate() 
const rightid = sort.generate();
const tesId = sort.generate() 
const tesRightid = sort.generate();
const devId = sort.generate() 
const devRightid = sort.generate();


arr=[adminId,rightid,tesId,tesRightid,devId,devRightid];
ADID=arr[0];
RID = arr[1];
TSID = arr[2];
TSRID = arr[3];
DEID = arr[4];
DERID= arr[5];
const operation = {
    login:{
        'adminId':ADID,
        'user':"admin",
        'username':"admin",
        'password':"admin",
        'email':"admi@gmail.com",
        'flag':true,
       
    },

    AdmRights:{
        'rightId':RID,
        
     
             
        'adminRight': [
               {
                 'rightname':"Add User",
                 'url':"/add"
               },
               {
                'rightname':"Unsolved Issue",
                'url':"/rights"
               },
               {
                'rightname':"Solved Issue",
                'url':"/issue"
               },

              {
                'rightname':"User List",
                'url':"/xls"
              }
             ],
             
           
        },


        TesRights:{
          'rightId':TSRID,

          'testerRight': [
            {
              'rightname':"Reported Issues",
              'url':"/report"
            },
            {
             'rightname':"Resolved Issues",
             'url':"/resolve"
            },
            {
             'rightname':"Create New Issue",
             'url':"/newIssue"
            },

           {
             'rightname':"TBD",
             'url':"/tbd"
           }
          ]
        },

        DevRights:{

         'rightId':DERID,

          'developerRight': [
            {
              'rightname':"Issues List",
              'url':"/list"
            },
            {
             'rightname':"Solved Issues",
             'url':"/solved"
            },
            {
             'rightname':"Reported TBD",
             'url':"/rtbd"
            },

           {
             'rightname':"Reported Bug",
             'url':"/bug"
           }
          ]
        },
        
        Admmap:{
             "adminId":ADID,
             "rightId":RID        
        },
        Tesmap:{
          "adminId":TSID,
          "rightId":TSRID        
     },
     Devmap:{
      "adminId":DEID,
      "rightId":DERID        
 }

    }
    


module.exports= operation;