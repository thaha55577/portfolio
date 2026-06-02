import React from 'react';
import { skillsData } from '../data/portfolio-data';

const SkillsSection: React.FC = () => {
  // Group skills by category
  const technicalSkills = skillsData.filter(skill => skill.category === 'technical');
  const softSkills = skillsData.filter(skill => skill.category === 'soft');
  const languageSkills = skillsData.filter(skill => skill.category === 'language');
  
  const renderSkill = (skill: typeof skillsData[0]) => {
    return (
      <div key={skill.id} className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-gray-700 font-medium">{skill.name}</span>
          <span className="text-gray-500 text-sm">{skill.level * 20}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level * 20}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Technical Skills
              </h3>
              {technicalSkills.map(renderSkill)}
            </div>
            
            {/* Soft Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Soft Skills
              </h3>
              {softSkills.map(renderSkill)}
            </div>
            
            {/* Language Skills */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Languages
              </h3>
              {languageSkills.map(renderSkill)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;