import React from "react";
import coffee from "../images/coffee/coffeehome.jpg";
import mental from "../images/mental1.jpg";
import dashboard from "../images/mental/dashboard1.png";
import signin from "../images/mental/sign-in.png";
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

// ML Project Assets
import mlDash from "../images/ml/ml-dashboard.png";
import mlAnalysis from "../images/ml/analysis.png";
import mlAnalysis2 from "../images/ml/analysis2.png";
import mlConfusion from "../images/ml/confusion2.png";
import mlEval from "../images/ml/evaluation.png";
import plantthumb from "../images/plant/plantapp.jpg"
// Plant Project images
import plantHome from "../images/plant/home.png";
import plantDetails from "../images/plant/details.png";
import plantSplash from "../images/plant/plant-login.png";
import { FaReact, FaNodeJs, FaHtml5, FaJs, FaCss3Alt ,
  FaVectorSquare,} from "react-icons/fa";

import {
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiChartdotjs,
  SiFlutter,
  SiScikitlearn,
  SiPython, 
  SiPandas,
  SiMaterialdesign,
  SiDart, 
} from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { Designs } from "./Designs";

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
        signin,
      ],
      stats: {
        modules: "10+",
        dashboards: "1",
        aiFeatures: "4",
        userRoles: "3",
      },

      github: "https://github.com/AngelaBaaity/Silent-support",

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
        coffeeContact,
      ],

      stats: {
        platforms: "2",
        crudOperations: "4",
        Developers: "2",
        userAuthentication: "Yes",
      },

      github: "https://github.com/AngelaBaaity/React-coffee-store",

      liveDemo: "#",
    },

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
    isActive: true,
  },
  {
  id: "plant-shop",
  title: "Leaf & Bloom",
  subtitle: "Elegant Plant E-Commerce Mobile UI",
  category: "Mobile Application (Frontend)",
  year: "2026",
  status: "Completed",
  shortDescription:
    "A visually stunning Flutter mobile application for plant enthusiasts, featuring smooth navigation, category-based browsing, and detailed botanical information.",
  thumbnail: plantthumb, // Replace with your image variable
  techStack: [
    {
      name: "Flutter",
      icon: SiFlutter,
      color: "text-cyan-400",
    },
    {
      name: "Dart",
      icon: SiDart,
      color: "text-blue-500",
    },
    {
      name: "Material Design",
      icon: SiMaterialdesign,
      color: "text-blue-600",
    },
  ],

  details: {
    role: "Frontend Developer & UI Designer",
    duration: "1 week",
    team: "Individual Project",

    fullDescription:
      "Leaf & Bloom is a high-fidelity mobile UI concept developed using Flutter. The application focuses on a 'nature-first' aesthetic, providing users with a seamless experience from a beautiful splash welcome screen to a detailed plant exploration page. It showcases advanced Flutter layout techniques, custom icons, and responsive design tailored for a premium shopping experience.",

    problem:
      "Many e-commerce mobile interfaces feel cluttered and industrial. For a plant-based shop, the challenge was to create a UI that feels organic, airy, and highlights high-quality photography while remaining intuitive for the user.",

    solution:
      "I implemented a minimalist design with a soft color palette. Key features include a search-centric discovery home page and a details screen that uses clear typography and spacing to provide essential care information without overwhelming the user.",

    architecture: {
      frontend:
        "Built entirely with Flutter, leveraging the Widget tree for a highly modular and reusable component structure. The app uses custom themes to maintain brand consistency across all screens.",
      stateManagement:
        "Utilized local state management for UI interactions such as 'favorite' toggles and category switching.",
    },

    features: [
      "Custom splash screen with botanical aesthetics",
      "Interactive plant category filtering",
      "Dynamic search bar implementation",
      "Product details page with care level indicators",
      "Smooth screen transitions and navigation",
      "Responsive layout for various screen sizes",
      "Wishlist (Like) functionality UI",
      "Modern 'Add to Cart' interaction",
    ],

    challenges: [
      {
        title: "Layout Precision",
        solution:
          "Achieved the clean, overlapping image effects and custom card shapes using Flutter's Stack and ClipRRect widgets.",
      },
      {
        title: "Visual Hierarchy",
        solution:
          "Used varying font weights and a muted color palette to ensure the 'Add to Cart' button and plant images remain the primary focus.",
      },
    ],
    
    images: [
      plantSplash,  // plant-login.png
      plantHome,    // home.png
      plantDetails, // details.png
    ],

    stats: {
      screens: "3+",
      animations: "Custom",
      flutterVersion: "3.x",
      uiFidelity: "High",
    },

    github: "https://github.com/AngelaBaaity/plantapp-flutterApp", // Add your link here
    liveDemo: "#",
    
  },tags: [
      "Flutter",
      "Dart",
      "UI/UX",
      "Mobile Dev",
      "E-Commerce UI",
      "Green Tech",
    ],

    isFeatured: true,
    isActive: true,
}, 
  {
    id: "sms-spam",
    title: "SMS Guard",
    subtitle: "Machine Learning Spam Detection System",
    category: "Machine Learning / Data Science",
    year: "2025",
    status: "Finished",
    shortDescription:
      "A predictive model that classifies SMS messages as 'ham' or 'spam' using Natural Language Processing and ensemble learning techniques, achieving 98% accuracy.",
    thumbnail: mlDash, 
    techStack: [
      {
        name: "Python",
        icon: SiPython, // Standard for ML
        color: "text-blue-500",
      },
      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
        color: "text-orange-400",
      },
      {
        name: "Pandas",
        icon: SiPandas,
        color: "text-indigo-500",
      },
      {
        name: "TF-IDF",
        icon: FaVectorSquare,
        color: "text-green-400",
      },
    ],

    details: {
      role: "Machine Learning Engineer",
      duration: "1 week",
      team: "2",
      fullDescription:
        "SMS Guard is an automated solution designed to address the growing issue of SMS spam and potential fraudulent activities in mobile communication. The project utilizes a dataset of 5,572 labeled messages to train and compare two distinct classification models: Naive Bayes and Random Forest. By implementing a robust text-processing pipeline, the system can effectively distinguish between legitimate 'ham' communication and malicious 'spam' with high precision.",

      problem:
        "The proliferation of mobile communication has led to a significant increase in SMS spam, which negatively affects user experience and facilitates fraud. Traditional rule-based systems often lack the flexibility and accuracy required to keep up with evolving spam tactics.",

      solution:
        "Implemented a machine learning-based approach that automates the detection process. By training on a large corpus of labeled messages, the system learns to identify patterns and keywords associated with spam, providing a more efficient and accurate alternative to manual or rule-based filtering.",

      architecture: {
        preprocessing:
          "The raw text data underwent a rigorous cleaning process involving punctuation removal, tokenization, lowercasing, and the removal of common stopwords to focus on meaningful content.",
        vectorization:
          "Numerical feature extraction was performed using Term Frequency-Inverse Document Frequency (TF-IDF) to convert textual data into a format suitable for machine learning algorithms.",
        modeling:
          "Deployed a Naive Bayes Classifier for probabilistic text classification and a Random Forest Classifier to leverage ensemble learning for improved performance.",
      },

      features: [
        "Text Cleaning & Normalization Pipeline",
        "Tokenization and Stopword Removal",
        "TF-IDF Vectorization",
        "Naive Bayes Probabilistic Modeling",
        "Random Forest Ensemble Classification",
        "Performance Evaluation (Precision, Recall, F1-score)",
        "Confusion Matrix Visualization",
        "Comparative Model Analysis",
      ],
      challenges: [
        {
          title: "Optimizing Detection Accuracy",
          solution:
            "Evaluated multiple algorithms, ultimately determining that Naive Bayes provided a better balance with a higher recall and F1-score for spam detection.",
        },
        {
          title: "Minimizing False Negatives",
          solution:
            "Prioritized Naive Bayes' higher recall for spam (88%) to ensure fewer malicious messages were missed by the system.",
        },
      ],
      images: [
       mlDash,      
        mlAnalysis, 
        mlAnalysis2, 
        mlConfusion, 
        mlEval,     
      ],
      stats: {
        datasetSize: "5,572",
        maxAccuracy: "98%",
        spamRecall: "88%",
        modelsTrained: "2",
      },

      github: "https://github.com/AngelaBaaity/SMS-Spam-Detection-Python-machineLearning", // Add your repo link
      liveDemo: "#", 
    },

    tags: [
      "Machine Learning",
      "NLP",
      "Python",
      "Data Science",
      "Spam Detection",
      "Naive Bayes",
      "Random Forest",
    ],

    isFeatured: true,
    isActive: true,
  },
];

