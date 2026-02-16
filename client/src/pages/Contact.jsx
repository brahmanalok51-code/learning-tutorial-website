import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../component/Navbar"

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Clock,
  ShieldCheck,
  Users,
} from "lucide-react";
import Footer from "../component/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "",
    submittedAt: new Date().toLocaleString()
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const finalData = { 
        ...formData, 
        submittedAt: new Date().toISOString() 
    };

    try {
      const response = await fetch("http://localhost:4004/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", submittedAt: new Date().toLocaleString() });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
    {/* Background changed to bg-[#020617] (Slate 950) */}
    <div className="min-h-screen bg-[#020617] pt-28 px-6 text-white">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Let’s Connect With Learnify
        </h1>
        <p className="mt-6 text-lg text-slate-400">
          Whether you have a question, need support, or want to collaborate,
          our team is always ready to help you grow.
        </p>
      </motion.div>

      {/* Info Cards - bg-slate-900 and subtle borders */}
      <div className="mt-14 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            icon: <Users className="w-6 h-6 text-blue-400" />,
            title: "10k+ Learners",
            desc: "Trusted by thousands of students worldwide",
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
            title: "Secure & Reliable",
            desc: "Your data and privacy are always protected",
          },
          {
            icon: <Clock className="w-6 h-6 text-purple-400" />,
            title: "24/7 Support",
            desc: "We are here whenever you need us",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl shadow-md p-6 text-center"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="font-bold text-slate-100">{item.title}</h3>
            <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-6">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-slate-400">brahmanalok51@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-green-400" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-slate-400">+91 9142316341</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-purple-400" />
              <div>
                <p className="font-semibold">Office Address</p>
                <p className="text-slate-400">
                  Learnify Technologies <br />
                  Greater Noida, India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-slate-300 mb-3">Follow Us</h3>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition text-slate-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-slate-100 mb-2">
            Send Us a Message
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            We usually respond within 24 hours.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder:text-slate-500"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder:text-slate-500"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder:text-slate-500"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
        
      </div>
      <Footer/>
    </div>
    
    </>
  );
}