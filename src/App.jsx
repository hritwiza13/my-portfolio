import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const particleParams = {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: '#00ffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    links: { enable: true, distance: 150, color: '#00ffff', opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, outModes: 'out' }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
      onClick: { enable: true, mode: 'push' }
    },
    modes: {
      repulse: { distance: 100 },
      push: { quantity: 4 }
    }
  },
  detectRetina: true
};

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-black">
      <Particles
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={particleParams}
      />
      <Navbar />
      <main className="pt-16">
        <Home />
        <About />
        <Education />
        <Internships />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
