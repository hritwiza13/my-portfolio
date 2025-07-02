import React from 'react';
import { motion } from 'framer-motion';

const internships = [
  {
    role: "Data Science Intern",
    company: "FLIMPA Milan Pvt Ltd (Remote)",
    duration: "Dec 2024 – Jan 2025",
    bullets: [
      "Developed a React.js-based frontend and a Java-powered backend for an AI-driven Matrimony platform integrating real-time analytics and IBM Watson AI.",
      "Automated email responses and built interactive dashboards using Power BI to enhance data-driven decision-making."
    ]
  },
  {
    role: "Trainee",
    company: "Regex Software Services, Rajasthan",
    duration: "Jun 2024 – Sep 2024",
    bullets: [
      "Designed and deployed AI-based Face Expression Recognition and Speech-to-Text models.",
      "Applied computer vision and NLP techniques to enhance AI-based applications."
    ]
  },
  {
    role: "Intern",
    company: "Hindalco Industries Limited, Silvassa",
    duration: "Aug 2023",
    bullets: [
      "Automated manufacturing plant data workflows, improving efficiency by reducing manual effort by 10+ hours per week.",
      "Developed real-time analytics dashboards using SQL, Python, and Power BI to improve operational insights."
    ]
  }
];

const Internships = () => {
  return (
    <section id="internships" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-5 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12 text-center"
        >
          Internships
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 gap-6">
            {internships.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-sm bg-gray-800/30 rounded-xl p-6 shadow-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  {intern.role}
                </h3>
                <p className="text-gray-300 mb-1">{intern.company}</p>
                <p className="text-cyan-400 mb-2">{intern.duration}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {intern.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships; 