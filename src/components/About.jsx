import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const profileImage = process.env.PUBLIC_URL + '/assets/images/WhatsApp Image 2024-07-29 at 23.09.42_89dc6e65.jpg';

  const skills = {
    'Programming & Scripting': {
      items: ['Python', 'Java', 'SQL', 'JavaScript', 'Shell Scripting', 'MATLAB'],
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png'
    },
    'System Design & Architecture': {
      items: ['Software & Hardware Integration', 'Embedded Systems', 'API Development'],
      icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png'
    },
    'Web Development': {
      items: ['React.js', 'Node.js', 'Express.js', 'REST APIs'],
      icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721725.png'
    },
    'Database Management': {
      items: ['SQL', 'MongoDB', 'MySQL', 'Firebase'],
      icon: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png'
    },
    'Development Tools & DevOps': {
      items: ['Git', 'Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Azure'],
      icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png'
    },
    'AI/ML & Data Science': {
      items: ['Deep Learning', 'Computer Vision', 'NLP', 'Power BI', 'Tableau'],
      icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
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

  const skillVariants = {
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
      backgroundColor: 'rgba(6, 182, 212, 0.3)',
      transition: {
        duration: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwLTIuMjA5IDEuNzkxLTQgNC00czQgMS43OTEgNCA0LTEuNzkxIDQtNCA0LTQtMS43OTEtNC00eiIgZmlsbD0iI2N5YW4iIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            opacity: 1, 
            y: 0,
            backgroundPosition: ['0% 50%', '100% 50%']
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8, 
            ease: "easeOut",
            backgroundPosition: {
              repeat: Infinity, 
              repeatType: "mirror", 
              duration: 5,
              ease: "linear"
            }
          }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 text-center"
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Container for Photo */}
            <div className="flex flex-col items-center gap-4">
              {/* Profile Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg flex-shrink-0"
              >
                <motion.img 
                  src={profileImage}
                  alt="Profile"
                  initial={{ opacity: 0, scale: 0.8, y: -30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Error loading image');
                    e.target.src = '/assets/images/profile.jpg';
                  }}
                />
              </motion.div>
            </div>
            
            {/* Professional Summary */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Software Engineer skilled in Python, Java, SQL, JavaScript, React.js, and Cloud Computing. 
              Passionate about system architecture, automation, and software-hardware integration. 
              Strong problem-solving and analytical abilities with experience in backend development, 
              networking, and DevOps. Currently pursuing B.Tech in Computer Science & Engineering at Mody University.
            </motion.p>
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <motion.h3 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6"
            >
              Technical Expertise
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, { items, icon }]) => (
                <motion.div 
                  key={category} 
                  variants={itemVariants}
                  className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-6 shadow-lg border border-gray-700/50 hover:border-cyan-500/50 transition-colors duration-300"
                  whileHover={{ x: 10, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 p-2 mr-4"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <motion.img src={icon} alt={category} className="w-full h-full object-contain" variants={iconVariants} />
                    </motion.div>
                    <motion.h4 
                      className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      variants={itemVariants}
                    >
                      {category}
                    </motion.h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <motion.span
                        key={skill}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full cursor-default border border-cyan-500/20 hover:border-cyan-500/50"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 