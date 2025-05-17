import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Adjust stagger time as needed
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

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.div 
          variants={containerVariants} // Use container variants
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // transition={{ duration: 0.8, ease: "easeOut" }} // Removed, handled by containerVariants
          className="max-w-2xl mx-auto backdrop-blur-sm bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50"
        >
          <motion.div 
            variants={itemVariants} // Animate this div as an item
            className="text-center mb-12"
          >
            <p className="text-gray-300 mb-4">
              Location: Panna, Madhya Pradesh, India
            </p>
            <p className="text-gray-300 mb-4">
              Email: <a href="mailto:erhritwizagupta13@gmail.com" className="text-cyan-400 hover:text-cyan-300">erhritwizagupta13@gmail.com</a>
            </p>
          </motion.div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}> {/* Animate this form group */}
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}> {/* Animate this form group */}
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}> {/* Animate this form group */}
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              variants={itemVariants} // Animate the button
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </motion.button>
          </form>
          <motion.div 
            variants={itemVariants} // Animate this div as an item
            className="mt-12 flex justify-center space-x-6"
          >
            <a
              href="https://www.linkedin.com/in/hritwizaguptakvp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:erhritwizagupta13@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 