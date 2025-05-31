import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
  const languagesData = [
    {
      name: "English",
      proficiency: "Fluent"
    },
    {
      name: "Hindi",
      proficiency: "Fluent"
    },
    {
      name: "Arabic",
      proficiency: "Beginner"
    },
    {
      name: "Japanese",
      proficiency: "Beginner"
    }
  ];

  return (
    <section id="languages" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 opacity-5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 opacity-5 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative text-white text-center">
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
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-12 text-center"
        >
          Languages
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {languagesData.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-6 shadow-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 text-left"
            >
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 mb-2">
                {lang.name}
              </h3>
              <p className="text-gray-300">Proficiency: {lang.proficiency}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Languages; 