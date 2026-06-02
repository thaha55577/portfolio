import React, { useState } from 'react';
import { ExternalLink, Github, Zap, Code } from 'lucide-react';
import { projectData, socialLinks } from '../../data/portfolio-data';

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const githubUrl = socialLinks.find(link => link.name.toLowerCase() === 'github')?.url || 'https://github.com/thaha55577';

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glitch-text">
            PROJECT SHOWCASE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest web development and software engineering projects
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Project Display */}
          <div className="mb-12">
            <div className="glass-panel p-8 mb-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src={projectData[activeProject].image}
                    alt={projectData[activeProject].title}
                    className="relative w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono flex items-center gap-2">
                      <Code size={16} />
                      Project {projectData[activeProject].id}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">
                    {projectData[activeProject].title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {projectData[activeProject].description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {projectData[activeProject].technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a 
                      href={projectData[activeProject].demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button secondary"
                    >
                      <ExternalLink size={18} />
                      <span>LIVE DEMO</span>
                    </a>
                    
                    <a 
                      href={projectData[activeProject].codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button secondary"
                    >
                      <Github size={18} />
                      <span>VIEW CODE</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Selector Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {projectData.map((project, index) => {
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`glass-panel p-6 text-left transition-all duration-300 group ${
                    activeProject === index 
                      ? 'border-cyan-400 shadow-lg shadow-cyan-500/20' 
                      : 'hover:border-cyan-500/50'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Code size={18} className="text-cyan-400" />
                    <div className="text-sm text-cyan-400 font-mono">Project {project.id}</div>
                  </div>
                  <div className="text-white font-semibold text-lg mb-2">{project.title}</div>
                  <div className="text-gray-400 text-sm line-clamp-2">{project.description}</div>
                </button>
              );
            })}
          </div>

          {/* More Projects Button */}
          <div className="flex justify-center mt-12">
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button primary flex items-center gap-2"
            >
              <Github size={20} />
              <span>EXPLORE MORE PROJECTS ON GITHUB</span>
              <div className="cyber-button-glow"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;