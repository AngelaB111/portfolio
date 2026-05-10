import React from "react";
import coffee from '../images/coffee1.png'; 
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
} from "react-icons/fa";

import {
  SiPhp, 
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";

// IMPORTANT: I am exporting the projects array so you can also import it 
// into your ProjectDetails.jsx file later to display the correct info!
export const projectsData = [
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
          name: "Php",
          icon:  SiPhp,
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

      isActive: false,
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

export function Projects() {
  const navigate = useNavigate();

  // =========================
  // PROJECT CARD
  // =========================
  const ProjectCard = ({ project }) => {
  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
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
            ? "bg-slate-900/80 border border-blue-500 "
            : "bg-slate-900/70 border border-slate-700 hover:border-slate-500 shadow-[0_0_45px_-10px_rgba(100,100,100,0.65)] hover:shadow-[0_0_45px_-10px_rgba(59,130,246,0.65)]"
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
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}