import { motion } from "framer-motion";
import { Palette, Layout, Layers, Code, Pencil } from "lucide-react";

export default function CssLearningPage() {
  const topics = [
    {
      title: "Introduction to CSS",
      icon: <Palette size={28} />,
      content:
        "CSS (Cascading Style Sheets) is used to style HTML elements. It controls colors, layouts, fonts, spacing, and responsive design to create visually attractive websites.",
    },
    {
      title: "Selectors",
      icon: <Code size={28} />,
      content:
        "CSS selectors target HTML elements for styling. Common selectors include class (.class), id (#id), element (p, div), and attribute selectors.",
    },
    {
      title: "Layouts & Flexbox",
      icon: <Layout size={28} />,
      content:
        "CSS layout systems like Flexbox and Grid help align elements horizontally and vertically. Flexbox is widely used for responsive UI designs.",
    },
    {
      title: "Box Model",
      icon: <Layers size={28} />,
      content:
        "Every element follows the CSS box model consisting of margin, border, padding, and content. Understanding the box model is essential for layout design.",
    },
  ];

  const practice = [
    "Create a webpage and apply different text colors and background colors.",
    "Design a card using padding, margin, border, and box-shadow.",
    "Build a responsive navigation bar using Flexbox.",
    "Create a grid layout displaying multiple images in rows and columns.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-200 p-6 md:p-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-400">
          CSS Learning Hub
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
          Master CSS styling, layouts, responsive design, and animations to
          create beautiful and professional websites.
        </p>
      </motion.div>

      {/* Topics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700 hover:shadow-xl transition"
          >
            <div className="text-pink-400 mb-3">{topic.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {topic.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {topic.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Example Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-pink-400 mb-4">
          Basic CSS Example
        </h2>
        <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}`}
        </pre>
      </motion.div>

      {/* Practice Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 bg-gradient-to-r from-pink-700 to-purple-700 text-white rounded-3xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Pencil /> Practice Exercises
        </h2>
        <ul className="space-y-3 text-lg">
          {practice.map((item, i) => (
            <li key={i} className="bg-white/10 p-3 rounded-lg">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
