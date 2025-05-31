import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Mody University",
      year: "2022 - 2025",
      details: "Currently pursuing with focus on AI/ML and Web Development"
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Govt. Polytechnic Panna",
      year: "2019 - 2022",
      details: "Completed with focus on Computer Science and Engineering"
    },
    {
      degree: "12th Grade",
      institution: "NIOS School",
      year: "2018 - 2019",
      details: "Completed from National Institute of Open Schooling (NIOS) Board with a focus on Physics, Chemistry, Mathematics, and Biology"
    },
    {
      degree: "10th Grade",
      institution: "NIOS School",
      year: "2020 - 2021",
      details: "Completed from National Institute of Open Schooling (NIOS) Board with distinction"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
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
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-12 text-center"
        >
          Education
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-6 shadow-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 mb-1">{edu.institution}</p>
                <p className="text-cyan-400 mb-2">{edu.year}</p>
                <p className="text-gray-400">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 