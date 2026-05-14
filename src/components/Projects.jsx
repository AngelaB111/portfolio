import React from "react";
import coffee from "../images/coffee/coffeehome.jpg";
import mental from "../images/mental1.jpg";
import dashboard from "../images/mental/dashboard1.png"
import signin from "../images/mental/sign-in.png"
import analytics from "../images/mental/analytics.png";
import assessmentsResult from "../images/mental/assessments-result.png";
import assessments from "../images/mental/assessments.png";
import chatbot from "../images/mental/chatbot.png";
import credentials from "../images/mental/credentials.png";
import getReply from "../images/mental/get-reply.png";
import libraryAdmin from "../images/mental/Library-admin.png";
import library from "../images/mental/library.png";
import adminasses from "../images/mental/admin-assessments.png";
import privateMessage from "../images/mental/private-message .png";
import publicImg from "../images/mental/public.png";
import coffeeAbout from "../images/coffee/about.png";
import coffeeCart from "../images/coffee/cart.png";
import coffeeContact from "../images/coffee/contact.png";

import coffeemob from "../images/coffee/coffeemob.jpg";
import coffeemob1 from "../images/coffee/coffeemob1.jpg";
import coffeeDetails from "../images/coffee/details.png";
import coffeeLogin from "../images/coffee/login.png";
import coffeeMenu from "../images/coffee/menu.png";
import coffeeProfile from "../images/coffee/profile.png";
import coffeeSignup from "../images/coffee/signup.png";
import sendMessage from "../images/mental/send-message.png";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiPhp,
  SiMysql,
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

    year: "2025",

    status: "Finished",

    shortDescription:
      "Anonymous mental health support platform that combines AI assistance with therapist supervision to provide accessible emotional support.",

    thumbnail: mental,

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

      duration: "1 month",

      team: "1",

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
          "Integrated AI tools for chatbot conversations, message categorization, urgency detection, and AI-assisted therapist replies. Trained models on a combination of mental health support data and general conversational data to provide empathetic and contextually relevant responses while ensuring ethical considerations and user safety.",
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
images: [
    chatbot,
   dashboard,
  publicImg,
  library,
  assessments,
  privateMessage,
  
  assessmentsResult,
  sendMessage,
  getReply,
  
  libraryAdmin,
  adminasses,
  credentials,
  analytics,
  signin
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
      }, {
        name: "tailwind",
        icon: SiTailwindcss,
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

      duration: "2 weeks",

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
      images: [
    coffeeMenu,
    coffeeDetails,
    coffeeCart,
    coffeemob,
    coffeemob1,
    coffeeLogin,
    coffeeSignup,
    coffeeProfile,
    coffeeAbout,
    coffeeContact
        ],
        
        stats: {
          platforms: "2",
      crudOperations: "4",
      Developers: "2", 
      userAuthentication: "Yes",
    },

    github: "#",

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
  },
];

export function Projects() {
  const navigate = useNavigate();
const ProjectCard = ({ project }) => {
  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className={`
        relative shrink-0 snap-center
        w-[340px] md:w-[500px]
        min-h-[480px]
        rounded-3xl overflow-hidden
        group cursor-pointer
        transition-all duration-500
        backdrop-blur-xl
      bg-slate-900/70 border border-slate-700 hover:border-blue-400
      shadow-[0_0_15px_rgba(244,244,244,0.4)] 
      `}
    >
      {/* 1. Image Background/Top Section */}
      <div className="h-48 w-full overflow-hidden relative">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay to blend image into content */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      {/* 2. Content Section */}
      <div className="p-7 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-white text-2xl font-black leading-tight mb-1">
            {project.title}
          </h3>
          <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
            {project.subtitle}
          </p>
          <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* 3. Tech Stack Icons */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                title={tech.name}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md"
              >
                <Icon className={`text-xl ${tech.color}`} />
              </div>
            );
          })}
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
