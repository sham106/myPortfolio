import CoSavr from '../assets/images/CoSavr.jpg';
import ImarishaSTEM from '../assets/images/ImarishaSTEM.jpg'
import SMSdating from '../assets/images/SMSdating.png'

export const projects = [
  {
    title: 'CoSavr',
    description:
      'A full-stack group saving and lending web app empowering communities to manage contributions, withdrawals, and loans transparently.',
    technologies: ['React', 'Flask', 'Python', 'PostgreSQL', 'TailwindCSS'],
    github: 'https://github.com/sham106/Group-Saving-Application',
    live: 'https://group-savings.vercel.app/',
    image: CoSavr,
  },
  {
    title: 'SMS Dating App',
    description:
      'A short-code-based dating application implementing innovative solutions using FastAPI, SQLAlchemy, MySQL, ReactJS, and AWS.',
    technologies: ['FastAPI', 'React', 'MySQL', 'AWS'],
    github: 'https://github.com/sham106/Penzi-Application',
    live: null,
    image: SMSdating,
  },
  {
    title: 'ImarishaSTEM',
    description:
      'A project to promote STEM education and digital literacy in underserved schools in Kisumu, including a coding club for students.',
    technologies: ['STEM Education', 'Community Development'],
    github: 'https://stem-star.vercel.app/',
    live: null,
    image: ImarishaSTEM,
  },
];