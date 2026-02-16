import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, UserPlus, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

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
      alert("Registration successful!");
      navigate('/login');
    } else {
      alert("Something went wrong, you are not registered yet..");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 md:p-10 overflow-hidden relative">
      
    
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        
       
        <div className="hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-slate-900 border-r border-white/5 relative">

          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest">
              <ShieldCheck size={14} /> 100% Secure Environment
            </div>
            
            <h1 className="text-5xl font-black text-white leading-tight tracking-tighter">
              Join the <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Elite 1%</span> <br /> 
              of Developers.
            </h1>
            
            <p className="text-slate-400 text-lg font-medium max-w-md">
              Unlock exclusive access to premium tutorials, code challenges, and a community of expert builders.
            </p>

            <div className="space-y-4 pt-6">
              {[
                "Access to 500+ Premium Tutorials",
                "Real-time Mentor Support",
                "Certificate of Completion"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300 font-semibold">
                  <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
        </div>

     
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-black text-white tracking-tight mb-2">Create Account</h2>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em]">Start your journey with Learnify</p>
          </div>

          <form onSubmit={handleSet} className="space-y-6">
            
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={user.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border border-white/5 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-700 font-medium"
                />
              </div>
            </div>

          
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={user.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border border-white/5 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-700 font-medium"
                />
              </div>
            </div>

           
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={user.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/50 border border-white/5 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-700 font-medium"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full group relative flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all mt-4"
            >
              Get Started <UserPlus size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>

          <p className="text-center mt-8 text-slate-500 font-medium">
            Already have an account? 
            <Link to="/login" className="text-indigo-400 hover:underline ml-2 font-black uppercase tracking-wider text-xs">
              Login
            </Link>
          </p>
        </div>

      </motion.div>
    </div>
  );
}

export default Registration;