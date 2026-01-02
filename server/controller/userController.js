const User = require('../config/user')
require('../config/dbconn')
const User3 = require('../config/userAuth')
const crypto = require('crypto') 
const RazorPay = require('razorpay')

// save schema data in users collection..of User schema..
exports.user = async(req,res)=>{
 try{   
    const setuser = new User(req.body)  // hm body se req kr rhe jaise hi schema se data ayega use save kr lege..
    await setuser.save()
    res.status(200).json(setuser)}
    catch(err){
        res.status(400).json({message:err.message})
    }
}

// controller for read or get user...of User schema...
exports.readUser = async(req, res)=>{
    try{
        const user = await User.find()
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
}

// controller for getData or read data by id..
exports.readUserById = async(req, res)=>{
    try{
        const user = await User.findById(req.params.id)

        if(!user){
            res.status(400).json({message : err.message})
        }
        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
}


//"userAuth" ke bcrypt password ko save krne ka function bna rhe hai..
exports.postAuthUser = async(req, res)=>{
    try{
        const setauthUser = new User3(req.body) // User3 schema ke body ka req kr rhe hai body means jo data hm pass krte hai schema me postman ke through..
        await setauthUser.save()  // await me rakhe hai kyu ki jb data get ho jayea User3 me tb use save kr do..
        res.status(200).json(setauthUser)
    }catch(error){
        res.status(400).json({message : error.message})
    }
}

// ye controller check krega ki hmne jo field pass kiya hai uss field ki value same hai ki nhi agr nhi hogi to error return krega..jaise hmne email se register kiya aur jb login krege aur wo same gmail database me nhi hoga to erroe dega aur agr hoga to login ho jayega..
exports.LoginUser = async (req,res)=>{
    try{
        const user = await User3.findByCredentials(
            req.body.email, // yha jo jo field (email,name,id etc) dena chahte hai hm de skte hai unpe credential check kr skte hai..jaise yha hmne email password diya hai to jb hm data submit krege to database se check hoga ki ky ye specific email password present hai agr hoga to login ho jayega..
            req.body.password
        );
        res.send(user);
    }catch(error){
        res.status(400).send({ error: error.message });
    }
}

// controller that generate token..
exports.postUser = async (req, res)=>{
    const user = new User3(req.body)
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    }
    catch(e){
        res.status(400).send(e)
    }
}

// controller for update data of user...
exports.userUpdate = async (req, res)=>{
    const updates = Object.keys(req.body)  // hmne object.keys(req.body) ki help se hmne schema ki sari keys(email, password, name schema me jitne v data hote hai key aur value ke pair me hote hai to hm unke keys ko hi get kr ke unki value ko update krege isliye keys ko get kr rhe hai) ko get kr liya kyu ki hm keys pr hi operation perform krne wale hai..
    const allowedUpdate = ['email','password']  // hmne allow kiya ki email aur password pr hi update lgayege hm aur keys ko v add kr skte hai like name, phone etc...
    const isValidDateOperation = updates.every((update)=>{ // yha every() and includes() dono inbuilt method hai..
        allowedUpdate.includes(update)  // sare keys me se email and password ko include krna hai..
    })
    if(isValidDateOperation){
        return res.status(400).send({error : "invalid update"})
    }
    try{
const user = await User3.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidator : true})// yha user3 userAuth schema ka refrence hai..yha "req.params.id" isiliye use kiye hai kyu ki hm specific User3 schema ke user ka id dal ke update perform krege..
if(!user){
    return res.status(404).send()
}
res.send(user)
    }catch(err){
res.status(400).send(err)
    }
}

// controller to remove or delete data from of the user..
exports.deleteUser = async (req, res)=>{
    try{
        const user = await User3.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }
    catch(err){
        res.status(500).send()
    }
}

// Api for integrate backend server to razorpay server...
exports.paymentIntegration = async (req, res)=>{
    try{
     const razpay = new RazorPay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret : process.env.RAZORPAY_SECRET
})

const option = req.body
const order = await razpay.orders.create(option)

if(!order){
    return res.status(500).send("Error")
}
res.json(order)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Error")
    }
}

// ye api order ko match krega or validate krega ki dono same hai ki nhi agr same nhi hoga to transaction failed ho jayega...
exports.validateOrder =  async (req, res)=>{
    const {razorpay_order_id , razorpay_payment_id, razorpay_signature} = req.body

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET)   // createHmac(), ye crypto ka ek method jiske help se hm "cryptographic hash" create krte hai aur ye string, buffer,typedArray return krta hai...yha "sha256" pre-define hai..

    sha.update(`${razorpay_order_id} | ${razorpay_payment_id}`) // 
    const digest = sha.digest("hex")    // digest() me yha "hex" predefine hai...

    if(digest !== razorpay_signature){
        return res.status(400).json({msg : "Transaction is not legit!"})
    }

    res.json({
        msg : "success",
        orderId : razorpay_order_id,
        paymentId : razorpay_payment_id
    })
}