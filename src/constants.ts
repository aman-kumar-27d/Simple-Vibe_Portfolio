import { Project, Experience, Theme } from './types';

import {
  FaPython,
  FaReact,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTensorflow,
  SiScikitlearn,
  SiMongodb,
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';


export const SKILLS = [
  { name: 'Python', Icon: FaPython },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'React', Icon: FaReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'TensorFlow', Icon: SiTensorflow },
  { name: 'Scikit-learn', Icon: SiScikitlearn },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'SQL', Icon: DiDatabase },
  { name: 'Docker', Icon: FaDocker },
  { name: 'AWS', Icon: FaAws },
];

export const services = [
    {
      title: 'Full-Stack Developer',
      description: 'Crafting responsive web apps using React + Vite, styled with Tailwind, and powered by FastAPI, Express.js, and MongoDB. Focused on clean UI, secure APIs, and cloud-ready deployment.',
      icon: '💻',
    },
    {
      title: 'Machine Learning Engineer (Generative AI Focus)',
      description: 'Building intelligent systems with generative models, handling data pipelines, model training, and deployment using TensorFlow, Scikit-learn, and FastAPI on cloud platforms.',
      icon: '🤖',
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
  {
    title: 'Secure Notepad Assessment Platform',
    description: 'Developed a streamlined student assessment management system for transparent grading and real-time dispute resolution, reducing organizational workload by 40%.',
    tags: ['React', 'Node.js', 'MongoDB', 'SaaS'],
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

export const CERTIFICATIONS: { credlyId?: string; openBadgeSrc?: string }[] = [
  {
    credlyId: "d4e090f7-0334-49bb-ab6e-71abd9b441ce", 
  },
  {
    credlyId: "7a3c15f5-309b-4917-bf5f-44ec394a85e6", 
  },
  {
    credlyId: "95c6d9ca-87e3-4724-a268-0246027f8a17", 
  },
  {
    credlyId: "7effc91d-b7b7-454e-bce2-1728b951ab56", 
  },
  {
    credlyId: "36cb5eb2-9d29-4842-9d9f-a7bbfd57b7ba", 
  },
  {
    credlyId: "52f58065-9f89-4b4e-abf5-b3481bca3708", 
  },
  // {
  //   credlyId: "7702be31-11b2-4132-b937-9b25f410bf0b", 
  // },
  {
    openBadgeSrc: "https://openbadgepassport.com/app/badge/info/982573/pic/embed",//Machine Learning Master
  },
  {
    openBadgeSrc: "https://openbadgepassport.com/app/badge/info/982572/pic/embed", //Data Engineering Master
  },
  {
    openBadgeSrc: "https://openbadgepassport.com/app/badge/info/982574/pic/embed", //Applications & Use Cases Master
  },
  {
    openBadgeSrc: "https://openbadgepassport.com/app/badge/info/981288/pic/embed", //Machine Learning Professional
  },
  {
    openBadgeSrc: "https://openbadgepassport.com/app/badge/info/981286/pic/embed", //Data Engineering Professional
  },
  // {
  //   openBadgeSrc: "https://openbadgepassport.com/app/badge/info/981289/pic/embed", //Applications & Use Cases Professional
  // },
];
