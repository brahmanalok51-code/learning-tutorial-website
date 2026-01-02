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
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 pt-28 px-6">
     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Let’s Connect With Learnify
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Whether you have a question, need support, or want to collaborate,
          our team is always ready to help you grow.
        </p>
      </motion.div>

  
      <div className="mt-14 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: "10k+ Learners",
            desc: "Trusted by thousands of students worldwide",
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
            title: "Secure & Reliable",
            desc: "Your data and privacy are always protected",
          },
          {
            icon: <Clock className="w-6 h-6 text-purple-600" />,
            title: "24/7 Support",
            desc: "We are here whenever you need us",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-6 text-center"
          >
            <div className="flex justify-center mb-3">{item.icon}</div>
            <h3 className="font-bold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </div>

     
      <div className="mt-20 grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
     
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">brahmanalok51@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+91 9142316341</p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-purple-600" />
              <div>
                <p className="font-semibold">Office Address</p>
                <p className="text-gray-600">
                  Learnify Technologies <br />
                  Greater Noida, India
                </p>
              </div>
            </div>
          </div>

      
          <div className="mt-8">
            <h3 className="font-semibold text-gray-700 mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Send Us a Message
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            We usually respond within 24 hours.
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />

            <textarea
              placeholder="Write your message..."
              rows={5}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg"
            >
              Send Message 
            </motion.button>
          </form>
        </motion.div>
      </div>

     
      <div className="mt-24 max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Start Learning With Us?
        </h2>
        <p className="mt-4 text-white/90">
          Join Learnify today and take your skills to the next level.
        </p>
      </div>

  
    </div>
    <Footer/>
    </>
  );
}
