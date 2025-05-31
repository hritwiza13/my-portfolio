import React from 'react';

const Certifications = () => (
  <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 text-center">
        Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:shadow-cyan-500/20 transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Programming in Java</h3>
          <p className="text-gray-300 mb-1">Great Learning</p>
          <p className="text-gray-400 text-sm">Issued: February 2024</p>
        </div>
        <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:shadow-cyan-500/20 transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Walmart USA Software Engineering</h3>
          <p className="text-gray-300 mb-1">Forage</p>
          <p className="text-gray-400 text-sm">Issued: September 2024</p>
        </div>
        <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:shadow-cyan-500/20 transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">JP Morgan Chase Cybersecurity</h3>
          <p className="text-gray-300 mb-1">Forage</p>
          <p className="text-gray-400 text-sm">Issued: November 2024</p>
        </div>
        <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:shadow-cyan-500/20 transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Google Analytics Certification</h3>
          <p className="text-gray-300 mb-1">Google</p>
          <p className="text-gray-400 text-sm">Issued: August 2024</p>
        </div>
        <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:shadow-cyan-500/20 transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">IBM Artificial Intelligence Analyst</h3>
          <p className="text-gray-300 mb-1">IBM</p>
          <p className="text-gray-400 text-sm">Issued: November 2024</p>
        </div>
      </div>
    </div>
  </section>
);

export default Certifications; 