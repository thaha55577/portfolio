import React, { useEffect, useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-data';

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = personalInfo.title.toUpperCase();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Cursor blink effect
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, [fullText]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 pt-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            {/* Main title with glitch effect */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glitch-text leading-tight">
              {personalInfo.name.split(' ')[0]}
              <br />
              <span className="text-cyan-400">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            {/* Typewriter subtitle */}
            <div className="text-xl md:text-2xl text-cyan-300 mb-8 font-mono h-8">
              {text}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </div>

            {/* Bio with fade-in animation */}
            <p className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed fade-in-up">
              {personalInfo.bio}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start items-center mb-12">
              <button onClick={scrollToContact} className="cyber-button primary">
                <span>INITIALIZE CONTACT</span>
                <div className="cyber-button-glow"></div>
              </button>
              
              <a 
                href={personalInfo.resumeUrl} 
                download="resume.png"
                className="cyber-button secondary"
              >
                <Download size={20} />
                <span>DOWNLOAD RESUME</span>
                <div className="cyber-button-glow"></div>
              </a>
            </div>
          </div>
          
          {/* Profile Image with Cyberpunk Frame */}
          <div className="flex-1 flex justify-center z-10 mb-8 md:mb-0">
            <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.3)] group-hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] transition-all duration-500">
                <img 
                  src="/profile.jpg" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-400 opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-400 opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors animate-bounce z-20"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="circuit-lines"></div>
      </div>
    </section>
  );
};

export default HeroSection;