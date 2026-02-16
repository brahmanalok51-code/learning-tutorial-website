import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coffee, Code, Cpu, Shield, Zap, Terminal, 
  Database, ChevronRight, ExternalLink, Box, 
  Layers, LifeBuoy, Globe 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-5 sm:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm transition-all shadow-xl"
  >
    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const JavaUltimatePage = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans">
      
      {/* HERO */}
      <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
             animate={{ rotate: [0, 10, -10, 0] }}
             transition={{ repeat: Infinity, duration: 4 }}
             className="inline-block mb-6 text-orange-500"
          >
            <Coffee size={50} />
          </motion.div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Java <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Mastery</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            The definitive guide to enterprise-grade development. Master the JVM, concurrency, and modern functional patterns.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 font-bold">
            <button className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-full transition-all">
             <Link to="https://www.geeksforgeeks.org/ide/online-java-compiler">Start Practicing</Link> 
            </button>
            <a href="https://www.geeksforgeeks.org/java/a-quick-guide-on-dsa-and-competitive-coding-in-java/" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full border border-slate-700 transition-all">
              View Roadmap
            </a>
          </div>
        </motion.div>
      </section>

      {/* CORE PILLARS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FeatureCard 
            icon={Shield} 
            title="Strong Typing" 
            desc="Java's static type system catches errors at compile-time, ensuring code stability in complex systems."
          />
          <FeatureCard 
            icon={Cpu} 
            title="JVM Internals" 
            desc="Learn how the ClassLoader, JIT Compiler, and Garbage Collector optimize execution on any OS."
          />
          <FeatureCard 
            icon={Zap} 
            title="Concurrency" 
            desc="Master Multithreading and Virtual Threads to build highly responsive applications."
          />
        </motion.div>
      </section>

      {/* MEMORY SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-900">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Box className="text-orange-500" /> Memory Management
            </h2>
            <div className="space-y-3 mt-6">
              {[
                { t: 'Heap', d: 'Storage for all objects and instance variables.' },
                { t: 'Stack', d: 'Storage for primitive local variables and method frames.' },
                { t: 'Metaspace', d: 'Native memory for class metadata.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-900/40 rounded-lg border border-slate-800">
                  <ChevronRight className="mt-1 text-orange-500" size={16} />
                  <div>
                    <span className="text-white font-bold block">{item.t}</span>
                    <span className="text-sm text-slate-500">{item.d}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <LifeBuoy className="text-orange-500" /> Exception Hierarchy
            </h2>
            <div className="bg-[#0b1120] p-5 sm:p-6 rounded-2xl border border-slate-800 font-mono text-sm leading-relaxed overflow-x-auto">
              <p className="text-blue-400">try (var reader = new BufferedReader(...)) {'{'}</p>
              <p className="text-white ml-4">String data = reader.readLine();</p>
              <p className="text-blue-400">{'}'} catch (IOException e) {'{'}</p>
              <p className="text-orange-400 ml-4">e.printStackTrace();</p>
              <p className="text-blue-400">{'}'}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">The Collections Framework</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {['List', 'Set', 'Map', 'Queue'].map((item) => (
            <div key={item} className="p-5 bg-slate-900 border border-slate-800 rounded-xl text-center hover:border-orange-500 transition-all">
              <Database className="mx-auto mb-3 text-orange-500" />
              <span className="text-white font-bold">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-900" id="docs">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-12">Career Path</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: "Junior", title: "Syntax & Logic", content: "OOP Principles, Exception Handling, and File I/O." },
            { label: "Mid", title: "Architecture", content: "Design Patterns, Spring Boot Microservices, and JUnit Testing." },
            { label: "Senior", title: "Performance", content: "JVM Tuning and Garbage Collection optimization." }
          ].map((step, i) => (
            <div key={i} className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all">
              <span className="text-orange-500 text-xs font-bold uppercase">{step.label}</span>
              <h4 className="text-white text-xl font-bold mt-1">{step.title}</h4>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">{step.content}</p>
            </div>
          ))}
        </div>
      </section>
<section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="bg-slate-900/20 border border-slate-800 rounded-3xl p-12 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-white mb-8">Ready to dive deeper?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="relative group w-full md:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <a 
                href="https://docs.oracle.com/en/java/" 
                target="_blank" rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-white font-bold hover:border-orange-500 transition-all"
              >
                <Globe className="text-orange-500" size={20} />
                Oracle Java Docs
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="relative group w-full md:w-auto">
              <a 
                href="https://www.npmjs.com/search?q=java" 
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-2xl text-white font-bold transition-all"
              >
                <Database className="text-orange-400" size={20} />
                Search Java on NPM
              </a>
            </motion.div>
          </div>
          <p className="mt-8 text-slate-500 text-sm">Official resources for Java SE 21 and above.</p>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-slate-900">
          <p className="text-slate-600 text-xs">Built with React, Tailwind, and Framer Motion. 2026</p>
      </footer>
    </div>
  );
};

export default JavaUltimatePage;