import React from "react";
import { useParams, Link } from "react-router-dom"; 
import { projectsData } from "./Projects";
export function ProjectDetail() {
  const { id } = useParams(); 
   const project = projectsData.find((p) => p.id === id);


  if (!project) return <div className="text-white">Project not found</div>;

  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Top Navigation / Back Button */}
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition">
          ← Back to Portfolio
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        {/* Header Section */}
        <header className="mt-12 mb-16">
          <p className="text-blue-400 text-xs uppercase tracking-[0.3em] mb-4 font-bold">
            Featured Case Study
          </p>
          <h1 className="text-white text-6xl font-black mb-6 tracking-tight">
            {project.title}: {project.subtitle}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            {project.details.fullDescription}
          </p>
          
          <div className="flex gap-4 mt-8">
            {project.techStack.map((tech) => (
              <span key={tech.name} className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg text-xs font-mono">
                # {tech.name}
              </span>
            ))}
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl mb-24">
          <img src={project.thumbnail} alt="Hero" className="w-full h-full object-cover" />
        </div>

        {/* Problem & Strategy Grid */}
        <section className="grid md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-white text-2xl font-bold mb-6">Problem Statement</h2>
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
              <p className="text-slate-400 leading-relaxed mb-6">
                Engineering teams faced significant bottlenecks during synchronization...
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm italic">
                  <span className="text-orange-500">○</span> High latency in asset propagation.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-white text-2xl font-bold mb-6">Technical Strategy</h2>
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <span className="text-blue-400 font-mono text-xs">01.</span>
                <h3 className="text-white font-bold mt-2">Granular Delta Sync</h3>
                <p className="text-sm text-slate-500 mt-2">Reduced bandwidth usage by 85%.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome Metrics */}
        <section className="border-t border-slate-800 pt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-black text-blue-500">92%</p>
            <p className="text-xs uppercase tracking-widest mt-2 text-slate-500">Reduction in Sync Time</p>
          </div>
          <div>
            <p className="text-5xl font-black text-yellow-500">0.0%</p>
            <p className="text-xs uppercase tracking-widest mt-2 text-slate-500">Data Loss</p>
          </div>
          <div>
            <p className="text-5xl font-black text-white">12ms</p>
            <p className="text-xs uppercase tracking-widest mt-2 text-slate-500">P99 Latency</p>
          </div>
        </section>
      </main>
    </div>
  );
}