export function Projects({ preview = false }) {
  const navigate = useNavigate();
  const featuredProjects = projectsData.filter(
    (project) => project.isFeatured && project.isActive
  );
  const previewProjects = featuredProjects.filter((project) =>
    ["therapy", "coffee", "plant-shop"].includes(project.id)
  );

  const FeaturedProjectCard = ({ project }) => {
    return (
      <div
        onClick={() => navigate(`/project/${project.id}`)}
        className="shrink-0 w-[320px] rounded-3xl overflow-hidden border border-slate-700 bg-slate-900/80 shadow-[0_0_20px_rgba(15,23,42,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:border-blue-400 cursor-pointer"
      >
        <div className="h-64 w-full overflow-hidden relative">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="p-5 flex flex-col justify-between h-[240px]">
          <div>
            <h3 className="text-white text-xl font-black leading-tight mb-2">
              {project.title}
            </h3>
            <p className="text-blue-400 text-xs uppercase tracking-[0.2em] mb-3">
              {project.subtitle}
            </p>
            <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                >
                  <Icon className={`text-lg ${tech.color}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project }) => {
    return (
      <div
        onClick={() => navigate(`/project/${project.id}`)}
        className={`
        relative shrink-0
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
  if (preview) {
    return (
      <section className="bg-[#020617] py-24 overflow-hidden">
        <div className="px-8 md:px-20 mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-blue-400 text-sm uppercase tracking-[0.2em] mb-3">
              Featured
            </p>
            <h2 className="text-white text-4xl font-black">Featured Projects</h2>
            <p className="text-slate-400 mt-2 max-w-2xl">
              Swipe through a hand-picked selection of my top projects.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-slate-700 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            View All
          </Link>
        </div>

        <div className="px-8 md:px-20">
          <div className="overflow-x-auto overflow-y-hidden pb-4">
            <div className="flex gap-6 snap-x snap-mandatory">
              {previewProjects.map((project) => (
                <div key={project.id} className="snap-start">
                  <FeaturedProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#020617] min-h-screen py-24 overflow-hidden">
      {/* Header */}
      <div className="px-8 md:px-20 mb-12">
        <p className="text-blue-400 text-sm uppercase tracking-[0.2em] mb-3">
          Portfolio
        </p>

        <h2 className="text-white text-5xl font-black">Featured Projects</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-20 pb-10">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Designs/>
    </section>
  );
}
