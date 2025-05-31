import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Tech Solutions Inc.',
    period: 'June 2023 - Present',
    description: [
      'Developed and maintained web applications using React.js and Node.js',
      'Implemented RESTful APIs and integrated with various databases',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Participated in code reviews and implemented best practices'
    ]
  },
  {
    title: 'Data Analyst Intern',
    company: 'Data Insights Co.',
    period: 'January 2023 - May 2023',
    description: [
      'Analyzed large datasets using Python and SQL to extract meaningful insights',
      'Created interactive dashboards using Tableau for business stakeholders',
      'Automated data processing workflows to improve efficiency',
      'Presented findings and recommendations to senior management'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <span className="text-blue-600 font-medium">{exp.period}</span>
                </div>
                <h4 className="text-lg text-gray-600 mb-4">{exp.company}</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
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

export default Experience; 