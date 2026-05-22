import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaUserTie,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimes,
  FaSearchPlus,
} from "react-icons/fa";

import { programmingCasesData } from "./ProgrammingCases";

export function ProgrammingDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllImages, setShowAllImages] = useState(false);

  const item = useMemo(
    () => programmingCasesData.find((p) => String(p.id) === String(id)),
    [id]
  );

  if (!item) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Not Found</h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const visibleImages = item.details.gallery
    ? showAllImages
      ? item.details.gallery
      : item.details.gallery.slice(0, 3)
    : [];

  const mainFeatures = item.details.features?.slice(0, 6) || [];

  return (
    <div
      className={`min-h-screen bg-[#020617] text-slate-300 overflow-x-hidden ${
        selectedImage ? "overflow-hidden" : ""
      }`}
    >
      <main className="pt-10 max-w-7xl mx-auto px-6 lg:px-10 pb-32">
        <section className="grid lg:grid-cols-2 gap-20 items-center pt-16 mb-36">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs uppercase tracking-[0.2em]">
                {item.category}
              </span>
              <span
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] border ${
                  item.details.status === "Completed"
                    ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
                    : "bg-blue-500/10 border-blue-500/20 text-blue-300"
                }`}
              >
                {item.details.status}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
              {item.title}
            </h1>
            <p className="text-2xl text-cyan-300 font-medium mb-8">
              {item.subtitle}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
              {item.shortDescription}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-5 backdrop-blur-xl shadow-[0_0_5px_rgba(244,244,244,0.4)]">
                <FaCalendarAlt className="text-blue-400 mb-4" />
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-1">
                  Year
                </p>
                <p className="text-white font-semibold">{item.year}</p>
              </div>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-5 backdrop-blur-xl shadow-[0_0_5px_rgba(244,244,244,0.4)]">
                <FaLayerGroup className="text-cyan-300 mb-4" />
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-1">
                  Team
                </p>
                <p className="text-white font-semibold">{item.details.team}</p>
              </div>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-5 backdrop-blur-xl shadow-[0_0_5px_rgba(244,244,244,0.4)]">
                <FaUserTie className="text-blue-300 mb-4" />
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-1">
                  Role
                </p>
                <p className="text-white font-semibold">{item.details.role}</p>
              </div>
              <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-5 backdrop-blur-xl shadow-[0_0_5px_rgba(244,244,244,0.4)]">
                <FaCheckCircle className="text-cyan-300 mb-4" />
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-1">
                  Duration
                </p>
                <p className="text-white font-semibold">{item.details.duration}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {item.details.github && item.details.github !== "#" && (
                <a
                  href={item.details.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-4 rounded-2xl bg-white text-black font-semibold flex items-center gap-3 hover:scale-[1.03] transition duration-300 shadow-2xl"
                >
                  <FaGithub />
                  GitHub
                </a>
              )}
              {item.details.liveDemo && item.details.liveDemo !== "#" && (
                <a
                  href={item.details.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-7 py-4 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-blue-500/40 hover:bg-slate-800 transition duration-300 flex items-center gap-3"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="relative rounded-[36px] overflow-hidden border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mb-36">
          <div className="rounded-[36px] border border-white/10 bg-slate-900/80 backdrop-blur-xl p-10">
            <p className="text-blue-300 text-xs uppercase tracking-[0.3em] mb-5">
              Problem
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
            <p className="text-slate-400 leading-relaxed text-lg">{item.details.problem}</p>
          </div>
          <div className="rounded-[36px] border border-white/10 bg-slate-900/80 backdrop-blur-xl p-10">
            <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-5">Solution</p>
            <h2 className="text-3xl font-bold text-white mb-6">The Approach</h2>
            <p className="text-slate-400 leading-relaxed text-lg">{item.details.solution}</p>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-14">
            <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-4">Highlights</p>
            <h2 className="text-4xl font-black text-white">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-7 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl hover:border-blue-500/30 hover:-translate-y-1 transition duration-300"
              >
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-blue-400 text-sm" />
                </div>
                <p className="text-slate-300 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-10">
            <p className="text-blue-300 text-xs uppercase tracking-[0.3em] mb-4">Stack</p>
            <h2 className="text-4xl font-black text-white">Technologies Used</h2>
          </div>
          <div className="flex flex-wrap gap-5">
            {(item.techStack || []).map((t) => (
              <div
                key={t}
                className="px-6 py-4 rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl flex items-center gap-4 hover:border-cyan-500/30 hover:-translate-y-1 transition duration-300"
              >
                <span className="text-white font-medium">{t}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-36">
          <div className="mb-14 flex justify-between items-end">
            <div>
              <p className="text-cyan-300 text-xs uppercase tracking-[0.3em] mb-4">Showcase</p>
              <h2 className="text-4xl font-black text-white">Project Gallery</h2>
            </div>

            {item.details.gallery && item.details.gallery.length > 3 && (
              <button
                onClick={() => setShowAllImages(!showAllImages)}
                className="text-cyan-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest border-b border-cyan-300/30 pb-1"
              >
                {showAllImages ? "Show Less" : `View More (${item.details.gallery.length - 3})`}
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {visibleImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className="rounded-[32px] overflow-hidden border border-white/10 bg-slate-900/80 group cursor-zoom-in relative"
              >
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <FaSearchPlus className="text-white text-3xl" />
                </div>
                <div className="max-h-[400px] overflow-y-auto scrollbar-hide">
                  <img
                    src={image}
                    alt={`Case ${index + 1}`}
                    className="w-full h-auto block transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {item.details.additionalSection && (
          <section className="mb-36">
            <div className="mb-14">
              <p className="text-blue-300 text-xs uppercase tracking-[0.3em] mb-4">Notes</p>
              <h2 className="text-4xl font-black text-white">{item.details.additionalSection.title}</h2>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-slate-900/80 backdrop-blur-xl p-10">
              <p className="text-slate-400 leading-relaxed text-lg">{item.details.additionalSection.body}</p>
            </div>
          </section>
        )}
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl transition z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-full overflow-y-auto scrollbar-hide rounded-2xl shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-auto object-contain bg-slate-900"
            />
          </div>
        </div>
      )}
    </div>
  );
}

