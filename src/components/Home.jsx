export function Home() {
  return (
    
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
  
      <div className="relative max-w-2xl w-full bg-white/[0.03] backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
        
        <div className="flex items-center gap-3 mb-6 font-inter">
          <h2 className="text-xl font-bold  bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent tracking-tight">Angela Baaity</h2>
          <span className="px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.2)]">
            AI Integration
          </span>
          
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Full-Stack Developer building real-world web & mobile apps with AI drivern features.
          </h1>
          <p className="text-base text-gray-400 font-light">
               I build performant, user-focused products from idea to deployment, ensuring technical precision at every layer of the stack. 
               Leveraging modern tech for scalable solutions.
          </p>
        </div>
        <div className="flex gap-3 mt-8">
          <button className="px-6 py-2 bg-[#3b82f6] hover:bg-sky-900 text-white text-sm font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            View Projects
          </button>
          
          <button className="px-6 py-2 bg-transparent border border-yellow1/40 hover:border-yellow1/50 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(255,240,133,0.3)]">
            Contact Me
          </button>
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
      </div>
    </div>
  );
}