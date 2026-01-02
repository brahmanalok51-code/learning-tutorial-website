const mongoose =require('mongoose')
const { trim } = require('validator')
const validator = require('validator')


const Userschema = mongoose.Schema({
    name : String,

    email:{ // yha hm email me validation kr rhe hai ki type string hoga, trim true hoga means koi v email me whitespace hoga to remove ho jayega...
        type : String,
        trim : true,
         unique: true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("please provide a valid email...")
            }
        }
    },
    password: String,
     
})


module.exports = mongoose.model('users', Userschema)