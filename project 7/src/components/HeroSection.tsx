import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Hi, I'm <span className="text-blue-600">{personalInfo.name.split(' ')[0,1]}</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">{personalInfo.title}</h2>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href={personalInfo.resumeUrl} 
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow"
                download="resume.png"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce bg-white p-2 rounded-full shadow-md text-blue-600 hover:text-blue-700 transition-colors"
            aria-label="Scroll Down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;