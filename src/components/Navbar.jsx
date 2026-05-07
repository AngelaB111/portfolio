export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background backdrop-blur-md border-b border-slate-700 shadow-lg">
      <div className="flex justify-between font-inter items-center h-16 px-6 max-w-6xl mx-auto">
        <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent">
          Angela B
        </span>

        <div className="hidden md:flex gap-8 items-center ">
          <a
            className="text-on-surface-variant text-base font-medium hover:text-inverse-surface transition-colors duration-200"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-on-surface-variant text-base font-medium hover:text-inverse-surface transition-colors duration-200"
            href="#skills"
          >
            Technical Stack
          </a>
          <a
            className="text-on-surface-variant text-base font-medium hover:text-inverse-surface transition-colors duration-200"
            href="#about"
          >
            Journal
          </a>
          <a
            className="bg-surface-tint text-on-primary px-4 py-2 rounded-lg font-medium hover:bg-blue-700 hover:text-white transition-all duration-200"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>
        <button className="md:hidden text-on-surface-variant-variant hover:text-inverse-surface transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
