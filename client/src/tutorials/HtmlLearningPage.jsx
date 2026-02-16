import { motion } from "framer-motion";
import { BookOpen, Code, Layers, Globe, ExternalLink, Pencil } from "lucide-react";

export default function HtmlLearningPage() {
  const topics = [
    {
      title: "Introduction to HTML",
      icon: <BookOpen size={28} />,
      content:
        "HTML (HyperText Markup Language) forms the structure of every webpage. It organizes headings, paragraphs, buttons, forms, and media elements to display meaningful web content.",
    },
    {
      title: "HTML Elements & Tags",
      icon: <Code size={28} />,
      content:
        "HTML elements use tags like <h1>, <p>, <img>, <a>, and <button>. These tags define the layout, style hooks, and behavior of webpage content.",
    },
    {
      title: "HTML Page Structure",
      icon: <Layers size={28} />,
      content:
        "A proper HTML document includes <!DOCTYPE html>, <html>, <head>, and <body>. This ensures browsers interpret and render the content correctly.",
    },
    {
      title: "Links, Media & Forms",
      icon: <Globe size={28} />,
      content:
        "Use HTML to create hyperlinks, images, videos, and user input forms. These interactive features make webpages functional and dynamic.",
    },
  ];

  const resources = [
    { title: "W3Schools HTML Tutorial", link: "https://www.w3schools.com/html/" },
    { title: "MDN HTML Documentation", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { title: "HTML npm Packages", link: "https://www.npmjs.com/search?q=html" },
  ];

  const practice = [
    "Create a webpage containing your name as a heading and a paragraph about yourself.",
    "Add an image and hyperlink to your favorite website.",
    "Design a simple contact form using input, label, and button elements.",
    "Create a small portfolio page using headings, lists, and images.",
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
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-400">
          HTML Interactive Learning Hub
        </h1>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
          Learn HTML fundamentals with theory, examples, practice tasks, and
          curated resources. This page helps beginners move step-by-step toward
          building real websites.
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
            <div className="text-indigo-400 mb-3">{topic.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {topic.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {topic.content}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Code Example */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-700"
      >
        <h2 className="text-2xl font-bold text-indigo-400 mb-4">
          Basic HTML Template Example
        </h2>
        <pre className="bg-black text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>`}
        </pre>
      </motion.div>

      {/* Practice Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-3xl shadow-xl p-8"
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

      {/* Resources Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-bold text-indigo-400 mb-6 text-center">
          Recommended Learning Resources
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {resources.map((res, i) => (
            <a
              key={i}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-500 hover:scale-105 transition"
            >
              {res.title}
              <ExternalLink size={18} />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
