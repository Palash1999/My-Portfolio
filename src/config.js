module.exports = {
  siteTitle: 'Palash Rathore | Software Engineer',
  siteDescription:
    'Im a software engineer based in India, specializing in building exceptional websites, mobile applications, and everything in between.',
  siteKeywords:
    'Palash Rathore, Palash, Rathore, Palash1999, software engineer, front-end engineer, web developer, javascript, India',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Palash Rathpre',
  location: 'Indore, India',
  email: 'palash1999.pr@gmail.com',
  github: 'https://github.com/Palash1999',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Palash1999',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/palash-rathore-03271b171/',
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/palash_1999',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/palash_r1999/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
     {
      name: 'Resume',
      url: '/resume.pdf',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
