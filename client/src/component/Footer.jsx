import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-12 mt-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        
        <div>
          <h2 className="text-2xl font-bold">LearnHub</h2>
          <p className="text-gray-200 mt-3">
            LearnHub is your all-in-one platform to learn programming, web development,
            and technology through structured tutorials & real-world projects.
          </p>
        </div>

     
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/tutorials" className="hover:text-yellow-300">Tutorials</a></li>
            <li><a href="/courses" className="hover:text-yellow-300">Courses</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Popular Tutorials</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/html" className="hover:text-yellow-300">HTML Tutorials</a></li>
            <li><a href="/css" className="hover:text-yellow-300">CSS Tutorials</a></li>
            <li><a href="/javascript" className="hover:text-yellow-300">JavaScript</a></li>
            <li><a href="/react" className="hover:text-yellow-300">React JS</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a className="p-3 bg-white/20 rounded-full hover:bg-yellow-300 hover:text-black transition">
              <FaFacebookF size={20} />
            </a>
            <a className="p-3 bg-white/20 rounded-full hover:bg-yellow-300 hover:text-black transition">
              <FaLinkedinIn size={20} />
            </a>
            <a className="p-3 bg-white/20 rounded-full hover:bg-yellow-300 hover:text-black transition">
              <FaInstagram size={20} />
            </a>
            <a className="p-3 bg-white/20 rounded-full hover:bg-yellow-300 hover:text-black transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

      </div>

   
      <div className="text-center text-gray-200 mt-10 pt-6 border-t border-white/20">
        © {new Date().getFullYear()} LearnHub. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
