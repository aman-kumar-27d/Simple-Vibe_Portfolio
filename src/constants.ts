import { Project, Experience, Theme } from './types';
import { NodeIcon, PythonIcon, ReactIcon, MongoIcon, DockerIcon, TypescriptIcon, NextJSIcon, JavaIcon, TensorFlowIcon, ScikitLearnIcon, AWSIcon, SQLIcon } from './components/icons';

export const SKILLS = [
  { name: 'Python', Icon: PythonIcon },
  { name: 'Java', Icon: JavaIcon },
  { name: 'TypeScript', Icon: TypescriptIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextJSIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'TensorFlow', Icon: TensorFlowIcon },
  { name: 'Scikit-learn', Icon: ScikitLearnIcon },
  { name: 'MongoDB', Icon: MongoIcon },
  { name: 'SQL', Icon: SQLIcon },
  { name: 'Docker', Icon: DockerIcon },
  { name: 'AWS', Icon: AWSIcon },
];

export const services = [
    {
      title: 'Full-Stack Developer',
      description: 'I build end-to-end web applications using modern frameworks like React, Node.js, and databases to create seamless user experiences.',
      icon: '💻',
    },
    {
      title: 'Software Engineer',
      description: 'I design and develop scalable software solutions, focusing on clean architecture, efficient algorithms, and maintainable code.',
      icon: '⚙️',
    },
  ];

export const PROJECTS: Project[] = [
  {
    title: 'AI-powered Resume Screening & Ranking System',
    description: 'Developed an AI-powered resume screening system using NLP and Scikit-learn, automating evaluations to cut screening time by 70% and increase role-matching accuracy by 90%.',
    tags: ['Python', 'Scikit-learn', 'NLTK', 'NLP'],
    githubUrl: 'https://github.com/aman-kumar-27d',
  },
  {
    title: 'URL Shortener Application',
    description: 'Independently developed a backend URL shortener service using Express.js and MongoDB, emphasizing RESTful API design, secure data handling, and efficient database operations.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/aman-kumar-27d',
  },
  {
    title: 'Secure Notepad Assessment Platform',
    description: 'Developed a streamlined student assessment management system for transparent grading and real-time dispute resolution, reducing organizational workload by 40%.',
    tags: ['React', 'Node.js', 'MongoDB', 'SaaS'],
    githubUrl: 'https://github.com/aman-kumar-27d',
  },
];

export const EXPERIENCES: Experience[] = [
    {
    role: 'AI-ML Virtual Internship',
    company: 'EduSkills (AWS Academy)',
    period: '2025',
    description: 'Leveraged AWS Cloud infrastructure and services like SageMaker for cloud-native solutions. Applied Generative AI and NLP techniques, reinforcing best practices in secure and scalable application development.',
  },
  {
    role: 'AI: Transformative Learning',
    company: 'Edunet Foundation (TechSaksham)',
    period: '2025',
    description: 'Built a Resume Ranking system using NLP (cosine similarity), reducing screening time by 70%. Utilized Scikit-learn, Pandas, and PyPDF2 for automation and data analysis.',
  },
  {
    role: 'Generative AI Virtual Internship',
    company: 'EduSkills (Google Cloud)',
    period: '2024',
    description: 'Explored practical applications of large language models using Google Cloud\'s Vertex AI, gaining hands-on experience in generative AI workflows and prompt engineering.',
  },
];


export const THEMES: Theme[] = [
  {
    name: 'dark-purple',
    colors: {
      background: '#01000a',
      text: '#e2e8f0',
      primary: '#9333ea', // purple-600
      primaryLight: '#c084fc', // purple-400
      card: '#1e293b',
      border: '#334155',
    }
  },
    {
    name: 'forest-green',
    colors: {
      background: '#0f172a',
      text: '#e2e8f0',
      primary: '#16a34a', // green-600
      primaryLight: '#4ade80', // green-400
      card: '#1e293b',
      border: '#334155',
    }
  },
  {
    name: 'sunset-orange',
    colors: {
      background: '#000000',
      text: '#f1f5f9',
      primary: '#ea580c', // orange-600
      primaryLight: '#fb923c', // orange-400
      card: '#1c1917',
      border: '#44403c',
    }
  }
];
