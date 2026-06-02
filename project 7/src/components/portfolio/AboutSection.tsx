import React from 'react';
import { Brain, Code, Zap, GraduationCap, Award } from 'lucide-react';
import { personalInfo, educationData, experienceData } from '../../data/portfolio-data';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI RESEARCH',
      description: 'Exploring machine learning algorithms and neural network architectures'
    },
    {
      icon: Code,
      title: 'SOFTWARE DEVELOPMENT',
      description: 'Building intelligent applications with modern programming languages'
    },
    {
      icon: Zap,
      title: 'INNOVATION',
      description: 'Creating cutting-edge solutions for real-world problems'
    },
    {
      icon: GraduationCap,
      title: 'CONTINUOUS LEARNING',
      description: 'Always expanding knowledge in emerging technologies and AI trends'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glitch-text">
            STUDENT PROFILE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-10">
            <div className="space-y-6">
              <div className="glass-panel p-8 h-full">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                  <GraduationCap size={24} />
                  ACADEMIC OVERVIEW
                </h3>
                {educationData.map((edu) => (
                  <div key={edu.id} className="mb-6 last:mb-0">
                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                    <div className="text-cyan-400 text-sm font-mono mb-2">{edu.institution} | {edu.period}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 sticky top-24">
              <div className="glass-panel p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-400 font-mono text-sm">LOCATION</span>
                </div>
                <p className="text-white text-lg">{personalInfo.location}</p>
              </div>

              <div className="glass-panel p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-400 font-mono text-sm">STATUS</span>
                </div>
                <p className="text-white text-lg">B.Tech Student</p>
              </div>

              <div className="glass-panel p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-gray-400 font-mono text-sm">SPECIALIZATION</span>
                </div>
                <p className="text-white text-lg">Computer Science</p>
              </div>
            </div>
          </div>

          {/* Position of Responsibility - Full Width */}
          <div className="glass-panel p-8 mb-16">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <Award size={24} />
              POSITION OF RESPONSIBILITY
            </h3>
            {experienceData.map((exp) => (
              <div key={exp.id} className="mb-6 last:mb-0">
                <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                <div className="text-cyan-400 text-md font-mono mb-4">{exp.organization} | {exp.period}</div>
                <ul className="grid md:grid-cols-2 gap-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start bg-gray-800/30 p-4 rounded-lg">
                      <span className="text-cyan-400 mr-3 mt-0.5">▹</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-panel p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-cyan-400 mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;