import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  BookOpen,
  Code,
  Layout,
  PenTool,
  Layers,
  Youtube,
  Rocket,
  Search,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function DashboardBeforeRegister() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const checkUser = () => {
      const user = localStorage.getItem("user");
      setIsRegistered(!!user);
    };
    checkUser();
    window.addEventListener("storage", checkUser);
    window.addEventListener("focus", checkUser);
    return () => {
      window.removeEventListener("storage", checkUser);
      window.removeEventListener("focus", checkUser);
    };
  }, []);

  const categories = [
    { name: "HTML", icon: <BookOpen size={30} />, path: "/tutorial/html", color: "from-orange-500 to-yellow-600" },
    { name: "CSS", icon: <Layout size={30} />, path: "/tutorial/css", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: <Code size={30} />, path: "/tutorial/javascript", color: "from-yellow-400 to-amber-600" },
    { name: "React", icon: <Rocket size={30} />, path: "/tutorial/react", color: "from-sky-400 to-indigo-500" },
    { name: "Java", icon: <PenTool size={30} />, path: "/tutorial/java", color: "from-red-500 to-orange-600" },
    { name: "Tailwind CSS", icon: <Layers size={30} />, path: "/tutorial/tailwind", color: "from-cyan-400 to-blue-500" },
    { name: "Bootstrap", icon: <Layout size={30} />, path: "/tutorial/bootstrap", color: "from-purple-500 to-pink-500" },
  ];

  const popular = [
    { title: "HTML Full Guide", time: "2 hrs", path: "/tutorial/html", level: "Beginner" },
    { title: "Mastering CSS Grid", time: "1.5 hrs", path: "/tutorial/css", level: "Intermediate" },
    { title: "JavaScript ES6+", time: "3 hrs", path: "/tutorial/javascript", level: "Advanced" },
    { title: "React Beginners Course", time: "4 hrs", path: "/tutorial/react", level: "Beginner" },
  ];

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPopular = popular.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-[#020617] text-slate-200 pt-24 pb-20 relative overflow-hidden">
      <Navbar />

      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-indigo-600/10 to-transparent blur-[120px] -z-0" />

   
      {!isRegistered && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-6xl mx-auto flex justify-end gap-4 px-6 mb-8"
        >
          <Link to="/login" className="text-slate-400 hover:text-white font-medium transition-colors self-center px-4">
            Sign In
          </Link>
          <Link
            to="/register"
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-6xl mx-auto text-center px-6"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Future-proof your career
        </div>
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6">
          Learn Anything. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Go Expert.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Unlock access to premium tutorials and industrial-grade development roadmaps.
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-2xl group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search tutorials (e.g. React, CSS)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/50 backdrop-blur-xl p-5 pl-14 rounded-2xl border border-slate-800 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-2xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <div className="relative z-10 max-w-6xl mx-auto mt-24 px-6">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          Explore Categories <div className="h-px flex-grow bg-slate-800" />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={cat.path}
                className="relative block group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity`} />
                <div className="relative bg-slate-900/60 border border-slate-800 p-8 rounded-3xl flex flex-col items-center hover:border-slate-700 transition-all">
                  <div className={`mb-4 text-white group-hover:scale-110 transition-transform`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-300 group-hover:text-white">{cat.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Tutorials */}
      <div className="relative z-10 max-w-6xl mx-auto mt-24 px-6">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          Popular Tutorials <div className="h-px flex-grow bg-slate-800" />
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPopular.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex justify-between items-center hover:bg-slate-900/80 transition-all"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">{item.level}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm">Duration: {item.time}</p>
              </div>
              <Link to={item.path} className="p-3 bg-red-500/10 rounded-full hover:bg-red-500 transition-all group/icon">
                <Youtube size={24} className="text-red-500 group-hover/icon:text-white" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto mt-32 text-center bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-16 rounded-[3rem] shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <h2 className="text-4xl font-black mb-4">Master Coding Today</h2>
        <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10">
          Join 10,000+ students and get instant access to all premium curriculum.
        </p>

        <Link
          to="/register"
          className="inline-block bg-white text-blue-700 font-bold py-4 px-10 rounded-2xl shadow-xl hover:scale-105 transition-transform"
        >
          Start Learning for Free
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
}