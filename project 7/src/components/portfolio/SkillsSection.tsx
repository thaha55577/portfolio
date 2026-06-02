import React, { useEffect, useRef } from 'react';
import { skillsData } from '../../data/portfolio-data';

const SkillsSection: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'technical', title: 'TECHNICAL SKILLS', color: 'from-cyan-400 to-blue-500' },
    { id: 'soft', title: 'SOFT SKILLS', color: 'from-purple-400 to-pink-500' },
    { id: 'language', title: 'LANGUAGES', color: 'from-green-400 to-teal-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-skill');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={skillsRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glitch-text">
            SKILLS & EXPERTISE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, catIndex) => {
              const catSkills = skillsData.filter(s => s.category === cat.id);
              if (catSkills.length === 0) return null;

              return (
                <div key={catIndex} className="glass-panel p-8">
                  <h3 className="text-xl font-bold text-cyan-400 mb-6 font-mono">
                    {cat.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {catSkills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-cyan-400 font-mono text-sm">{skill.level * 20}%</span>
                        </div>
                        
                        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full"></div>
                          <div 
                            className={`skill-bar-fill h-full bg-gradient-to-r ${cat.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ width: '0%' }}
                            data-width={`${skill.level * 20}%`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Academic Progress */}
          <div className="mt-16 text-center">
            <div className="glass-panel p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">QUICK STATS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2 counter" data-target="8">0</div>
                  <div className="text-gray-400 text-sm">SEMESTERS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2 counter" data-target="15">0</div>
                  <div className="text-gray-400 text-sm">TECHNOLOGIES</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2 counter" data-target="4">0</div>
                  <div className="text-gray-400 text-sm">MAIN PROJECTS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2 counter" data-target="4">0</div>
                  <div className="text-gray-400 text-sm">LANGUAGES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;