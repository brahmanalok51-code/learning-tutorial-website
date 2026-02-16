import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Zap, Wind, Layers, Share2, 
  Cpu, Code2, ExternalLink, Box, 
  MousePointer2, Terminal, Rocket, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10, borderColor: "rgba(14, 165, 233, 0.5)", backgroundColor: "rgba(14, 165, 233, 0.05)" }}
    className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl transition-all shadow-2xl"
  >
    <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center text-sky-400 mb-6 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm md:text-base">{desc}</p>
  </motion.div>
);

const ReactLearningPage = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 selection:bg-sky-500/30 font-sans tracking-tight">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent blur-[120px]" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="inline-block mb-8 text-sky-400"
          >
            <Atom size={80} strokeWidth={1.5} />
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            React <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 italic">Architect</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Master the library that redefined the web. Build declarative, component-driven UIs with high-performance state management.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="flex items-center gap-2 px-10 py-4 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-2xl transition-all shadow-[0_0_40px_rgba(14,165,233,0.3)]">
              <Play size={18} fill="currentColor" /> <Link to= "https://www.geeksforgeeks.org/reactjs/practice-react-online/">Start Building</Link>
            </button>
            <button className="px-10 py-4 bg-slate-900 border border-slate-700 hover:border-sky-500/50 text-white font-bold rounded-2xl transition-all">
             <Link to="https://react.dev"> Documentation</Link>
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- REACT PILLARS --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard 
            icon={Layers} 
            title="Component Pattern" 
            desc="Think in atoms. Build encapsulated, reusable components that manage their own state and logic."
          />
          <FeatureCard 
            icon={Zap} 
            title="Virtual DOM" 
            desc="High-performance updates via an in-memory representation, ensuring only the necessary parts of the UI re-render."
          />
          <FeatureCard 
            icon={Wind} 
            title="Hooks API" 
            desc="Unleash functional programming. Manage state, effects, and context without writing a single class."
          />
        </motion.div>
      </section>

      {/* --- DEEP DIVE: HOOKS & RENDERING --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-8">The <span className="text-sky-400">Functional</span> Revolution</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Modern React is built on <strong>Hooks</strong>. They allow you to "hook into" React features from function components, making code flatter and easier to test.
            </p>
            
            <div className="space-y-4">
              {[
                { t: 'useState', d: 'The primary way to track data changes within a component.' },
                { t: 'useEffect', d: 'Handling side effects like API calls and subscriptions.' },
                { t: 'useContext', d: 'Eliminating prop-drilling by sharing global state across the tree.' }
              ].map((hook, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-900/60 rounded-xl border border-slate-800">
                  <div className="text-sky-500"><Zap size={20} /></div>
                  <p className="text-slate-300 font-medium"><code>{hook.t}</code>: <span className="text-slate-500">{hook.d}</span></p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 40, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }}
            className="bg-[#0b1120] rounded-[2rem] border border-slate-800 p-8 shadow-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Atom size={120} />
            </div>
            <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4 relative z-10">
              <Terminal className="text-sky-400" size={18} />
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Counter.jsx</span>
            </div>
            <div className="font-mono text-sm md:text-base leading-loose relative z-10">
              <p className="text-purple-400">import <span className="text-white">{`{ useState }`}</span> from <span className="text-green-400">'react'</span>;</p>
              <p className="text-purple-400 mt-4 text-white">function <span className="text-blue-400">Counter</span>() {`{`}</p>
              <p className="text-white ml-6">const [count, setCount] = <span className="text-sky-400">useState</span>(<span className="text-orange-400">0</span>);</p>
              <p className="text-white ml-6 mt-4">return (</p>
              <p className="text-white ml-12">{`<`}button onClick={`={() => setCount(count + 1)}>`}</p>
              <p className="text-white ml-18">Count is {`{count}`}</p>
              <p className="text-white ml-12">{`</button>`}</p>
              <p className="text-white ml-6">);</p>
              <p className="text-white">{`}`}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PERFORMANCE SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-900 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Optimized For <span className="text-sky-400">Performance</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "React.memo", icon: Box, desc: "Prevents unnecessary re-renders of components." },
            { title: "useCallback", icon: MousePointer2, desc: "Memoizes callback functions." },
            { title: "useMemo", icon: Cpu, desc: "Caches expensive calculation results." },
            { title: "Suspense", icon: Share2, desc: "Handles lazy loading and async data fetching." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-sky-500/50 transition-colors">
              <item.icon className="mx-auto text-sky-500 mb-4" size={24} />
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER & LINKS --- */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="bg-gradient-to-br from-slate-900 to-[#020617] border border-slate-800 rounded-[3rem] p-16 text-center shadow-3xl">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Expand Your Ecosystem</h2>
          <p className="text-slate-500 mb-12 text-lg">Don't stop at React. Learn how it integrates with the modern web.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              href="https://react.dev" 
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-8 py-4 bg-sky-600 text-white font-black rounded-2xl shadow-xl transition-all"
            >
              <Atom size={20} />
              New React Docs
            </motion.a>
            
            <motion.a 
              href="https://nextjs.org" 
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 transition-all"
            >
              <Rocket size={20} className="text-sky-400" />
              Explore Next.js
            </motion.a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-700 border-t border-slate-900">
        <p className="text-sm font-medium tracking-widest uppercase italic">Rendered at {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default ReactLearningPage;