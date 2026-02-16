import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

export default function TutorialNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [tutorialPopup, setTutorialPopup] = useState(false);

  const tutorialLinks = [
    { name: "HTML Tutorial", path: "/html" },
    { name: "CSS Tutorial", path: "/tutorial/css" },
    { name: "JavaScript Tutorial", path: "/tutorial/javascript" },
    { name: "React Tutorial", path: "/tutorial/react" },
    { name: "Java Tutorial", path: "/tutorial/java" },
    { name: "Tailwind Tutorial", path: "/tutorial/tailwind" },
    { name: "Bootstrap Tutorial", path: "/tutorial/bootstrap" },
    { name: "Node.js", path: "/tutorial/Nodejs" },
    { name: "Angular", path: "/tutorial/angular" },
    { name: "Python", path: "/tutorial/python" },
    { name: "SQL", path: "/tutorial/sql"},
    { name: "MongoDB", path: "/tutorial/mongodb" },
    { name: "Typescript", path: "/tutorial/typescript"},
    { name: "Github", path: "/tutorial/github" },
    { name: "Numpy", path: "/tutorial/numpy" },
    { name: "Pandas", path: "/tutorial/pandas" },
    { name: "Next.js", path: "/tutorial/nextjs" },
    { name: "Swift", path: "/tutorial/swift" },
    { name: "Kotlin", path: "/tutorial/kotlin" },
    { name: "C", path: "/tutorial/c" },
    { name: "C#", path: "/tutorial/csharp" },
    { name: "C++", path: "/tutorial/cpp" },
  ];

  const navLinks = [
    { name: "Home", path: "/DAR" },
    { name: "Tutorials", popup: true },
    { name: "Subjects", path: "/subject" },
    { name: "Contact", path: "/contact" },
    { name: "Premium", path: "/payment", highlight: true },
  ];

  return (
    <>
      
      <nav className="w-full bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

         
          <Link to="/DAR" className="flex items-center gap-2 group">
           
            <span className="text-2xl font-black text-white tracking-tighter transition-all group-hover:tracking-normal">
              Learn<span className="text-blue-500">ify</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((item) => (
              <div key={item.name} className="relative">
                {item.popup ? (
                  <button
                    onClick={() => setTutorialPopup(!tutorialPopup)}
                    className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors ${
                      tutorialPopup ? "text-blue-400" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform ${tutorialPopup ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-bold uppercase tracking-widest transition-all ${
                      item.highlight 
                      ? "bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30 hover:bg-blue-600 hover:text-white" 
                      : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setOpenMenu(true)} 
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Desktop Tutorials Mega-Menu Popup */}
      <AnimatePresence>
        {tutorialPopup && (
          <>
            {/* Click-out Overlay */}
            <div className="fixed inset-0 z-40" onClick={() => setTutorialPopup(false)} />
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-slate-800 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl p-8 w-[90%] max-w-4xl z-50 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              
              {tutorialLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setTutorialPopup(false)}
                  className="group flex flex-col p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                >
                  <span className="text-slate-400 group-hover:text-blue-400 text-sm font-medium transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
              onClick={() => setOpenMenu(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 w-80 h-full bg-[#020617] border-l border-white/10 z-[70] p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold text-white">Menu</span>
                <button onClick={() => setOpenMenu(false)} className="text-slate-400 hover:text-white">
                  <X size={28} />
                </button>
              </div>

              <div className="space-y-6">
                {navLinks.map((item) => (
                  <div key={item.name}>
                    {item.popup ? (
                       <div className="space-y-4">
                          <p className="text-xs font-black uppercase tracking-widest text-slate-500">Explore</p>
                          <div className="grid grid-cols-1 gap-2 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                             {tutorialLinks.map(t => (
                               <Link key={t.name} to={t.path} className="text-slate-300 hover:text-blue-400 py-1" onClick={() => setOpenMenu(false)}>
                                 {t.name}
                               </Link>
                             ))}
                          </div>
                       </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setOpenMenu(false)}
                        className="block text-2xl font-bold text-slate-100 hover:text-blue-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                    <div className="h-px bg-white/5 mt-6" />
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}