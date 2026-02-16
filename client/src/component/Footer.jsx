import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#020617] text-slate-300 py-16 mt-20 border-t border-slate-800/60 relative overflow-hidden"
    >
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white tracking-tighter italic">
            Learn<span className="text-sky-500">ify</span>
          </h2>
          <p className="text-slate-500 leading-relaxed text-sm">
            Mastering the art of code. We provide structured paths for engineers to transition from beginners to architects through high-fidelity tutorials.
          </p>
        </div>

    
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Navigation</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            {['Home', 'Tutorials', 'Courses', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`} className="hover:text-sky-400 transition-colors duration-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Specializations</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            {[
              { name: 'HTML & CSS', path: '/html' },
              { name: 'JavaScript Engine', path: '/javascript' },
              { name: 'React Architect', path: '/react' },
              { name: 'Java Mastery', path: '/java' }
            ].map((item) => (
              <li key={item.name}>
                <a href={item.path} className="hover:text-orange-400 transition-colors duration-200">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

     
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Connect</h3>
          <div className="flex gap-3">
            {[
              { Icon: FaFacebookF, color: "hover:bg-blue-600" },
              { Icon: FaLinkedinIn, color: "hover:bg-blue-500" },
              { Icon: FaInstagram, color: "hover:bg-pink-600" },
              { Icon: FaYoutube, color: "hover:bg-red-600" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -3 }}
                className={`p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white ${social.color} transition-all duration-300 shadow-lg`}
              >
                <social.Icon size={18} />
              </motion.a>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-600">
            System Status: <span className="text-green-500/80 font-medium italic">All Systems Operational</span>
          </p>
        </div>

      </div>

     
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs mt-16 pt-8 border-t border-slate-900">
        <p>© {new Date().getFullYear()} LearnHub. Built with Precision.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>
      </div>
    </motion.footer>
  );
}