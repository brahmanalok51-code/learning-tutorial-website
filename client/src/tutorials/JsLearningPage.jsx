import React from 'react';
import { motion } from 'framer-motion';
import { 
  Braces, Zap, Globe, Layers, Cpu, Code2, 
  ExternalLink, ChevronRight, MousePointer2, 
  RefreshCw, Smartphone, Rocket 
} from 'lucide-react';

const TopicCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -8, borderColor: "rgba(250, 204, 21, 0.5)", backgroundColor: "rgba(254, 240, 138, 0.05)" }}
    className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl transition-all shadow-2xl"
  >
    <div className="w-14 h-14 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-400 mb-6 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm md:text-base">{desc}</p>
  </motion.div>
);

const JsLearningPage = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-yellow-500/30 font-sans tracking-tight">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent blur-[120px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black uppercase tracking-[0.2em] mb-8"
          >
            <Zap size={14} fill="currentColor" /> The Language of the Web
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            JavaScript <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-500 to-orange-500">Pulse</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Go beyond <code>console.log()</code>. Master asynchronous patterns, the Event Loop, and the architecture of modern web engines.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black rounded-2xl transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] active:scale-95">
              Launch Curriculum
            </button>
            <button className="px-10 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 transition-all backdrop-blur-md">
              View ESNext Specs
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <TopicCard 
            icon={Globe} 
            title="DOM Engine" 
            desc="Understand how JavaScript interacts with the browser's Document Object Model to create living, breathing interfaces."
          />
          <TopicCard 
            icon={RefreshCw} 
            title="Asynchronous" 
            desc="Master Promises, Async/Await, and the Event Loop to handle heavy data without blocking the UI."
          />
          <TopicCard 
            icon={Layers} 
            title="Scope & Closures" 
            desc="Deep dive into lexical scoping, closures, and the execution context that makes JS so powerful."
          />
        </motion.div>
      </section>

      {/* --- THE EVENT LOOP DEEP DIVE --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-900">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-8">Understanding the <span className="text-yellow-500">Event Loop</span></h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              JavaScript is single-threaded, but it doesn't mean it's slow. It uses a non-blocking I/O model that offloads tasks to the browser APIs.
            </p>
            
            
            
            <div className="space-y-6 mt-10">
              {[
                { t: 'Call Stack', d: 'Where your code execution is tracked (LIFO).' },
                { t: 'Web APIs', d: 'Browser-provided features like fetch(), setTimeout(), and DOM events.' },
                { t: 'Task Queue', d: 'Where callbacks wait before being pushed back to the stack.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-slate-900/50 rounded-2xl border border-slate-800/50">
                  <div className="text-yellow-500 font-black text-xl">0{i+1}</div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.t}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-yellow-500/5 rounded-[3rem] blur-2xl" />
            <div className="relative bg-[#0b1120] rounded-[2rem] border border-slate-800 p-8 shadow-3xl">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                <Code2 className="text-yellow-500" size={20} />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">ModernPromises.js</span>
              </div>
              <div className="font-mono text-sm md:text-base leading-loose overflow-x-auto">
                <p className="text-purple-400">const <span className="text-blue-400">fetchData</span> = <span className="text-yellow-500">async</span> () ={`>`} <span className="text-white">{`{`}</span></p>
                <p className="text-pink-400 ml-6">try <span className="text-white">{`{`}</span></p>
                <p className="text-white ml-12">const res = <span className="text-yellow-500">await</span> fetch(<span className="text-green-400">'/api/data'</span>);</p>
                <p className="text-white ml-12">const data = <span className="text-yellow-500">await</span> res.json();</p>
                <p className="text-blue-400 ml-12">console.<span className="text-white">log</span>(<span className="text-green-400">'Success:'</span>, data);</p>
                <p className="text-pink-400 ml-6">{`}`} catch <span className="text-white">(err) {`{`}</span></p>
                <p className="text-orange-400 ml-12">throw new Error(err);</p>
                <p className="text-pink-400 ml-6">{`}`}</p>
                <p className="text-white">{`}`}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ECOSYSTEM ROADMAP --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-900">
        <h2 className="text-center text-4xl font-bold text-white mb-20 tracking-tight">The Modern Roadmap</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { stage: "Step 1", title: "Fundamentals", color: "from-blue-500" },
            { stage: "Step 2", title: "ES6+ & DOM", color: "from-yellow-500" },
            { stage: "Step 3", title: "Node & Backend", color: "from-green-500" },
            { stage: "Step 4", title: "Frameworks", color: "from-purple-500" }
          ].map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${step.color} to-transparent`} />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{step.stage}</span>
              <h4 className="text-xl font-bold text-white mt-2 group-hover:text-yellow-400 transition-colors">{step.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA & DOCUMENTATION --- */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="relative group p-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-60 transition duration-1000" />
          <div className="relative bg-slate-900/90 border border-slate-800 rounded-[2.5rem] p-16 backdrop-blur-3xl">
            <h2 className="text-4xl font-bold text-white mb-6">Deepen Your Knowledge</h2>
            <p className="text-slate-400 mb-12 text-lg">Access the most comprehensive JavaScript documentation in the world.</p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a 
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-8 py-4 bg-yellow-500 text-black font-black rounded-2xl shadow-xl transition-all"
              >
                <Braces size={20} />
                Explore MDN Web Docs
              </motion.a>
              
              <motion.a 
                href="https://javascript.info/" 
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 transition-all"
              >
                <Rocket size={20} className="text-yellow-500" />
                Modern JS Tutorial
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 border-t border-slate-900">
        <p className="text-sm font-medium tracking-widest uppercase">Console.log("End of Journey");</p>
      </footer>
    </div>
  );
};

export default JsLearningPage;