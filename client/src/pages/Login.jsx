import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail, ArrowRight, Sparkles } from "lucide-react"; // Added for more "Attractive" icons

export default function LoginPage() {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await fetch("http://localhost:4004/LoginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    });

    if (user.ok) {
      alert("Login successfully...!");
      navigate("/DAR");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden p-4">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl p-10 space-y-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          
         
          <div className="text-center space-y-2">
           
            <h2 className="text-4xl font-black text-white tracking-tight">Welcome <span className="text-indigo-500">Back</span></h2>
            <p className="text-slate-400 font-medium">Enter your credentials to access your lab.</p>
          </div>

          <div className="space-y-5">
          
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
                <input
                  type="email"
                  name="email"
                  value={Data.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="w-full bg-slate-950/50 border border-white/5 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-slate-700 font-medium"
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
                  value={Data.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-950/50 border border-white/5 p-4 pl-12 rounded-2xl text-white outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-slate-700 font-medium"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">Forgot Password?</button>
            </div>

           
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full group relative flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all"
            >
              Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

     
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-white/5"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Secure Social Login</span>
            <div className="flex-1 h-px bg-white/5"></div>
          </div>

          
          <div className="flex justify-center gap-4">
            {[
              { icon: <FcGoogle size={22} />, color: "hover:bg-white/5" },
              { icon: <FaFacebookF size={22} className="text-[#1877F2]" />, color: "hover:bg-[#1877F2]/10" },
              { icon: <FaLinkedinIn size={22} className="text-[#0A66C2]" />, color: "hover:bg-[#0A66C2]/10" }
            ].map((social, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -3 }}
                type="button"
                className={`flex-1 flex justify-center p-4 border border-white/5 rounded-2xl transition-all ${social.color}`}
              >
                {social.icon}
              </motion.button>
            ))}
          </div>
          
          <p className="text-center text-sm text-slate-500 font-medium mt-4">
            Don't have an account? 
            <button onClick={() => navigate('/register')} className="text-indigo-400 hover:underline ml-1 font-bold">Register</button>
          </p>
        </form>
      </motion.div>
    </div>
  );
}