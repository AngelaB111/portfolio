import React from "react";
import dunkin from "../images/design/dunkin.png";
import dunkin1 from "../images/design/dunkin2.png";

import dipndip from "../images/design/dipndip.png";
import dipndip1 from "../images/design/dipndip1.png";
export const cases = [
  {
    id: "dunkin",
    title: "Dunkin landing Page",
    subtitle: "Modern hero + product sections",
    description:
      "Refreshed layout, typography scale, and CTA hierarchy for better clarity and conversion.",
    tags: ["UI/UX", "React", "Tawilwind CSS"],
    github: "https://github.com/AngelaBaaity/dunkin",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImg: {
      dunkin,
    },
    afterImg: {
      dunkin1,
    },
  },
  {
    id: "Dip-n-Dip",
    title: "Landing Page",
    subtitle: "Modern Design",
    description:
      "Simplified navigation, improved spacing, and enhanced contrast for faster scanning.",
    tags: ["UI/UX", "React", "Tawilwind CSS"],
    github: "https://github.com/AngelaBaaity/dip",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImg: dipndip,
    afterImg: dipndip1,
  },
];
export function Designs() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      {/* Page top padding to account for fixed navbar */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-on-primary-fixed/80 blur-[500px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-on-secondary-fixed-variant/40 blur-[500px] rounded-full" />

          <div className="relative bg-white/[0.03] backdrop-blur-lg border border-white/10 shadow-[10px_10px_20px_rgba(241,241,241,0.2)] rounded-3xl p-6 md:p-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-on-primary/40 blur-[500px] rounded-full" />
            <div className="absolute -bottom-28 -left-24 w-72 h-72 bg-on-primary/40 blur-[500px] rounded-full" />

            <div className="relative">
              <p className="text-blue-400 text-sm uppercase tracking-[0.2em] mb-3">
                Web Design
              </p>
              <h1 className="text-white font-black text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Before & After Showcase
              </h1>
              <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
                A modern, visual walkthrough of my website redesigns—layout,
                typography, and interaction patterns tuned for clarity and
                polish.
              </p>
            </div>
          </div>
        </div>

        {/* Cases */}
        <div className="relative max-w-6xl mx-auto mt-12">
          <div className="flex items-end justify-between gap-4 mb-8 px-1">
            <div>
              <p className="text-blue-400 text-sm uppercase tracking-[0.2em]">
                Redesign Cases
              </p>
              <h2 className="text-2xl sm:text-3xl font-black mt-2">
                Improvements you can see
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((c) => (
              <article
                key={c.id}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_0_30px_rgba(15,23,42,0.4)] hover:border-blue-400/30 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black text-white">
                        {c.title}
                      </h3>
                      <p className="text-blue-400 text-sm font-semibold mt-1">
                        {c.subtitle}
                      </p>
                    </div>

                    <div className="hidden sm:flex flex-wrap justify-end gap-2">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full text-[12px] font-semibold bg-white/5 border border-white/10 text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {c.description}
                  </p>

                  <div className="mt-4">
                    {c.github && (
                      <a
                        href={c.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm font-semibold text-gray-100 hover:bg-white/10 transition"
                      >
                        View on GitHub
                      </a>
                    )}
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/20">
                      <div className="px-4 py-2 flex items-center justify-between bg-white/5 border-b border-white/10">
                        <span className="text-xs uppercase tracking-wider font-bold text-slate-100">
                          {c.beforeLabel}
                        </span>
                        <span className="text-xs text-red-300 font-semibold">
                          Needs clarity
                        </span>
                      </div>
                      <img
                        src={
                          c.beforeImg.dunkin ? c.beforeImg.dunkin : c.beforeImg
                        }
                        alt={`${c.title} - before`}
                        className="w-full h-auto object-fit transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950/20">
                      <div className="px-4 py-2 flex items-center justify-between bg-white/5 border-b border-white/10">
                        <span className="text-xs uppercase tracking-wider font-bold text-slate-100">
                          {c.afterLabel}
                        </span>
                        <span className="text-xs text-emerald-300 font-semibold">
                          Improved UX
                        </span>
                      </div>
                      <img
                        src={
                          c.afterImg.dunkin1 ? c.afterImg.dunkin1 : c.afterImg
                        }
                        alt={`${c.title} - after`}
                        className="w-full h-auto object-fit transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="mt-5 sm:hidden flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-[12px] font-semibold bg-white/5 border border-white/10 text-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-blue-500/70 via-emerald-400/50 to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
