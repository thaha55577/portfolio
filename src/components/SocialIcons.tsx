import React from 'react';
import { SocialLink } from '../types';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface SocialIconsProps {
  links: SocialLink[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
          aria-label={link.name}
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;