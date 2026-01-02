const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('../config/dbconn')

const userAu = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
    },
    tokens :[
        {
            token : {
                type : String,
                required : true
            }
        }
    ],
},
{
    timestamps : true
}
);


userAu.statics.findByCredentials = async function(email, password) { // "statics.findByCredentials" ye ek inbuilt method hai..
const user = await this.findOne({ email }); // yha findone() v inbuilt method hai aur this me sara schema aa jayega..this.findOne() mtlb apne schema me se find kro email..yha hm email ke alwa dusra v field de skte hai like id, name etc..

    if (!user) {    // agr email present nhi hai to ye "Unable to login" print kr do..
        throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password); // password ko compare kr rhe hai jo user ka password hai aur jo database me hashed password save hai...

    if (!isMatch) { // agr dono password same nhi hai to "invalid password" print kr do..
        throw new Error("Invalid password");
    }

    return user;
};


userAu.pre('save', async function(next){    // yha save ek method hai...aur pre() v ek method hai..schemaName.pre('save') means schema save hone se phle...
    const user = this   // "this" ek keyword hota hai jisme user ka schema data ke sth hota hai..use hmne user me dal diya..

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8) // password ko hashed kr do..
    }
    next() // ye v ek function hai ise yha isliye use kiye hai ki jaise hi pasword bcrypt ho jaye to next ho jao controller pr chla jayega..
})

userAu.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id : user._id.toString()}, 'mySecretKey')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}


module.exports = mongoose.model('userauth', userAu)
