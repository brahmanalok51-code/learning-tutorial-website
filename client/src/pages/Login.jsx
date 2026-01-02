import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
const navigate = useNavigate()
  const [Data, setData] = useState({
    email : "",
    password : ""
  })

  const handleChange = ((e)=>{
  const name =  e.target.name;
  const value = e.target.value;
   setData((prev) => ({ ...prev, [name]: value }));
  })

  const handleSubmit = async (event)=>{
event.preventDefault()
const user = await fetch("http://localhost:4004/LoginUser",{
  method : "POST",
  headers : {
      "Content-Type": "application/json"
  },
   body: JSON.stringify(Data)
})

if(user.ok){
  alert("login successfully...!")
  navigate('/userDashboard')
}
else{
  alert("Something went wrong")
}
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 p-4">
            
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
  <form onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-center text-blue-600">Welcome Back</h2>
        <p className="text-center text-gray-500">Login to continue</p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={Data.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={Data.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-md font-semibold"
          >
            Login
          </motion.button>
        </div>
       

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500">or continue with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="p-3 border rounded-full shadow hover:bg-gray-100">
            <FcGoogle size={24} />
          </button>

          <button className="p-3 border rounded-full shadow hover:bg-gray-100 text-blue-600">
            <FaFacebookF size={24} />
          </button>

          <button className="p-3 border rounded-full shadow hover:bg-gray-100 text-blue-700">
            <FaLinkedinIn size={24} />
          </button>
        </div>
        </form>

      </motion.div>
       
    </div>
  );
}
