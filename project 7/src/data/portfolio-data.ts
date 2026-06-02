import { Education, Project, Skill, SocialLink } from '../types';

// Education data
export const educationData: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Kalasalingam University',
    location: 'Srivilliputhur, Tamilnadu',
    period: 'Sep 2023 - Present',
    description: 'Grade: 7.69/10. Actively participating as Chair Person of ACM Student Chapter KARE, organizing hackathons and technical events.',
  },
  {
    id: 2,
    degree: 'Intermediate Education (Physics, Chemistry, Maths)',
    institution: 'Sri Chaitanya College',
    location: 'Guntur, AP',
    period: '2021 - 2023',
    description: 'Percentage: 69.6%.',
  },
  {
    id: 3,
    degree: 'Board of Secondary Education',
    institution: 'Bhashyam High School',
    location: 'Guntur, AP',
    period: '2020 - 2021',
    description: 'Grade: 10/10.',
  }
];

// Project data
export const projectData: Project[] = [
  {
    id: 1,
    title: 'Doctor Connect',
    description: 'A healthcare web application for booking doctor appointments online. Uses AI to analyze symptoms and recommend suitable doctors. Features direct chat and automated email confirmations.',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'Machine Learning', 'HTML', 'CSS', 'JavaScript', 'SQL', 'SMTP', 'n8n'],
    demoLink: '#',
    codeLink: 'https://github.com/thaha55577',
  },
  {
    id: 2,
    title: 'Hackathon Student Portal Management System',
    description: 'A web-based portal to manage hackathon registrations and activities. Students register teams and select problem statements, with automated email notifications and event agenda display.',
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'SQL', 'SMTP', 'Flask/Django'],
    demoLink: '#',
    codeLink: 'https://github.com/thaha55577',
  }
];

// Skills data
export const skillsData: Skill[] = [
  { id: 1, name: 'Python', level: 5, category: 'technical' },
  { id: 2, name: 'JavaScript', level: 4, category: 'technical' },
  { id: 3, name: 'HTML/CSS', level: 5, category: 'technical' },
  { id: 4, name: 'Node.js', level: 4, category: 'technical' },
  { id: 5, name: 'SQL', level: 4, category: 'technical' },
  { id: 6, name: 'Machine Learning', level: 3, category: 'technical' },
  { id: 7, name: 'Peer Learning', level: 5, category: 'soft' },
  { id: 8, name: 'Mentoring', level: 4, category: 'soft' },
  { id: 9, name: 'Leading & Organising', level: 5, category: 'soft' },
  { id: 10, name: 'Inter Personal communication', level: 5, category: 'soft' },
  { id: 11, name: 'Telugu', level: 5, category: 'language' },
  { id: 12, name: 'English', level: 5, category: 'language' },
  { id: 13, name: 'Hindi', level: 4, category: 'language' },
  { id: 14, name: 'Urdu', level: 4, category: 'language' },
];

// Social media links
export const socialLinks: SocialLink[] = [
  { id: 1, name: 'GitHub', url: 'https://github.com/thaha55577', icon: 'github' },
  { id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/shaik-thaha-6b10b1290/', icon: 'linkedin' },
  { id: 3, name: 'Email', url: 'mailto:shaikthaha2005@gmail.com', icon: 'mail' },
];

export const experienceData = [
  {
    id: 1,
    role: 'Chair Person',
    organization: 'ACM Student Chapter KARE',
    period: 'Current',
    responsibilities: [
      'Organized 5+ hackathons and 15+ technical events and workshops as the Lead organizer.',
      'Networked with ACM speakers, industry experts, and professionals through various events.',
      'Led team coordination, event planning, and execution to foster a strong tech community.'
    ]
  }
];

export const personalInfo = {
  name: 'SHAIK THAHA',
  title: 'Software Engineering Undergraduate',
  bio: 'Motivated Computer Science undergraduate with a strong foundation in Python, JavaScript, and web development, seeking a software engineering role to build scalable and secure applications. Passionate about solving real-world problems through technology, with hands-on experience in AI-driven and full-stack development, and eager to contribute in collaborative, fast-paced environments.',
  location: 'Guntur, Andhra Pradesh, India',
  email: 'shaikthaha2005@gmail.com',
  phone: '+91 7893340788',
  resumeUrl: '/resume.png'
};