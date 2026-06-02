import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationData } from '../data/portfolio-data';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 rounded-full"></div>
            
            {/* Education items */}
            {educationData.map((item, index) => (
              <div 
                key={item.id}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-auto md:w-1/2 md:pl-0' : 
                  'md:pl-12 md:text-left md:ml-auto md:mr-auto md:w-1/2 md:pr-0'
                } pl-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                  <GraduationCap size={16} className="text-white" />
                </div>
                
                {/* Content */}
                <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 md:border-l-0 ${
                  index % 2 === 0 ? 'md:border-r-4' : 'md:border-l-4'
                }`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                  <div className="flex items-center mb-3 text-gray-600 justify-start md:justify-start">
                    <Calendar size={16} className="mr-2" />
                    <span>{item.period}</span>
                  </div>
                  <p className="font-medium text-blue-600 mb-3">{item.institution}, {item.location}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;