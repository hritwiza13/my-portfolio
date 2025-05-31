import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  loading: { scale: 0.95, opacity: 0.7 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const projectSections = {
  web: {
    title: "Web Development",
    description: "Full-stack web applications and modern web solutions",
    icon: "🌐"
  },
  mobile: {
    title: "Mobile Development",
    description: "Cross-platform mobile applications and native solutions",
    icon: "📱"
  },
  ai: {
    title: "AI & Machine Learning",
    description: "Intelligent systems and data-driven solutions",
    icon: "🤖"
  },
  cloud: {
    title: "Cloud & DevOps",
    description: "Scalable cloud solutions and automation",
    icon: "☁️"
  },
  blockchain: {
    title: "Blockchain",
    description: "Decentralized applications and smart contracts",
    icon: "⛓️"
  },
  analytics: {
    title: "Data Analytics",
    description: "Business intelligence and data analysis solutions",
    icon: "📊"
  }
};

const projects = [
  {
    title: "AI Fashion Stylist",
    description: "Developed an intelligent fashion recommendation system using computer vision and machine learning. The app analyzes user preferences, body type, and current trends to provide personalized outfit recommendations.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "React Native", "Node.js"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "ai",
    github: "https://github.com/hritwiza13/ai-fashion-stylist",
    demo: "https://ai-fashion-stylist-demo.com",
    features: [
      "Personalized Outfit Recommendations",
      "Style Analysis & Trend Detection",
      "Virtual Try-on Technology",
      "Seasonal Wardrobe Planning"
    ]
  },
  {
    title: "AI-Powered HR Chatbot",
    description: "Developed an intelligent HR chatbot using IBM Watson AI services for automated task handling and employee support. Implemented NLP capabilities for natural language understanding and response generation.",
    technologies: ["IBM Watson", "NLP", "Python", "REST APIs"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "ai",
    github: "https://github.com/hritwiza13/hr-chatbot",
    demo: "https://hr-chatbot-demo.com",
    features: [
      "Natural Language Processing",
      "Automated Task Handling",
      "Employee Support System",
      "Real-time Response Generation"
    ]
  },
  {
    title: "Cognitive Fraud Detection System",
    description: "Built an advanced anomaly detection system using IBM Cloud AI services. Implemented real-time monitoring and alerting for suspicious transactions with 95% accuracy.",
    technologies: ["IBM Cloud AI", "Python", "Machine Learning", "Data Analysis"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "ai",
    github: "https://github.com/hritwiza13/fraud-detection",
    demo: "https://fraud-detection-demo.com"
  },
  {
    title: "Sales Forecasting with IBM AutoAI",
    description: "Developed an AI-powered sales forecasting model using IBM AutoAI, achieving 15% improvement in prediction accuracy. Integrated with existing retail systems for automated inventory management.",
    technologies: ["IBM AutoAI", "Python", "Machine Learning", "Data Analytics"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "ai",
    github: "https://github.com/hritwiza13/sales-forecasting",
    demo: "https://sales-forecast-demo.com"
  },
  {
    title: "Millet Classification using CNN",
    description: "Built a deep learning model for automatic millet crop classification using Convolutional Neural Networks. Achieved 92% accuracy in identifying different millet varieties from images.",
    technologies: ["CNN", "TensorFlow", "Python", "Computer Vision"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "ai",
    github: "https://github.com/hritwiza13/millet-classification",
    demo: "https://millet-classifier-demo.com"
  },
  {
    title: "Management Information System",
    description: "Developed a comprehensive MIS platform for organizational data tracking and reporting. Implemented real-time analytics dashboard and automated reporting features.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "web",
    github: "https://github.com/hritwiza13/mis-platform",
    demo: "https://mis-platform-demo.com"
  },
  {
    title: "Face Expression Recognition",
    description: "Created a real-time facial expression recognition system using deep learning. Implemented emotion detection and analysis for user interaction applications.",
    technologies: ["Deep Learning", "OpenCV", "Python", "Computer Vision"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "ai",
    github: "https://github.com/hritwiza13/face-expression",
    demo: "https://face-expression-demo.com"
  },
  {
    title: "Automatic Speech Recognition",
    description: "Developed a real-time speech-to-text engine using machine learning and audio processing techniques. Implemented noise reduction and speaker diarization features.",
    technologies: ["Machine Learning", "Audio Processing", "Python", "NLP"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "ai",
    github: "https://github.com/hritwiza13/speech-recognition",
    demo: "https://speech-recognition-demo.com"
  },
  {
    title: "AI-driven Matrimony Platform",
    description: "Built a full-stack matrimony platform with AI-powered matchmaking. Implemented user authentication, profile management, and intelligent matching algorithms.",
    technologies: ["React.js", "Java", "Spring Boot", "MongoDB", "AI/ML"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "web",
    github: "https://github.com/hritwiza13/matrimony-platform",
    demo: "https://matrimony-platform-demo.com"
  },
  {
    title: "Smart Home Automation System",
    description: "Developed an IoT-based home automation system with real-time monitoring and control capabilities. Implemented secure API endpoints and mobile app integration.",
    technologies: ["Python", "REST APIs", "IoT", "Embedded Systems"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "system",
    github: "https://github.com/hritwiza13/smart-home",
    demo: "https://smart-home-demo.com",
    features: [
      "Real-time Monitoring",
      "Secure API Integration",
      "Mobile App Control",
      "Automated Device Management"
    ]
  },
  {
    title: "Cloud-Native Microservices Platform",
    description: "Built a scalable microservices architecture using Docker and Kubernetes. Implemented CI/CD pipelines and automated deployment workflows.",
    technologies: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "cloud",
    github: "https://github.com/hritwiza13/microservices-platform",
    demo: "https://microservices-demo.com",
    features: [
      "Container Orchestration",
      "CI/CD Pipeline",
      "Automated Deployment",
      "Scalable Architecture"
    ]
  },
  {
    title: "Real-time Data Analytics Dashboard",
    description: "Created a comprehensive analytics dashboard for real-time data visualization and monitoring. Integrated multiple data sources and implemented advanced filtering.",
    technologies: ["React.js", "Node.js", "MongoDB", "Power BI"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "web",
    github: "https://github.com/hritwiza13/analytics-dashboard",
    demo: "https://analytics-demo.com"
  },
  {
    title: "Predictive Maintenance System",
    description: "Developed an ML-based system for predicting equipment maintenance needs. Implemented data collection, processing, and visualization components.",
    technologies: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "ai",
    github: "https://github.com/hritwiza13/predictive-maintenance",
    demo: "https://maintenance-demo.com"
  },
  {
    title: "Secure API Gateway",
    description: "Built a secure API gateway with authentication, rate limiting, and request validation. Implemented monitoring and logging features.",
    technologies: ["Node.js", "Express.js", "JWT", "Redis"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "system",
    github: "https://github.com/hritwiza13/api-gateway",
    demo: "https://api-gateway-demo.com"
  },
  {
    title: "Business Intelligence Dashboard",
    description: "Developed a comprehensive BI dashboard for sales and marketing analytics. Implemented interactive visualizations, KPI tracking, and automated reporting features.",
    technologies: ["Power BI", "SQL", "Python", "Data Visualization"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "analytics",
    github: "https://github.com/hritwiza13/bi-dashboard",
    demo: "https://bi-dashboard-demo.com",
    features: [
      "Interactive Visualizations",
      "KPI Tracking",
      "Automated Reporting",
      "Real-time Analytics"
    ]
  },
  {
    title: "Customer Behavior Analysis Platform",
    description: "Built a data analytics platform for analyzing customer behavior patterns. Implemented segmentation, trend analysis, and predictive modeling for customer insights.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Tableau"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "analytics",
    github: "https://github.com/hritwiza13/customer-analytics",
    demo: "https://customer-analytics-demo.com",
    features: [
      "Customer Segmentation",
      "Trend Analysis",
      "Predictive Modeling",
      "Behavioral Insights"
    ]
  },
  {
    title: "Supply Chain Analytics System",
    description: "Created an analytics system for supply chain optimization. Implemented inventory forecasting, route optimization, and demand prediction models.",
    technologies: ["Python", "Machine Learning", "SQL", "Data Analysis"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "analytics",
    github: "https://github.com/hritwiza13/supply-chain-analytics",
    demo: "https://supply-chain-demo.com",
    features: [
      "Inventory Forecasting",
      "Route Optimization",
      "Demand Prediction",
      "Supply Chain Analytics"
    ]
  },
  {
    title: "Financial Market Analysis Tool",
    description: "Developed a tool for analyzing financial market trends and patterns. Implemented real-time data processing, technical indicators, and risk assessment models.",
    technologies: ["Python", "Pandas", "NumPy", "Data Visualization"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "analytics",
    github: "https://github.com/hritwiza13/market-analysis",
    demo: "https://market-analysis-demo.com",
    features: [
      "Real-time Data Processing",
      "Technical Indicators",
      "Risk Assessment",
      "Market Trend Analysis"
    ]
  },
  {
    title: "Healthcare Analytics Platform",
    description: "Built a platform for healthcare data analysis and patient outcome prediction. Implemented data integration, statistical analysis, and visualization components.",
    technologies: ["Python", "R", "SQL", "Machine Learning"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    category: "analytics",
    github: "https://github.com/hritwiza13/healthcare-analytics",
    demo: "https://healthcare-analytics-demo.com",
    features: [
      "Patient Outcome Prediction",
      "Data Integration",
      "Statistical Analysis",
      "Healthcare Visualization"
    ]
  }
];

const categories = ['all'];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleCategoryClick = (category) => {
    setFilter(category);
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleLinkClick = async (e, url, buttonId) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveButton(buttonId);
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening link:', error);
    } finally {
      setIsLoading(false);
      setActiveButton(null);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 opacity-5 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1, 
            y: 0,
            backgroundPosition: ['0% 50%', '100% 50%'] // Animate gradient position
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8, 
            ease: "easeOut",
            backgroundPosition: { // Animation specifically for backgroundPosition
              repeat: Infinity, 
              repeatType: "mirror", 
              duration: 5, // Duration of the gradient shift cycle
              ease: "linear"
            }
          }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-sm bg-gray-800/30 rounded-2xl p-6 shadow-2xl border border-gray-700/50"
        >
          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryClick(category)}
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                All Projects
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {filter === 'all' ? (
              // Show all sections when "All" is selected
              Object.entries(projectSections).map(([sectionKey, section]) => {
                const sectionProjects = projects.filter(project => project.category === sectionKey);
                if (sectionProjects.length === 0) return null;

                return (
                  <motion.div
                    key={sectionKey}
                    variants={itemVariants}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-4xl">{section.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                          {section.title}
                        </h3>
                        <p className="text-gray-400">{section.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {sectionProjects.map((project) => (
                        <ProjectCard
                          key={project.title}
                          project={project}
                          onClick={() => handleProjectClick(project)}
                          onLinkClick={handleLinkClick}
                          isLoading={isLoading}
                          activeButton={activeButton}
                        />
                      ))}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              // Show filtered projects
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredProjects.length === 0 ? (
                  <div className="text-white col-span-full text-center">
                    No projects found for this category.
                  </div>
                ) : (
                  filteredProjects.map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      onClick={() => handleProjectClick(project)}
                      onLinkClick={handleLinkClick}
                      isLoading={isLoading}
                      activeButton={activeButton}
                    />
                  ))
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
            onLinkClick={handleLinkClick}
            isLoading={isLoading}
            activeButton={activeButton}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, onClick, onLinkClick, isLoading, activeButton }) => (
  <motion.div
    variants={projectVariants}
    className="group backdrop-blur-sm bg-gray-800/30 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
    whileHover={{ y: -10, scale: 1.02 }}
    onClick={onClick}
  >
    <div className="relative h-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20"></div>
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-2">
        <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 text-xs bg-gray-700/50 text-gray-300 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
    <div className="p-3">
      <p className="text-gray-300 mb-3 text-sm line-clamp-2">
        {project.description}
      </p>
      <div className="flex gap-2">
        <ProjectButton
          label="GitHub"
          onClick={(e) => onLinkClick(e, project.github, `github-${project.title}`)}
          isLoading={isLoading && activeButton === `github-${project.title}`}
          variant="secondary"
        />
        <ProjectButton
          label="Live Demo"
          onClick={(e) => onLinkClick(e, project.demo, `demo-${project.title}`)}
          isLoading={isLoading && activeButton === `demo-${project.title}`}
          variant="primary"
        />
      </div>
    </div>
  </motion.div>
);

// Project Button Component
const ProjectButton = ({ label, onClick, isLoading, variant }) => (
  <motion.button
    onClick={onClick}
    variants={buttonVariants}
    initial="initial"
    whileHover="hover"
    whileTap="tap"
    animate={isLoading ? "loading" : "initial"}
    disabled={isLoading}
    className={`flex-1 px-4 py-2 rounded-full font-medium transition-all duration-300 text-center disabled:opacity-50 disabled:cursor-not-allowed ${
      variant === 'primary'
        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
        : 'bg-gray-700/50 text-white hover:bg-gray-600/50'
    }`}
  >
    {isLoading ? (
      <span className="flex items-center justify-center">
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading...
      </span>
    ) : (
      label
    )}
  </motion.button>
);

// Project Modal Component
const ProjectModal = ({ project, onClose, onLinkClick, isLoading, activeButton }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={e => e.stopPropagation()}
    >
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-900/50 rounded-full p-2 hover:bg-gray-900/80 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </div>
      <div className="p-6">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-4"
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-300 mb-6">
          {project.description}
        </p>
        <div className="space-y-6">
          <div>
            <motion.h4 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg font-semibold text-purple-400 mb-3"
            >
              Key Features
            </motion.h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <motion.h4 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg font-semibold text-purple-400 mb-3"
            >
              Technologies Used
            </motion.h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-400 rounded-full border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <ProjectButton
              label="View on GitHub"
              onClick={(e) => onLinkClick(e, project.github, `modal-github-${project.title}`)}
              isLoading={isLoading && activeButton === `modal-github-${project.title}`}
              variant="secondary"
            />
            <ProjectButton
              label="Live Demo"
              onClick={(e) => onLinkClick(e, project.demo, `modal-demo-${project.title}`)}
              isLoading={isLoading && activeButton === `modal-demo-${project.title}`}
              variant="primary"
            />
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default Projects; 