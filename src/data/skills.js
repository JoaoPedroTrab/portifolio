import { FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaAngular, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiDart, SiC, SiSelenium, SiReact, SiPrisma, SiMongodb, SiMicrosoftsqlserver, SiMysql } from 'react-icons/si';

export const skills = [
  // Linguagens
  { name: 'JavaScript', level: 90, icon: FaJs, tooltip: 'Domínio avançado de JavaScript, incluindo ES6+ e conceitos modernos.' },
  { name: 'Python', level: 85, icon: FaPython, tooltip: 'Experiência sólida em desenvolvimento de aplicações e scripts com Python.' },
  { name: 'Java', level: 80, icon: FaJava, tooltip: 'Proficiência em desenvolvimento de aplicações empresariais com Java.' },

  // Frameworks
  { name: 'ReactJS', level: 88, icon: FaReact, tooltip: 'Experiência avançada em desenvolvimento de interfaces com ReactJS, incluindo hooks e gerenciamento de estado.' },
  { name: 'NodeJS', level: 85, icon: FaNodeJs, tooltip: 'Proficiência em desenvolvimento backend com Node.js e frameworks como Express.' },
  { name: 'React Native', level: 82, icon: SiReact, tooltip: 'Experiência em desenvolvimento de aplicativos móveis multiplataforma com React Native.' },

  // Ferramentas
  { name: 'Git', level: 90, icon: FaGitAlt, tooltip: 'Domínio de controle de versão com Git, incluindo fluxos de trabalho avançados.' },
  { name: 'Docker', level: 80, icon: FaDocker, tooltip: 'Experiência em containerização de aplicações e orquestração com Docker.' },
  { name: 'Prisma', level: 75, icon: SiPrisma, tooltip: 'Conhecimento em ORM moderno para Node.js e TypeScript.' },

  // Bancos de Dados
  { name: 'MongoDB', level: 85, icon: SiMongodb, tooltip: 'Experiência em design e otimização de bancos de dados NoSQL com MongoDB.' },
  { name: 'MySQL', level: 82, icon: SiMysql, tooltip: 'Conhecimento sólido em design e administração de bancos de dados MySQL.' },
];