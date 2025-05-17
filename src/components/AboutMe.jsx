import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story' },
    { id: 'journey', label: 'Journey' },
    { id: 'passions', label: 'Passions' }
  ];

  const content = {
    story: {
      title: "Crafting Digital Experiences",
      description: "I'm a passionate full-stack developer with a keen eye for creating elegant solutions to complex problems. My journey in tech began with a curiosity about how things work, which evolved into a deep love for building innovative digital experiences.",
      highlights: [
        "Full-stack development expertise",
        "Problem-solving enthusiast",
        "Continuous learner",
        "Team collaborator"
      ]
    },
    journey: {
      title: "The Path Less Traveled",
      description: "My professional journey has been a fascinating blend of challenges and growth. From my first line of code to architecting complex systems, each step has shaped my approach to development and problem-solving.",
      timeline: [
        {
          year: "2023",
          title: "Senior Developer",
          description: "Leading development teams and architecting solutions"
        },
        {
          year: "2021",
          title: "Full Stack Developer",
          description: "Building scalable web applications and APIs"
        },
        {
          year: "2019",
          title: "Junior Developer",
          description: "Started my journey in web development"
        }
      ]
    },
    passions: {
      title: "Beyond the Code",
      description: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
      interests: [
        {
          title: "Open Source",
          description: "Contributing to meaningful projects",
          icon: "🌟"
        },
        {
          title: "Tech Community",
          description: "Sharing knowledge and mentoring",
          icon: "👥"
        },
        {
          title: "Learning",
          description: "Always exploring new technologies",
          icon: "📚"
        },
        {
          title: "Innovation",
          description: "Building the next big thing",
          icon: "💡"
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

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-5 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring the intersection of creativity and technology
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-8"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              variants={tabVariants}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === 'story' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-8 shadow-2xl border border-gray-700/50"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-6"
                >
                  {content.story.title}
                </motion.h3>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 mb-8 text-lg leading-relaxed"
                >
                  {content.story.description}
                </motion.p>
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {content.story.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20"
                    >
                      <p className="text-blue-400">{highlight}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'journey' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-8 shadow-2xl border border-gray-700/50"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-6"
                >
                  {content.journey.title}
                </motion.h3>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 mb-8 text-lg leading-relaxed"
                >
                  {content.journey.description}
                </motion.p>
                <motion.div 
                  variants={itemVariants}
                  className="space-y-6"
                >
                  {content.journey.timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex gap-6 p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20"
                    >
                      <div className="text-2xl font-bold text-blue-400">{item.year}</div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">{item.title}</h4>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'passions' && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-8 shadow-2xl border border-gray-700/50"
              >
                <motion.h3 
                  variants={itemVariants}
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-6"
                >
                  {content.passions.title}
                </motion.h3>
                <motion.p 
                  variants={itemVariants}
                  className="text-gray-300 mb-8 text-lg leading-relaxed"
                >
                  {content.passions.description}
                </motion.p>
                <motion.div 
                  variants={itemVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {content.passions.interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20"
                    >
                      <div className="text-3xl mb-4">{interest.icon}</div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-2">{interest.title}</h4>
                      <p className="text-gray-300">{interest.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutMe; 