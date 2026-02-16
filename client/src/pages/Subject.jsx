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
  ExternalLink,
  School,
  LibraryBig
} from "lucide-react";

export default function Subject() {
  const subjects = [
    {
      title: "Web Development",
      level: "Beginner → Advanced",
      description: "Build modern, responsive websites using HTML, CSS, JavaScript, React, and Tailwind.",
      icon: <Code className="w-10 h-10 text-blue-400" />,
      color: "from-blue-500 to-cyan-500",
      link: "https://developer.mozilla.org/"
    },
    {
      title: "Backend Development",
      level: "Intermediate",
      description: "Learn Node.js, Express, REST APIs, and databases to build secure backend systems.",
      icon: <Database className="w-10 h-10 text-green-400" />,
      color: "from-green-500 to-emerald-500",
      link: "https://www.freecodecamp.org/learn/back-end-development-and-apis/"
    },
    {
      title: "Data Structures & Algorithms",
      level: "All Levels",
      description: "Improve logical thinking and coding skills using optimized algorithms and data logic.",
      icon: <BookOpen className="w-10 h-10 text-purple-400" />,
      color: "from-purple-500 to-pink-500",
      link: "https://www.geeksforgeeks.org/data-structures/"
    },
    {
      title: "Artificial Intelligence",
      level: "Intermediate",
      description: "Understand search strategies and AI techniques used in real-world applications.",
      icon: <Cpu className="w-10 h-10 text-orange-400" />,
      color: "from-orange-500 to-red-500",
      link: "https://www.coursera.org/specializations/natural-language-processing"
    },
    {
      title: "Machine Learning",
      level: "Advanced",
      description: "Master supervised learning, neural networks, and build complex predictive models.",
      icon: <Brain className="w-10 h-10 text-red-400" />,
      color: "from-red-500 to-rose-500",
      link: "https://www.coursera.org/learn/machine-learning"
    },
    {
      title: "Class 10th Academics",
      level: "Secondary School",
      description: "Comprehensive resources for Science, Maths, and Social Studies tailored for board exams.",
      icon: <School className="w-10 h-10 text-yellow-400" />,
      color: "from-yellow-500 to-orange-500",
      link: "https://www.khanacademy.org/"
    },
    {
      title: "Class 12th Academics",
      level: "Higher Secondary",
      description: "Specialized learning for Physics, Chemistry, and Advanced Mathematics for top performance.",
      icon: <LibraryBig className="w-10 h-10 text-indigo-400" />,
      color: "from-indigo-500 to-blue-500",
      link: "https://www.byjus.com/"
    },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Learn Skills That <br className="hidden md:block" /> Matter Most
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From coding the next big app to mastering your board exams, our curated tracks turn learners into industry-ready experts.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {[
            { icon: Users, value: "10K+", label: "Students", color: "text-blue-400" },
            { icon: GraduationCap, value: "50+", label: "Courses", color: "text-purple-400" },
            { icon: Rocket, value: "100+", label: "Projects", color: "text-emerald-400" },
            { icon: BadgeCheck, value: "95%", label: "Success Rate", color: "text-orange-400" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 text-center"
            >
              <stat.icon className={`mx-auto mb-4 w-8 h-8 ${stat.color}`} />
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-sm text-slate-500 uppercase tracking-widest mt-1 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-10 px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-white tracking-tight">Explore Our Subjects</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-slate-900/60 border border-slate-800 rounded-[2.5rem] p-10 transition-all hover:bg-slate-900/80 hover:border-slate-700 shadow-2xl"
            >
              {/* Gradient Border Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-5 rounded-[2.5rem] transition-opacity`} />
              
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-slate-800/50 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  {subject.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full bg-slate-800 text-slate-300 font-bold border border-slate-700">
                  {subject.level}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {subject.title}
              </h3>
              <p className="mt-5 text-slate-400 leading-relaxed text-base">
                {subject.description}
              </p>

              <motion.a
                href={subject.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="mt-8 inline-flex items-center gap-2 font-bold text-sm text-blue-500 uppercase tracking-wider group-hover:gap-4 transition-all"
              >
                External Curriculum <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl"
        >
            {/* Glass decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <h2 className="text-4xl font-extrabold text-white">Ready to Start Learning?</h2>
          <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto">
            Join thousands of students building their future with Learnify. From school boards to tech careers, we cover it all.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-12 py-5 rounded-2xl bg-white text-blue-900 font-bold text-lg shadow-xl"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}