import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";


export default function TutorialNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [tutorialPopup, setTutorialPopup] = useState(false);

  const tutorialLinks = [
    { name: "HTML Tutorial", path: "/tutorial/html" },
    { name: "CSS Tutorial", path: "/tutorial/css" },
    { name: "JavaScript Tutorial", path: "/tutorial/javascript" },
    { name: "React Tutorial", path: "/tutorial/react" },
    { name: "Java Tutorial", path: "/tutorial/java" },
    { name: "Tailwind Tutorial", path: "/tutorial/tailwind" },
    { name: "Bootstrap Tutorial", path: "/tutorial/bootstrap" },
  ];

  const navLinks = [
    { name: "Home", path: "/userDashboard" },
    { name: "Tutorials", popup: true },
    { name: "Subjects", path: "/subject" },
    { name: "Contact", path: "/contact" },
    { name: "Buycourse", path: "/payment" },
  ];

  return (
    <>
     
      <nav className="w-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

          <Link to="/userDashboard" className="text-3xl font-extrabold text-white">
            Learnify
          </Link>

       
          <div className="hidden md:flex space-x-8">
            {navLinks.map((item) => (
              <div key={item.name} className="relative group">
                <motion.div whileHover={{ scale: 1.1 }}>
                  {item.popup ? (
                    <button
                      onClick={() => setTutorialPopup(!tutorialPopup)}
                      className="text-white text-lg font-medium flex items-center gap-1 hover:text-yellow-300"
                    >
                      {item.name}
                      <ChevronDown size={18} />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-white text-lg font-medium hover:text-yellow-300"
                      onClick={() => setTutorialPopup(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>

                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
              </div>
            ))}
          </div>

         
          <button onClick={() => setOpenMenu(true)} className="md:hidden text-white">
            <Menu size={30} />
          </button>
        </div>
      </nav>

     
      <AnimatePresence>
        {tutorialPopup && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl p-6 w-72 z-50"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-4">Tutorials</h3>

            {tutorialLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setTutorialPopup(false)}
                className="block p-2 rounded-lg text-gray-700 hover:bg-blue-100"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed top-0 left-0 w-72 h-full bg-white shadow-xl z-50 p-6"
          >
            <button
              onClick={() => setOpenMenu(false)}
              className="absolute right-4 top-4"
            >
              <X size={28} />
            </button>

            <h2 className="text-2xl font-bold text-blue-600 mt-6">
              Learnify Menu
            </h2>

            {navLinks.map((item) => (
              <div key={item.name} className="mt-4">
                {item.popup ? (
                  <>
                    <button
                      onClick={() => setTutorialPopup(!tutorialPopup)}
                      className="w-full flex justify-between text-lg font-semibold"
                    >
                      {item.name}
                      <ChevronDown />
                    </button>

                    {tutorialPopup &&
                      tutorialLinks.map((t) => (
                        <Link
                          key={t.name}
                          to={t.path}
                          onClick={() => {
                            setOpenMenu(false);
                            setTutorialPopup(false);
                          }}
                          className="block ml-4 mt-2 text-gray-600"
                        >
                          {t.name}
                        </Link>
                      ))}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setOpenMenu(false)}
                    className="text-lg font-semibold text-gray-700"
                  >
                    {item.name}
                  </Link>
                )}
                <hr className="mt-3" />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      
    </>
  );
}
