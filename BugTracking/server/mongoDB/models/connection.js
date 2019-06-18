const mongoose = require('mongoose');
const env = require('../../utils/env');
mongoose.connect(env.mongo);
mongoose.connection.on('open',()=>{
    console.log('connection open');

})
module.exports= mongoose;
