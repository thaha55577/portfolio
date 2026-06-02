import React from 'react';
import { socialLinks } from '../data/portfolio-data';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Shaik Thaha</h3>
            <p className="text-gray-400">Computer Science Student</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <SocialIcons links={socialLinks} />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Shaik Thaha . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;