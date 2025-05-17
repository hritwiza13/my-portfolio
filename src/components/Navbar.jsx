import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-cyan-400 text-xl font-bold">Portfolio</a>
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
      </div>
    </nav>
  );
};

export default Navbar; 