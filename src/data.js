import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

export const personalInfo = {
  name: 'Nalla Sivanandu',
  role: 'Flutter Developer & Full Stack Engineer',
  bio: 'Flutter Developer with experience in building scalable and user-friendly applications. Strong in Data Structures and Algorithms. Skilled in Flutter, Firebase, and MERN stack with a focus on performance and usability.',
  shortBio: 'Building scalable applications with Flutter & MERN.',
  email: 'sivanalla03@gmail.com',
  phone: '+91 9912698093',
  github: 'https://github.com/', // User needs to update actual links
  linkedin: 'https://linkedin.com/',
  leetcode: 'https://leetcode.com/',
};

export const skills = [
  { category: 'Languages', items: ['Java', 'C', 'C++', 'Python', 'Dart', 'JavaScript'] },
  { category: 'Frameworks & Libraries', items: ['Flutter', 'React', 'Node.js', 'Express', 'MERN Stack', 'MEAN Stack'] },
  { category: 'Databases & Cloud', items: ['Firebase', 'MongoDB', 'SQL'] },
  { category: 'Core Concepts', items: ['Data Structures', 'Algorithms', 'OOP', 'DBMS'] },
  { category: 'Tools', items: ['Git', 'GitHub'] },
];

export const projects = [
  {
    title: 'Grameeno - Village Community App',
    description: 'Built a multi-module platform (agriculture, healthcare, news) serving 500+ users. Integrated offline functionality, improving usability in low-connectivity regions by 40%.',
    tech: ['Flutter', 'Firebase', 'MongoDB', 'Node.js', 'REST APIs'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Gym & Fitness App',
    description: 'Developed a personalized workout system with reminders and live features for 200+ users. Increased user retention by 30% through improved UI/UX and smart recommendations.',
    tech: ['Flutter', 'Firebase', 'MongoDB', 'Node.js'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Algorithm & Data Structure Visualizer',
    description: 'An interactive web application to visualize common data structures and algorithms in action, reflecting strong problem-solving skills and 235+ LeetCode solutions.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/',
    demo: '#',
  }
];

export const experience = [
  {
    role: 'Flutter Developer Intern',
    company: 'Technical Hub Pvt Ltd',
    period: 'May 2025 - Jun 2025',
    highlights: [
      'Developed 10+ reusable UI components, improving application performance by 15%.',
      'Applied scalable architecture patterns, reducing code maintenance effort by 20%.',
      'Improved responsiveness and cross-device compatibility for better user experience.'
    ]
  }
];
