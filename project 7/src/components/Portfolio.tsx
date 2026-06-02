import React, { useState, useEffect } from 'react';
import Header from './portfolio/Header';
import HeroSection from './portfolio/HeroSection';
import AboutSection from './portfolio/AboutSection';
import ProjectsSection from './portfolio/ProjectsSection';
import SkillsSection from './portfolio/SkillsSection';
import ContactSection from './portfolio/ContactSection';
import ParticleBackground from './portfolio/ParticleBackground';

const Portfolio: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Header currentSection={currentSection} />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Portfolio;