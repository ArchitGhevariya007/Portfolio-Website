/** Central content for the portfolio website. */
export const site = {
  name: 'Archit Ghevariya',
  title: 'Full-Stack Software Developer',
  bio: 'Software engineer with 2+ years of experience building secure, scalable full-stack products from development to deployment.',
  location: 'Melbourne, Australia',
  email: 'ghevariyaarchit3@gmail.com',
  links: {
    github: 'https://github.com/ArchitGhevariya007',
    linkedin: 'https://www.linkedin.com/in/architghevariya/',
    leetcode: 'https://leetcode.com/ghevariyaarchit/',
    x: 'https://x.com/Archit7373',
    resume: '/Archit-Ghevariya-Resume.pdf',
  },

  /**
   * Prefer transparent `.svg` / PNG and set `--graffiti-blend-mode: normal` in `index.css`.
   * If files are black-matte rasters, use `screen` instead (see comment on that variable).
   */
  graffiti: {
    react: '/graffiti-react.png',
    node: '/graffiti-node.png',
    python: '/graffiti-python.png',
    coffee: '/graffiti-coffee.png',
    aws: '/graffiti-aws.png',
    mongodb: '/graffiti-mongodb.png',
    java: '/graffiti-java.png',
  },

  stats: [
    { label: 'Experience', value: '2+ years' },
    { label: 'Apprenticeships', value: '3 roles' },
    { label: 'Education', value: "Master's in I.T." },
  ],
  skills: [
    'C',
    'C++',
    'Java',
    'Python',
    'PHP',
    '.NET',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'React Native',
    'Redux',
    'React Query',
    'MUI',
    'Tailwind CSS',
    'TypeScript',
    'JavaScript',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'SQL',
    'REST APIs',
    'Postman',
    'AI/ML Integration',
    'Cybersecurity',
    'Blockchain',
    'AWS',
    'Vercel',
    'Netlify',
    'Render',
    'Git',
    'GitHub',
    'Linux',
  ],
  education: [
    {
      degree: "Master's in Information Technology (Professional Computing)",
      school: 'Swinburne University of Technology',
      period: 'Feb 2024 - Nov 2025',
      location: 'Melbourne, Australia',
      note: 'GPA: 8.9',
    },
    {
      degree: "Bachelor's in Information Technology",
      school: 'Veer Narmad South Gujarat University',
      period: 'Jul 2020 - Mar 2023',
      location: 'India',
      note: 'GPA: 8.23',
    },
  ],
  experience: [
    {
      role: 'Full Stack Developer (Apprenticeship)',
      company: 'Clock Solutions',
      period: 'Jul 2025 - Dec 2025',
      location: 'Melbourne, Australia',
    },
    {
      role: 'Full-Stack Web Developer (MERN Stack)',
      company: 'Lexicon Solution',
      period: '2022 - 2024',
      location: 'India',
    },
    {
      role: 'Full-Stack Developer (Apprenticeship)',
      company: 'Jainam Broking Limited',
      period: 'Nov 2022 - Mar 2023',
      location: 'India',
    },
  ],
  projects: [
    {
      title: 'Aegis - Government Security & Identity Protection',
      description:
        'Secure platform for digital IDs and e-government access, combining AI verification with blockchain-backed tamper resistance.',
      tags: ['React', 'Node.js', 'AI/ML', 'Blockchain'],
      liveUrl: '',
      repoUrl: 'https://github.com/ArchitGhevariya007/Aegis',
    },
    {
      title: 'Malware Detection System',
      description:
        'Full-stack malware analysis app using a LightGBM model on 500k samples to classify malicious vs benign files with high efficiency.',
      tags: ['React', 'Node.js', 'MUI', 'Machine Learning'],
      liveUrl: '',
      repoUrl: 'https://github.com/ArchitGhevariya007/Malware-detection-System',
    },
    {
      title: 'FinSharp - Virtual Stock Market',
      description:
        'Interactive stock trading simulator built for brokerage learning, helping users practice strategy, risk, and portfolio management.',
      tags: ['MERN', 'AI/ML', 'FinTech'],
      liveUrl: '',
      repoUrl:
        'https://github.com/ArchitGhevariya007?tab=repositories&q=finsharp&type=&language=&sort=',
    },
    {
      title: 'AMS - Attendance Management System',
      description:
        'Attendance management platform for tracking sessions, student presence, and reporting with a clean dashboard and efficient workflows.',
      tags: ['React', 'Node.js', 'MongoDB', 'Dashboard'],
      liveUrl: '',
      repoUrl:
        'https://github.com/ArchitGhevariya007?tab=repositories&q=attendance&type=&language=&sort=',
    },
    {
      title: 'Scribble',
      description:
        'Task manager application built to deeply explore React optimization patterns and Material UI based interface design.',
      tags: ['JavaScript', 'React', 'MUI'],
      liveUrl: '',
      repoUrl: 'https://github.com/ArchitGhevariya007/scribble',
    },
  ],
} as const
