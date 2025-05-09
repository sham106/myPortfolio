import { FaReact, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiDjango, SiFastapi, SiFirebase, SiPostgresql, SiDotnet, SiTailwindcss } from 'react-icons/si';

export const skills = [
  { name: 'React', icon: <FaReact />, level: 'Advanced' },
  { name: 'Python', icon: <FaPython />, level: 'Advanced' },
  { name: 'Django', icon: <SiDjango />, level: 'Intermediate' },
  { name: 'FastAPI', icon: <SiFastapi />, level: 'Intermediate' },
  { name: 'Firebase', icon: <SiFirebase />, level: 'Intermediate' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Intermediate' },
  { name: '.NET (C#)', icon: <SiDotnet />, level: 'Basic' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 'Advanced' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 'Advanced' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Advanced' },
  { name: 'Git', icon: <FaGitAlt />, level: 'Intermediate' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 'Basic' },
];