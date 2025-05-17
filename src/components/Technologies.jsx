import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Technologies = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const techCategories = {
    'Frontend Development': {
      technologies: [
        { 
          name: 'React.js', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'A JavaScript library for building user interfaces',
          proficiency: 90,
          experience: '2+ years',
          projects: ['Portfolio Website', 'E-commerce Platform']
        },
        { 
          name: 'JavaScript', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'High-level, interpreted programming language',
          proficiency: 95,
          experience: '3+ years',
          projects: ['Web Applications', 'API Development']
        },
        { 
          name: 'HTML5', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Markup language for structuring web content',
          proficiency: 95,
          experience: '3+ years',
          projects: ['Responsive Websites', 'Web Applications']
        },
        { 
          name: 'CSS3', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Style sheet language for web design',
          proficiency: 90,
          experience: '3+ years',
          projects: ['Responsive Design', 'UI Components']
        },
        { 
          name: 'Tailwind CSS', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Utility-first CSS framework',
          proficiency: 85,
          experience: '1+ year',
          projects: ['Modern Web Applications', 'UI Development']
        }
      ]
    },
    'Backend Development': {
      technologies: [
        { 
          name: 'Node.js', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'JavaScript runtime for server-side development',
          proficiency: 85,
          experience: '2+ years',
          projects: ['REST APIs', 'Web Servers']
        },
        { 
          name: 'Python', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'High-level programming language',
          proficiency: 90,
          experience: '3+ years',
          projects: ['Data Analysis', 'Machine Learning']
        },
        { 
          name: 'Java', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Object-oriented programming language',
          proficiency: 80,
          experience: '2+ years',
          projects: ['Enterprise Applications', 'Android Development']
        },
        { 
          name: 'Express.js', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Web application framework for Node.js',
          proficiency: 85,
          experience: '2+ years',
          projects: ['REST APIs', 'Web Applications']
        },
        { 
          name: 'REST APIs', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Architectural style for web services',
          proficiency: 90,
          experience: '2+ years',
          projects: ['API Development', 'Microservices']
        }
      ]
    },
    'Database & Cloud': {
      technologies: [
        { 
          name: 'MongoDB', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'NoSQL database for modern applications',
          proficiency: 85,
          experience: '2+ years',
          projects: ['Web Applications', 'Data Storage']
        },
        { 
          name: 'MySQL', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Relational database management system',
          proficiency: 80,
          experience: '2+ years',
          projects: ['Data Management', 'Web Applications']
        },
        { 
          name: 'AWS', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Cloud computing platform',
          proficiency: 75,
          experience: '1+ year',
          projects: ['Cloud Infrastructure', 'Deployment']
        },
        { 
          name: 'Firebase', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Backend-as-a-Service platform',
          proficiency: 85,
          experience: '2+ years',
          projects: ['Real-time Applications', 'Authentication']
        },
        { 
          name: 'Docker', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Containerization platform',
          proficiency: 80,
          experience: '1+ year',
          projects: ['Application Deployment', 'Microservices']
        }
      ]
    },
    'AI & Machine Learning': {
      technologies: [
        { 
          name: 'TensorFlow', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Open-source machine learning framework',
          proficiency: 85,
          experience: '2+ years',
          projects: ['Deep Learning', 'Neural Networks']
        },
        { 
          name: 'PyTorch', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Deep learning framework',
          proficiency: 80,
          experience: '1+ year',
          projects: ['Machine Learning', 'Research']
        },
        { 
          name: 'Scikit-learn', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Machine learning library for Python',
          proficiency: 85,
          experience: '2+ years',
          projects: ['Data Analysis', 'ML Models']
        },
        { 
          name: 'OpenCV', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Computer vision library',
          proficiency: 80,
          experience: '1+ year',
          projects: ['Image Processing', 'Computer Vision']
        },
        { 
          name: 'NLP', 
          icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          description: 'Natural Language Processing',
          proficiency: 75,
          experience: '1+ year',
          projects: ['Text Analysis', 'Language Models']
        }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
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

  const filteredCategories = Object.entries(techCategories).reduce((acc, [category, { technologies }]) => {
    const filteredTechs = technologies.filter(tech => 
      tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tech.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredTechs.length > 0) {
      acc[category] = { technologies: filteredTechs };
    }
    return acc;
  }, {});

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 opacity-5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 opacity-5 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-12 text-center"
        >
          Technologies
        </motion.h2>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search technologies..."
              className="w-full px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-full text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors duration-300"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {Object.entries(filteredCategories).map(([category, { technologies }]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-6 shadow-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={techVariants}
                    whileHover="hover"
                    onClick={() => setSelectedTech(tech)}
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 cursor-pointer"
                  >
                    <div className="w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-2">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-sm text-green-400 text-center">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Technology Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTech(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-800 rounded-xl max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-2">
                      <img src={selectedTech.icon} alt={selectedTech.name} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                      {selectedTech.name}
                    </h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedTech(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-300">{selectedTech.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Proficiency</h4>
                    <div className="w-full bg-gray-700/50 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedTech.proficiency}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full"
                      />
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{selectedTech.proficiency}%</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Experience</h4>
                    <p className="text-gray-300">{selectedTech.experience}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Projects</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {selectedTech.projects.map((project, index) => (
                        <li key={index}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Technologies; 