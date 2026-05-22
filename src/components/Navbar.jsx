import logo from "../images/logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#020617]/60 backdrop-blur-md border-b border-white/6 ring-1 ring-blue-600/6 shadow-[0_8px_30px_rgba(59,130,246,0.05)]"
    >
      <div className="flex justify-between items-center h-16 px-6 max-w-6xl mx-auto font-inter">
        <div className="flex items-center gap-4">
          {!isHome && (
            <Link
              to="/"
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              title="Back to Portfolio"
            >
              <FaArrowLeft size={20} />
            </Link>
          )}
          <div className="relative flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 object-contain rounded-full border border-white/10 shadow-[0_0_18px_rgba(59,130,246,0.08)] transition-transform hover:scale-105"
            />

            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#020617] rounded-full" />
          </div>

          <div className="hidden sm:flex flex-col border-l border-white/10 pl-4">
            <span className="text-white text-xs font-bold tracking-widest uppercase opacity-90">
              Portfolio
            </span>
            <span className="text-blue-400 text-[10px] font-medium tracking-tight leading-none">
              v2.026 // Full Stack
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/projects" className="group relative">
            <span className="text-gray-300 text-sm font-medium transition-colors group-hover:text-white">
              Projects
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full bg-blue-400 rounded transition-all duration-300" />
          </Link>

          <Link to="/journal" className="group relative">
            <span className="text-gray-300 text-sm font-medium transition-colors group-hover:text-white">
              Journal
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full bg-blue-400 rounded transition-all duration-300" />
          </Link>

          <motion.a
            whileHover={{ scale: 1.03 }}
            className="ml-2 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-[0_8px_40px_rgba(59,130,246,0.12)] hover:shadow-[0_12px_50px_rgba(59,130,246,0.18)] transition-all"
            href="#contact"
          >
            Get In Touch
          </motion.a>
        </div>
        <button className="md:hidden text-gray-400 hover:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </motion.nav>
  );
}
