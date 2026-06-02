import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projectData } from '../data/portfolio-data';

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProject === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  
                  {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;