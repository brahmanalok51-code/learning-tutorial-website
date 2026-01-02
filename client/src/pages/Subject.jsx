import { motion } from "framer-motion";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  BookOpen,
  Code,
  Cpu,
  Database,
  Brain,
  GraduationCap,
  Rocket,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function Subject() {
  const subjects = [
    {
      title: "Web Development",
      level: "Beginner → Advanced",
      description:
        "Build modern, responsive websites using HTML, CSS, JavaScript, React, Tailwind, and full-stack tools with hands-on projects.",
      icon: <Code className="w-10 h-10 text-blue-600" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      level: "Intermediate",
      description:
        "Learn Node.js, Express, REST APIs, authentication, and databases to build secure, scalable backend systems.",
      icon: <Database className="w-10 h-10 text-green-600" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Data Structures & Algorithms",
      level: "All Levels",
      description:
        "Improve logical thinking and coding skills using arrays, trees, graphs, and optimized algorithms.",
      icon: <BookOpen className="w-10 h-10 text-purple-600" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Artificial Intelligence",
      level: "Intermediate",
      description:
        "Understand intelligent agents, search strategies, and AI techniques used in real-world applications.",
      icon: <Cpu className="w-10 h-10 text-orange-600" />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Machine Learning",
      level: "Advanced",
      description:
        "Master supervised & unsupervised learning, neural networks, and build ML projects like disease detection.",
      icon: <Brain className="w-10 h-10 text-red-600" />,
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <>
      <Navbar />

      
      <section className="pt-28 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Learn Skills That Matter 
          </h1>
          <p className="mt-6 text-lg opacity-90">
            Carefully curated subjects designed to transform beginners into
            industry-ready professionals.
          </p>
        </motion.div>

       
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {[
            { icon: Users, value: "10K+", label: "Students" },
            { icon: GraduationCap, value: "50+", label: "Courses" },
            { icon: Rocket, value: "100+", label: "Projects" },
            { icon: BadgeCheck, value: "95%", label: "Success Rate" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
            >
              <stat.icon className="mx-auto mb-2 w-7 h-7" />
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
      <section className="bg-gray-50 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-gray-800">
            Explore Our Subjects
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Each subject includes structured lessons, projects, and interview
            preparation.
          </p>
        </motion.div>

        <div className="grid gap-10 mt-20 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white rounded-3xl shadow-lg p-8 overflow-hidden"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${subject.color}`}
              />
              <div className="flex items-center gap-4 mb-4">
                {subject.icon}
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100 font-semibold">
                  {subject.level}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                {subject.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {subject.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600"
              >
                Explore Curriculum →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

     
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 py-24 px-6 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-extrabold">
            Why Choose Learnify?
          </h2>
          <p className="mt-6 opacity-90 text-lg">
            We focus on skills, not just certificates.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-left">
            {[
              "Beginner Friendly Content",
              "Hands-On Projects",
              "Industry-Relevant Curriculum",
              "Interview & Career Support",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
              >
                <h3 className="font-bold text-xl">{point}</h3>
                <p className="mt-3 text-sm opacity-90">
                  Learn concepts clearly, apply them in real projects, and
                  prepare confidently for your career.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    
      <section className="py-24 bg-gray-50 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-gray-800">
            Ready to Start Learning?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Join Learnify today and build skills that open real opportunities.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg"
          >
            Get Started Now 
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
