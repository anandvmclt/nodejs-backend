const mongoose = require('mongoose');
var mongoDbUrl = "mongodb://localhost:27017/mern-ecommerce";

mongoose.connect(mongoDbUrl, { useUnifiedTopology: true, useNewUrlParser:true })

var dbconnect = mongoose.connection

dbconnect.on('error', ()=> {
    console.log("Mongo Db Connection Failed -");
})

dbconnect.on('connected', ()=> {
    console.log("Mongo Db Connection Successfull");
})
module.exports = mongoose;