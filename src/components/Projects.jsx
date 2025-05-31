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
  }
};

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React.js, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.com'
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'An interactive dashboard for analyzing and visualizing business metrics. Built with Python, Pandas, and Tableau.',
    technologies: ['Python', 'Pandas', 'Tableau', 'SQL', 'Power BI'],
    image: '/projects/dashboard.jpg',
    github: 'https://github.com/yourusername/dashboard',
    live: 'https://dashboard-demo.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['React.js', 'Firebase', 'Material-UI', 'Redux'],
    image: '/projects/taskmanager.jpg',
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://taskmanager-demo.com'
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      GitHub →
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 