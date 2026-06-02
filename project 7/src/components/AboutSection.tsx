import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I'm a dedicated computer science student with a passion for solving complex problems using technology. 
            My academic journey has equipped me with a strong foundation in various programming languages, 
            algorithms, and software development methodologies. I enjoy working on projects that challenge 
            me to think creatively and apply my technical skills to create innovative solutions.
          </p>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Beyond my technical abilities, I value collaboration and believe in the power of diverse perspectives 
            in problem-solving. I'm constantly seeking opportunities to learn from others and share my knowledge. 
            My goal is to leverage technology to make a positive impact on society while continuing to grow as a 
            computer scientist and innovator.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="flex items-center p-4 rounded-lg bg-gray-50 shadow-sm">
              <div className="mr-4 bg-blue-100 p-3 rounded-full text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                <p className="text-gray-800">{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 rounded-lg bg-gray-50 shadow-sm">
              <div className="mr-4 bg-blue-100 p-3 rounded-full text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-800 hover:text-blue-600 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center p-4 rounded-lg bg-gray-50 shadow-sm">
              <div className="mr-4 bg-blue-100 p-3 rounded-full text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <a href={`tel:${personalInfo.phone}`} className="text-gray-800 hover:text-blue-600 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;