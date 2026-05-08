import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Theme management
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Scroll progress
    const handleScrollProgress = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? 'bg-gray-900 bg-[radial-gradient(#ffffff33_1px,#1a1a2e_1px)]'
          : 'bg-white bg-[radial-gradient(#00000033_1px,#ffffff_1px)]'
      } bg-[size:20px_20px]`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <section id="home">
          <Hero darkMode={darkMode} />
        </section>
        
        <section id="education">
          <Education darkMode={darkMode} />
        </section>
        
        <section id="skills">
          <Skill darkMode={darkMode} />
        </section>
        
        <section id="projects">
          <Project darkMode={darkMode} />
        </section>
        
        <section id="contact">
          <Contact darkMode={darkMode} />
        </section>
        
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}