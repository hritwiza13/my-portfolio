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
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6">
              I am a passionate Software Engineer and Data Analyst with a strong foundation in both technical and analytical skills. My journey in technology has equipped me with expertise in software development, data analysis, and problem-solving.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a keen eye for detail and a drive for excellence, I strive to create efficient, scalable solutions that make a real impact. I enjoy working on challenging projects that push me to learn and grow as a professional.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding or analyzing data, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 