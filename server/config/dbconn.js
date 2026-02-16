const mongoose=require('mongoose')
require('dotenv').config()
 uri = process.env.DB_URI

console.log(uri)
 module.exports = mongoose.connect(uri)
.then(()=>console.log("databaseconnection successfully"))
.catch((e)=>console.log(e.message))