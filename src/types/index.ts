export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 1-5
  category: 'technical' | 'soft' | 'language';
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}