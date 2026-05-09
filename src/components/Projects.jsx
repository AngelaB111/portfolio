import React, { useState } from "react";
import coffee from '../images/coffee1.png'; 
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
} from "react-icons/fa";

import {
   SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export function Projects() {
  // =========================
  // PROJECT DATA
  // =========================
  const projects = [
    {
      id: "alpha",
      title: "Project Alpha",
      subtitle: "SaaS Dashboard",

      shortDescription:
        "Real-time analytics platform for subscription businesses.",

      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",

      techStack: [
        {
          name: "React",
          icon: FaReact,
          color: "text-cyan-400",
        },
        {
          name: "Node.js",
          icon: FaNodeJs,
          color: "text-green-500",
        },
        {
          name: "MongoDB",
          icon:  SiMysql,
          color: "text-green-400",
        },
      ],

      details: {
        fullDescription:
          "A complete SaaS analytics dashboard with revenue tracking, customer retention metrics, and real-time reporting.",

        images: [
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        ],

        features: [
          "Authentication system",
          "Stripe subscription integration",
          "Admin dashboard",
          "Responsive charts",
        ],

        github: "#",
        liveDemo: "#",
      },

      isActive: false,
    },

    {
      id: "beta",
      title: "Project Beta",
      subtitle: "Coffee'O'Clock",

      shortDescription:
        "coffee store ",

      thumbnail:
        coffee,

      techStack: [
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "text-white",
        },
        {
          name: "Firebase",
          icon:  SiMysql,
          color: "text-yellow-400",
        },
        {
          name: "Tailwind",
          icon: SiTailwindcss,
          color: "text-cyan-400",
        },
      ],

      details: {
        fullDescription:
          "A modern AI-powered commerce platform delivering personalized product recommendations and customer insights.",

        images: [
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1200&auto=format&fit=crop",
        ],

        features: [
          "AI recommendations",
          "Real-time analytics",
          "Mobile-first design",
          "Product search",
        ],

        github: "#",
        liveDemo: "#",
      },

      isActive: true,
    },

    {
      id: "gamma",
      title: "Project Gamma",
      subtitle: "AI Support Assistant",

      shortDescription:
        "AI chatbot platform for customer support and automation.",

      thumbnail:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",

      techStack: [
        {
          name: "Python",
          icon: FaPython,
          color: "text-yellow-300",
        },
        {
          name: "React",
          icon: FaReact,
          color: "text-cyan-400",
        },
        {
          name: "Figma",
          icon: FaFigma,
          color: "text-pink-400",
        },
      ],

      details: {
        fullDescription:
          "An AI-driven support assistant with intelligent recommendations and automated workflows.",

        images: [
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1200&auto=format&fit=crop",
        ],

        features: [
          "AI chat assistant",
          "Custom workflows",
          "Support ticket system",
          "Smart automation",
        ],

        github: "#",
        liveDemo: "#",
      },

      isActive: false,
    },
  ];

  // =========================
  // SELECTED PROJECT
  // =========================
  const [selectedProject, setSelectedProject] = useState(null);

  // =========================
  // PROJECT CARD
  // =========================
  const ProjectCard = ({ project }) => {
  return (
    <div
      onClick={() => setSelectedProject(project)}
      className={`
        relative shrink-0 snap-center
        w-[340px] md:w-[500px]
        min-h-[420px]
        rounded-3xl overflow-hidden
        p-7
        flex flex-col justify-between
        cursor-pointer
        transition-all duration-300
        backdrop-blur-xl
        ${
          project.isActive
            ? "bg-slate-900/80 border border-blue-500 shadow-[0_0_45px_-10px_rgba(59,130,246,0.65)]"
            : "bg-slate-900/70 border border-slate-700 hover:border-slate-500"
        }
      `}
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 blur-3xl" />
      </div>

      {/* TOP CONTENT */}
      <div className="relative z-10">
        <h3 className="text-white text-3xl font-black leading-tight">
          {project.title}
        </h3>

        <h4 className="text-white text-3xl font-black leading-tight">
          {project.subtitle}
        </h4>

        <p className="text-slate-400 text-sm mt-4 max-w-[70%] leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      {/* BOTTOM SECTION */}
     <div className="relative z-10 mt-8 flex justify-between items-end gap-6">
        {/* TECH STACK */}
        <div className="flex gap-3">
          {project.techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
                  w-14 h-14 rounded-2xl
                  bg-black/40
                  border border-white/10
                  flex items-center justify-center
                  backdrop-blur-md
                "
              >
                <Icon className={`text-3xl ${tech.color}`} />
              </div>
            );
          })}
        </div>

        {/* IMAGE SECTION */}
    <div
  className="
    w-[220px]
    h-[150px]
    rounded-2xl
    overflow-hidden
    border border-white/10
    shadow-2xl
    bg-slate-800
    shrink-0
  "
>
  <img
    src={project.thumbnail}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
      </div>
    </div>
  );
};
  return (
    <section className="bg-[#020617] min-h-screen py-24 overflow-hidden">
      {/* Header */}
      <div className="px-8 md:px-20 mb-12">
        <p className="text-blue-400 text-sm uppercase tracking-[0.2em] mb-3">
          Portfolio
        </p>

        <h2 className="text-white text-5xl font-black">
          Featured Projects
        </h2>
      </div>

      {/* Scrollable Projects */}
      <div
        className="
          flex gap-8 overflow-x-auto
          snap-x snap-mandatory
          px-8 md:px-20 pb-10
          hide-scrollbar
        "
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/70 backdrop-blur-sm
            flex items-center justify-center
            p-6
          "
        >
          <div
            className="
              bg-[#0f172a]
              border border-slate-700
              rounded-3xl
              max-w-4xl w-full
              max-h-[90vh]
              overflow-y-auto
              p-8
            "
          >
            {/* Close */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setSelectedProject(null)}
                className="
                  text-slate-400 hover:text-white
                  text-sm
                "
              >
                Close
              </button>
            </div>

            {/* Main Image */}
            <img
              src={selectedProject.thumbnail}
              alt={selectedProject.title}
              className="
                w-full h-[320px]
                object-cover rounded-2xl
                mb-8
              "
            />

            {/* Info */}
            <h2 className="text-white text-4xl font-bold">
              {selectedProject.title}
            </h2>

            <p className="text-slate-400 mt-4 leading-relaxed">
              {selectedProject.details.fullDescription}
            </p>

            {/* Features */}
            <div className="mt-8">
              <h3 className="text-white text-xl font-semibold mb-4">
                Features
              </h3>

              <div className="grid md:grid-cols-2 gap-3">
                {selectedProject.details.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      bg-slate-800
                      border border-slate-700
                      rounded-xl
                      p-4 text-slate-300
                    "
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-10">
              <h3 className="text-white text-xl font-semibold mb-4">
                Gallery
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {selectedProject.details.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className="
                      rounded-2xl
                      h-[220px]
                      w-full
                      object-cover
                    "
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}