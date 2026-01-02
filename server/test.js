const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
MY_TOKEN = process.env.MY_API_KEY

let email = "alok@gmail.com"
let date = "2025-12-22"
console.log(validator.isEmail(email))
console.log(validator.isDate(date))

const securePass = async ()=>{
    const password = "alok@1234"
    let hashPassword = await bcrypt.hash(password, 8)  
    console.log(password)
    console.log(hashPassword)

   const ans = bcrypt.compare(hashPassword, password)
    if(ans){
        console.log("matched..!")
    }
    else console.log("not matcched...!")
}
securePass()

    const isMatch = await  bcrypt.compare("alok@1234", hashPassword)   // compare() ek bcrypt ka function hai jo compare krta hai hmare actual password ko aur hash password ko..
    if(isMatch) console.log("password match")
        else console.log("password is not matched")


// use of jwt (json web token)...

const jwtFun = async()=>{
        const token = jwt.sign({_id : "alok2sgs2024"}, MY_TOKEN, {expiresIn : "1000"})    // jwt.sign() ki help se hm apne API_KEY ki given id ko token me convert kr skte hai actual API_KEY koi access nhi kr skta wo private hota hai agr access ho jayega to sb hmare api ko hack ya use kr skte hai publicaly.._id sirf hmare key ka id hai jo API_KEY hmne .env me save kiya hai..
        console.log( "token created by jwt sign..--> ", " ", token,)

        const verifyData = jwt.verify(token, MY_TOKEN)
        console.log(verifyData)

}

jwtFun()
securePass()