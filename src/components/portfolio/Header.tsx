import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
}

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400 glitch-text">
            SHAIK.THAHA
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentSection === id
                    ? 'bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-gray-900/90 rounded-lg backdrop-blur-sm border border-cyan-500/20">
            <nav className="flex flex-col space-y-3">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentSection === id
                      ? 'bg-cyan-500/20 text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;