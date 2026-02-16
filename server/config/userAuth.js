const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('../config/dbconn')

const userAu = mongoose.Schema({
    name : {
        type : String
    },
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

// function for login credential...
userAu.statics.findByCredentials = async function(email, password){ // "statics" ek object hai aur findByCredentials() ek user define method hai hm dusra name v likh skte hai..
const user = await this.findOne({ email }); // yha findone() inbuilt method hai aur this me sara schema aa jayega..this.findOne() mtlb apne schema me se find kro email..yha hm email ke alwa dusra v field de skte hai like id, name etc..

    if (!user) {    // agr email present nhi hai to ye "Unable to login" print kr do..
        throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password); // password ko compare kr rhe hai jo user ka password hai aur jo database me hashed password save hai...jo ek document (i.e ek object ka data) hai usme se password jis object ka email find hua model se uss object ke password ke sath compare ho rha hai pure model se nhi...

    if (!isMatch) { // agr dono password same nhi hai to "invalid password" print kr do..
        throw new Error("Invalid password");
    }

    return user;
};


// function for hashed password before save...
userAu.pre('save', async function(next){    // yha save ek method hai...aur pre() v ek method hai..schemaName.pre('save') means schema save hone se phle...
    const user = this   // "this" ek keyword hota hai jisme user ka schema data ke sth hota hai..use hmne user me dal diya..

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8) // password ko hashed kr do..
    }
    next() // ye v ek function hai ise yha isliye use kiye hai ki jaise hi pasword bcrypt ho jaye to next ho jao controller pr chla jayega..
})

// function for create token...
userAu.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({_id : user._id.toString()}, 'mySecretKey')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}


module.exports = mongoose.model('userauth', userAu)
