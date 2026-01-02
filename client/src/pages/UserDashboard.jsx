import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar"
import {
  BookOpen,
  Code,
  Layout,
  PenTool,
  Layers,
  Youtube,
  Rocket,
} from "lucide-react";
import Footer from "../component/Footer";

export default function UserDashboard() {
  const categories = [
    { name: "HTML", icon: <BookOpen size={35} />, path: "/tutorial/html", color: "from-orange-500 to-yellow-500" },
    { name: "CSS", icon: <Layout size={35} />, path: "/tutorial/css", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: <Code size={35} />, path: "/tutorial/javascript", color: "from-yellow-500 to-amber-500" },
    { name: "React", icon: <Rocket size={35} />, path: "/tutorial/react", color: "from-sky-500 to-indigo-500" },
    { name: "Java", icon: <PenTool size={35} />, path: "/tutorial/java", color: "from-red-500 to-orange-500" },
    { name: "Tailwind CSS", icon: <Layers size={35} />, path: "/tutorial/tailwind", color: "from-cyan-500 to-blue-500" },
    { name: "Bootstrap", icon: <Layout size={35} />, path: "/tutorial/bootstrap", color: "from-purple-500 to-pink-500" },
  ];

  const popular = [
    { title: "HTML Full Guide", time: "2 hrs", path: "/tutorial/html" },
    { title: "Mastering CSS Grid", time: "1.5 hrs", path: "/tutorial/css" },
    { title: "JavaScript ES6+", time: "3 hrs", path: "/tutorial/javascript" },
    { title: "React Beginners Course", time: "4 hrs", path: "/tutorial/react" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 pt-24 px-6 pb-20">
      
      <Navbar/>
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 drop-shadow-md">
          Learn Anything. Improve Skills. Go Expert.
        </h1>
        <p className="mt-4 text-gray-600 text-lg md:text-xl">
          Choose from a range of tutorials and boost your development journey.
        </p>

    
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search tutorials..."
            className="w-full max-w-xl bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </motion.div>

     
      <div className="max-w-6xl mx-auto mt-14">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={cat.path}
                className={`bg-gradient-to-br ${cat.color} text-white p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-all cursor-pointer`}
              >
                <div className="mb-3">{cat.icon}</div>
                <h3 className="text-lg font-semibold">{cat.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Tutorials</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {popular.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center hover:shadow-xl transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm">⏳ {item.time}</p>
              </div>
              <Link to={item.path}>
                <Youtube size={35} className="text-red-500 hover:text-red-600" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto mt-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
        <p className="mt-3 text-lg text-indigo-100">
          Get started with beginner to advanced level tutorials today.
        </p>

        <Link
          to="/tutorials"
          className="inline-block mt-6 bg-white text-indigo-600 font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition"
        >
          Browse Tutorials
        </Link>
      </motion.div>
      <Footer/>
    </div>
  );
}
