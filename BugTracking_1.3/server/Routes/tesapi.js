const multer = require('multer');
const path = require('path');
const app = require('express').Router();
const tes = require('../mongoDB/helpers/testercrud')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log('Going to Store the Data in Disk');
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      console.log('File name is ',file.fieldname);
      cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
      console.log(path.extname(file.originalname));
    }
  })
  
  

app.use( multer({ storage: storage }).single('file'));
app.post('/upload',(request, response)=>{
  console.log('Server Upload ......');
        response.json({'msg':'File Uploaded ....'});
        console.log("response is ",response);
        
})
module.exports = app;