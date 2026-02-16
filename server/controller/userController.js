require('../config/dbconn')
const User3 = require('../config/userAuth')
const crypto = require('crypto') 
const RazorPay = require('razorpay')
const Contact = require('../config/contactSch')



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


// login...ye controller check krega ki hmne jo field pass kiya hai uss field ki value same hai ki nhi agr nhi hogi to error return krega..jaise hmne email se register kiya aur jb login krege aur wo same gmail database me nhi hoga to erroe dega aur agr hoga to login ho jayega..
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

// controller for data stored in schema...
exports.saveMessage = async (req, res) => {
  try {
    const { name, email, message, submittedAt } = req.body; // Pick up submittedAt

    const newContact = new Contact({ 
      name, 
      email, 
      message, 
      date: submittedAt || new Date() // Fallback to current date
    });
    
    await newContact.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Database saving failed" });
  }
};


// razorpay create oreder controller...
exports.createOrder = async (req, res) => {
  try {
    const { amount, courseName } = req.body;

    const options = {
      amount: amount * 100, // Razorpay expects amount in smallest currency unit (Paisa)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        course_name: courseName,
      }
    };
    const order = await RazorPay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error creating order");
    }
    
    res.json(order);
  } catch (error) {
    console.error("Order Creation Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};


// ye api order ko match krega or validate krega ki dono same hai ki nhi agr same nhi hoga to transaction failed ho jayega...
exports.validateOrder =  async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      
      
      res.json({
        message: "Payment Verified Successfully",
        paymentId: razorpay_payment_id
      });
    } else {
      res.status(400).json({ message: "Invalid Signature. Transaction may be tampered." });
    }
  } catch (error) {
    console.error("Validation Error:", error);
    res.status(500).json({ message: "Server Error during validation" });
  }
};