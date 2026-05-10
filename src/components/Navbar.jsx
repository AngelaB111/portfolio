import logo from "../images/logo.jpg";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 w-full z-50 
      bg-[#020617]/80 backdrop-blur-xl border-b border-white/10 
      shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    >
      <div className="flex justify-between font-inter items-center h-16 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-14 md:h-11 md:w-11 object-contain rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform hover:scale-105"
            />
          
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#020617] rounded-full"></span>
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
          <a 
            className="text-gray-400 text-sm font-medium hover:text-white transition-colors"
            href="#projects"
          >
            Projects
          </a>
      
          <a
            className="text-gray-400 text-sm font-medium hover:text-white transition-colors"
            href="#about"
          >
            Journal
          </a>
          <a
            className="bg-blue-600/10 text-blue-400 border border-blue-500/30 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>
        <button className="md:hidden text-gray-400 hover:text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
