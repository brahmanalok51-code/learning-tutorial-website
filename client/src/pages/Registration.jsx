import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Registration() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSet = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4004/postAuthData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(user)
    });

    

    if (res.ok) {
         alert("registration successfully..!");
      navigate('/login');
     
    } else {
      alert("Something went wrong, you are not registered yet..");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white/20 backdrop-blur-2xl rounded-2xl p-10 shadow-2xl border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">Create Account</h2>

        <form onSubmit={handleSet} className="space-y-5">
          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="email"
            placeholder="Enter your Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="password"
            placeholder="Create Password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-white text-indigo-700 font-semibold p-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Register
          </motion.button>
        </form>

        <p className="text-center text-white/80 mt-5 text-sm">
          Already have an account? <span className="underline cursor-pointer text-white"><Link to="/login">Login</Link></span>
        </p>
      </motion.div>
    </div>
  );
}

export default Registration;