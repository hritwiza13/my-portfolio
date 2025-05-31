import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Programming Languages': ['Python', 'Java', 'JavaScript', 'SQL', 'C++'],
  'Web Technologies': ['React.js', 'HTML5', 'CSS3', 'Node.js', 'Express.js'],
  'Data Analysis': ['Pandas', 'NumPy', 'Matplotlib', 'Tableau', 'Power BI'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux'],
  'Databases': ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'],
  'Tools & Others': ['JIRA', 'Postman', 'VS Code', 'Agile', 'REST APIs']
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 