import React from 'react';

const Education = () => (
  <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 text-center">
        Education
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">B.Tech in Computer Science & Engineering</h3>
          <p className="text-gray-300 mb-1">Mody University</p>
          <p className="text-gray-400 text-sm">2022 – 2025</p>
        </div>
        <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">12th Grade</h3>
          <p className="text-gray-300 mb-1">School Name</p>
          <p className="text-gray-400 text-sm">2020 – 2021</p>
        </div>
        <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Diploma</h3>
          <p className="text-gray-300 mb-1">Institution Name</p>
          <p className="text-gray-400 text-sm">2019 – 2022</p>
        </div>
        <div className="bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-2">10th Grade</h3>
          <p className="text-gray-300 mb-1">School Name</p>
          <p className="text-gray-400 text-sm">2018 – 2019</p>
        </div>
      </div>
    </div>
  </section>
);

export default Education; 