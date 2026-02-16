import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  BookOpen,
  Code,
  Layout,
  PenTool,
  Layers,
  Rocket,
  Search,
} from "lucide-react";

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = [
    { name: "HTML", icon: <BookOpen size={35} />, path: "https://www.w3schools.com/html/", color: "from-orange-500 to-yellow-600", id : "html" },
    { name: "CSS", icon: <Layout size={35} />, path: "https://www.w3schools.com/Css/", color: "from-blue-500 to-cyan-500", id : "css" },
    { name: "JavaScript", icon: <Code size={35} />, path: "https://www.w3schools.com/js/", color: "from-yellow-400 to-amber-600", id : "javascript" },
    { name: "React", icon: <Rocket size={35} />, path: "https://www.w3schools.com/react/", color: "from-sky-400 to-indigo-500", id : "react" },
    { name: "Java", icon: <PenTool size={35} />, path: "https://www.w3schools.com/java/", color: "from-red-500 to-orange-600", id : "java" },
    { name: "Tailwind CSS", icon: <Layers size={35} />, path: "/tutorial/tailwind", color: "from-cyan-400 to-blue-500", id : "tailwind" },
    { name: "Bootstrap", icon: <Layout size={35} />, path: "https://www.w3schools.com/bootstrap/bootstrap_ver.asp", color: "from-purple-500 to-pink-500", id : "bootstrap" },
    { name: "Node.js", icon: <Code size={35} />, path: "https://www.w3schools.com/nodejs/default.asp", color: "from-green-500 to-emerald-600", id:"node" },
    { name: "Angular", icon: <Rocket size={35} />, path: "https://www.w3schools.com/angular/", color: "from-red-600 to-pink-600", id:"angular" },
    { name: "Python", icon: <BookOpen size={35} />, path: "https://www.w3schools.com/python/", color: "from-yellow-500 to-blue-600", id:"python" },
    { name: "SQL", icon: <Layers size={35} />, path: "https://www.w3schools.com/sql/", color: "from-indigo-400 to-blue-700", id:"sql" },
    { name: "MongoDB", icon: <Layout size={35} />, path: "https://www.w3schools.com/mongoDB/", color: "from-green-400 to-lime-600", id:"mongodb" },
    { name: "TypeScript", icon: <Code size={35} />, path: "https://www.w3schools.com/typescript/", color: "from-blue-500 to-indigo-700", id:"typescript" },
    { name: "Git", icon: <Layers size={35} />, path: "https://www.w3schools.com/git/", color: "from-orange-500 to-red-600", id:"git" },
    { name: "NumPy", icon: <BookOpen size={35} />, path: "https://www.w3schools.com/python/numpy/", color: "from-blue-400 to-cyan-600", id:"numpy" },
    { name: "Pandas", icon: <BookOpen size={35} />, path: "https://www.w3schools.com/python/pandas/", color: "from-purple-500 to-indigo-700", id:"pandas" },
    { name: "Next.js", icon: <Rocket size={35} />, path: "https://nextjs.org/docs", color: "from-slate-600 to-slate-900", id:"nextjs" },
    { name: "Swift", icon: <PenTool size={35} />, path: "https://www.w3schools.com/swift/", color: "from-orange-400 to-red-500", id:"swift" },
    { name: "Kotlin", icon: <PenTool size={35} />, path: "https://www.w3schools.com/kotlin/", color: "from-purple-400 to-pink-500", id:"kotlin" },
    { name: "C", icon: <Code size={35} />, path: "https://www.w3schools.com/c/", color: "from-blue-400 to-slate-600", id:"c" },
    { name: "C#", icon: <Code size={35} />, path: "https://www.w3schools.com/cs/index.php", color: "from-green-500 to-emerald-700", id:"csharp" },
    { name: "C++", icon: <Code size={35} />, path: "https://www.w3schools.com/cpp/default.asp", color: "from-blue-600 to-indigo-800", id:"cpp" },
  ];

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-[#030712] pt-24 pb-20 overflow-hidden relative">
      <Navbar />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] -z-0" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-slate-400">
          Master Your Future.
        </h1>
        <p className="mt-4 text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Deep-dive into industry-standard tutorials and build your expert portfolio.
        </p>

        {/* Search Bar Container */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-xl group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search technologies (e.g. React, Python)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/50 backdrop-blur-xl p-4 pl-12 rounded-2xl border border-slate-800 text-white outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all shadow-2xl placeholder:text-slate-600"
            />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto mt-20 px-6">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white tracking-wide">Explore Categories</h2>
            <div className="h-px flex-grow ml-6 bg-gradient-to-r from-slate-800 to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredCategories.slice(0, visibleCount).map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={cat.path}
                className="group relative block"
              >
                {/* Outer Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                
                <div className={`relative bg-slate-900/80 border border-slate-800 backdrop-blur-sm p-8 rounded-[2rem] flex flex-col items-center hover:border-slate-700 transition-all shadow-xl overflow-hidden`}>
                   {/* Gradient line at top */}
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${cat.color}`} />
                  
                  <div className={`mb-4 p-4 rounded-2xl bg-slate-800/50 group-hover:scale-110 transition-transform duration-300 text-white`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {visibleCount < filteredCategories.length && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="bg-slate-900 border border-slate-700 text-slate-200 px-10 py-4 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all font-bold tracking-wide"
            >
              Show More Skills
            </motion.button>
          </div>
        )}
      </div>
      
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}