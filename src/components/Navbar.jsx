import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button type="button" className="text-cyan-400 text-xl font-bold" onClick={() => window.scrollTo(0, 0)}>Portfolio</button>
          
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            <a
              href="/my-portfolio/Hritwiza_Gupta.pdf" // Link to the correct resume file for GitHub Pages
              download
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-indigo-600 transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-md shadow-lg mt-2"
          >
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700">About</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700">Projects</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700">Contact</a>
            <a
              href="/my-portfolio/Hritwiza_Gupta.pdf" // Link to the correct resume file for GitHub Pages
              download
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-colors duration-300"
            >
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 