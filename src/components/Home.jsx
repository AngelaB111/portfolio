import Typewriter from "typewriter-effect";
import { Section } from "./Section";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
        <div className="absolute -top-20 right-24 w-64 h-64 bg-on-primary-fixed/80 blur-[500px] rounded-full" />
        <div className="absolute bottom-20 -left-24 w-64 h-64 bg-on-primary-fixed/100 blur-[500px] rounded-full" />

        <div className="absolute bottom-20 w-64 h-64 bg-on-secondary-fixed-variant/40 blur-[500px] rounded-full" />

        <div className="relative max-w-2xl w-full bg-white/[0.03] backdrop-blur-lg border border-white/10 shadow-[10px_10px_20px_rgba(241,241,241,0.2)] rounded-2xl p-8 md:p-12  overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-on-primary/40 blur-[500px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-on-primary/40 blur-[500px] rounded-full" />

          <div className="flex items-center gap-3 mb-6 font-inter">
            <h2 className="text-xl font-bold  bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent tracking-tight">
              Angela Baaity
            </h2>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-500 font-medium uppercase tracking-tight">
                Available for collabs
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white leading-[1.2] tracking-tight min-h-[120px] md:min-h-[auto]">
              Full-Stack Developer building real-world apps with{" "}
              <span className="text-blue-400 inline-block">
                <Typewriter
                  options={{
                    strings: [
                      "AI-driven features.",
                      "scalable architecture.",
                      "seamless UX.",
                      "modern tech stacks.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </h1>
            <p className="text-base text-gray-400 font-light">
              I build performant, user-focused products from idea to deployment,
              ensuring technical precision at every layer of the stack.
              Leveraging modern tech for scalable solutions.
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            <Link
              to="/projects"
              className="px-6 py-2 bg-[#3b82f6] hover:bg-sky-900 text-white text-sm font-semibold rounded-lg transition-all shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </Link>

            <Link
              to="/journal"
              className="px-6 py-2 bg-transparent border border-yellow1/40 hover:border-yellow1/50 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(255,240,133,0.3)]"
            >
              View Certificates
            </Link>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
        </div>
      </div>
    </div>
  );
}
