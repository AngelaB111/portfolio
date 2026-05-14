import React from "react";
import coffee from "../images/coffee1.png";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaHtml5,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiPhp,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiChartdotjs,
  SiFlutter,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";

// IMPORTANT: I am exporting the projects array so you can also import it
// into your ProjectDetails.jsx file later to display the correct info!

// IMPORTANT: I am exporting the projects array so you can also import it
// into your ProjectDetails.jsx file later to display the correct info!
export const projectsData = [
  {
    id: "therapy",

    title: "Silent Support",

    subtitle: "AI-Powered Mental Health Support Platform",

    category: "Full Stack Web Application",

    year: "2026",

    status: "In Development",

    shortDescription:
      "Anonymous mental health support platform that combines AI assistance with therapist supervision to provide accessible emotional support.",

    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    techStack: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        color: "text-yellow-400",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "text-indigo-400",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-400",
      },
      {
        name: "Chart.js",
        icon: SiChartdotjs,
        color: "text-pink-400",
      },
    ],

    details: {
      role: "Full Stack Developer",

      duration: "Senior Year Project",

      team: "Individual Project",

      fullDescription:
        "Silent Support is a web-based mental health support platform designed to provide free, anonymous, and accessible emotional assistance for individuals who may hesitate to seek traditional therapy services. The platform enables users to anonymously submit emotional support requests, communicate with an AI-powered chatbot, complete mental health self-assessments, and access educational resources without registration or exposing personal information. Licensed therapists can securely access a protected dashboard to review messages, prioritize urgent cases, and provide responses with optional AI-generated assistance.",

      problem:
        "Many individuals experiencing stress, anxiety, depression, or emotional crises avoid seeking help because traditional mental health platforms often require payments, collect personal information, involve long waiting times, and lack anonymity. These barriers prevent many people from seeking emotional support when they need it most.",

      solution:
        "Silent Support provides a fully anonymous, free-to-use, AI-assisted platform that combines therapist supervision with intelligent automation. The system reduces emotional barriers and improves accessibility by allowing users to seek help privately while enabling therapists to efficiently manage and prioritize cases through AI-powered tools.",

      architecture: {
        frontend:
          "Built using HTML, CSS, and JavaScript with a responsive and emotionally calming UI focused on accessibility and ease of use.",

        backend:
          "Developed with PHP and MySQL to manage authentication, anonymous messaging, therapist workflows, AI integrations, and secure data storage.",

        aiIntegration:
          "Integrated AI tools for chatbot conversations, message categorization, urgency detection, and AI-assisted therapist replies.",
      },

      features: [
        "Anonymous messaging system",
        "AI-powered emotional support chatbot",
        "Therapist dashboard with analytics",
        "Urgent message detection",
        "AI-assisted therapist replies",
        "Secure reply retrieval using Message ID and Access Code",
        "Mental health self-assessments",
        "Public anonymous Q&A posts",
        "Educational digital library",
        "Responsive dashboard analytics using Chart.js",
        "Authentication and protected admin routes",
        "Book and assessment management system",
      ],

      workflow: [
        "User submits anonymous message",
        "System generates Message ID and Access Code",
        "AI analyzes and categorizes message",
        "Urgent messages are flagged for therapists",
        "Therapist reviews and responds",
        "User retrieves reply securely",
      ],

      challenges: [
        {
          title: "Maintaining User Anonymity",
          solution:
            "Implemented a Message ID and Access Code retrieval system instead of requiring user accounts.",
        },
        {
          title: "Prioritizing Critical Cases",
          solution:
            "Integrated AI-based urgency detection to automatically flag high-risk messages.",
        },
        {
          title: "Reducing Therapist Workload",
          solution:
            "Added AI-assisted reply generation that therapists can review and edit before sending.",
        },
      ],

      futureImprovements: [
        "Multi-therapist support",
        "Voice-to-text messaging",
        "Real-time notifications for urgent cases",
        "More advanced interactive assessments",
        "Mobile application version",
        "Multilingual support",
      ],

      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",

        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop",
      ],

      stats: {
        modules: "10+",
        dashboards: "1",
        aiFeatures: "4",
        userRoles: "3",
      },

      github: "#",

      liveDemo: "#",
    },

    tags: [
      "Full Stack",
      "AI Integration",
      "Mental Health",
      "Dashboard",
      "PHP",
      "MySQL",
      "Anonymous Platform",
    ],

    isFeatured: true,

    isActive: true,
  },

  {
    id: "coffee",

    title: "Coffee O'Clock",

    subtitle: "Coffee Store Mobile & Web Application",

    category: "Full Stack E-Commerce App",

    year: "2025",

    status: "Completed",

    shortDescription:
      "Modern coffee store application built for both mobile and web platforms with authentication, product management, cart functionality, and responsive UI.",

    thumbnail: coffee,

    techStack: [
      {
        name: "Flutter",
        icon: SiFlutter,
        color: "text-cyan-400",
      },
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-300",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-gray-300",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-400",
      },
    ],

    details: {
      role: "Backend Developer & Deployment",

      duration: "University Project",

      team: "2 Developers",

      fullDescription:
        "Coffee O'Clock is a modern coffee store application developed for both web and mobile platforms. The project allows users to browse coffee products, explore item details with size-based pricing, manage accounts, add products to cart, and interact with the store through a responsive and visually polished interface. The application was designed to simulate a real-world digital ordering experience for a local coffee business.",

      problem:
        "Small coffee shops often rely on traditional in-store ordering systems that lack digital accessibility and modern customer convenience. The project aimed to create a centralized platform where customers can browse products, manage accounts, and interact with the store online through both mobile and web interfaces.",

      solution:
        "The system provides a responsive and user-friendly ordering experience through a modern full-stack architecture. Users can create accounts, browse categorized products, view detailed item information, manage their cart, and contact the business directly through the platform.",

      architecture: {
        frontend:
          "The web frontend was built using React.js, while the mobile application was developed with Flutter to provide a smooth cross-platform experience with modern UI components and responsive layouts.",

        backend:
          "The backend was developed using Node.js and Express.js to handle API routing, authentication, CRUD operations, and database communication.",

        database:
          "MySQL database hosted on Railway was used to manage users, products, product variations, and contact messages.",
      },

      features: [
        "Cross-platform mobile and web application",
        "Modern responsive coffee store UI",
        "User authentication system",
        "Login and signup functionality",
        "User profile editing",
        "Product browsing and filtering",
        "Coffee categories and menu system",
        "Product details with size-based pricing",
        "Shopping cart functionality",
        "Contact and communication page",
        "Backend CRUD operations",
        "REST API integration",
        "Cloud-hosted database",
        "Backend deployment on Render",
      ],

      workflow: [
        "User browses coffee menu",
        "Products are fetched from backend API",
        "User views detailed product information",
        "Selected products are added to cart",
        "User manages account information",
        "Contact messages are stored in database",
      ],
    },

    challenges: [
      {
        title: "Cross-Platform Consistency",
        solution:
          "Designed similar UI/UX principles across Flutter mobile app and React web application for a unified brand experience.",
      },

      {
        title: "Dynamic Product Variations",
        solution:
          "Implemented relational database tables to support multiple product sizes and pricing variations.",
      },

      {
        title: "Backend Deployment",
        solution:
          "Used Railway for MySQL hosting and Render for backend deployment to simulate a production-ready environment.",
      },
    ],

    futureImprovements: [
      "Online payment integration",
      "Order checkout system",
      "Admin dashboard for inventory management",
      "Order history tracking",
    ],

    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop",
    ],

    stats: {
      platforms: "2",
      crudOperations: "4",
      databaseTables: "4",
      userAuthentication: "Yes",
    },

    github: "https://github.com/AngelaB111/Flutter-Coffee-store",

    liveDemo: "#",
    tags: [
      "Flutter",
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Mobile App",
      "Web App",
      "E-Commerce",
    ],

    isFeatured: true,

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

        <h2 className="text-white text-5xl font-black">Featured Projects</h2>
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
