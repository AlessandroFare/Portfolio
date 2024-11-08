// Assegnare l'oggetto a una variabile
const translations = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact'
  },
  hero: {
    title: 'Full Stack Developer',
    subtitle: 'Developer with experience in Java, JavaScript, TypeScript and Node.js.',
    description: 'Specialized in developing modern and scalable web applications.',
    currentRole: 'Currently Backend Developer at SIVA and Publicis Media',
    cta: {
      projects: 'View Projects',
      contact: 'Contact Me'
    },
    aria: {
      scroll: 'Scroll to see projects',
      cta: {
        projects: 'Go to projects section',
        contact: 'Go to contact section'
      }
    }
  },
  projects: {
    title: 'Projects',
    search: {
      placeholder: 'Search projects...',
      filters: {
        show: 'Show filters',
        hide: 'Hide filters',
        clear: 'Clear filters',
        technologies: 'Technologies',
        tags: 'Tags'
      },
      noResults: 'No projects found matching your search criteria.'
    },
    details: {
      title: 'Project Details',
      duration: 'Duration',
      role: 'Role',
      team: 'Team',
      technologies: 'Tech Stack',
      timeline: 'Timeline',
      challenges: 'Challenges',
      solutions: 'Solutions',
      stats: 'Stats',
      relatedProjects: 'Related Projects',
      viewDemo: 'Visit Site',
      viewGithub: 'View on GitHub',
      nextProject: 'Next Project',
      prevProject: 'Previous Project',
      tooltips: {
        commits: "Total number of commits made during development",
        files: "Total number of files in the project",
        functions: "Total number of implemented functions",
        tests: "Total number of written tests"
      }
    }
  },
  about: {
    title: 'About Me',
    personalInfo: {
      title: 'Personal Info',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      nationality: 'Nationality',
      birthDate: 'Birth Date'
    },
    skills: {
      title: 'Skills',
      development: 'Development',
      frameworks: 'Frameworks & Tools',
      other: 'Other Skills'
    },
    languages: {
      title: 'Languages',
      native: 'Native Language',
      levels: {
        listening: 'Listening',
        reading: 'Reading',
        speaking: 'Speaking',
        interaction: 'Interaction',
        writing: 'Writing'
      }
    },
    interests: {
      title: 'Interests & Hobbies',
      sports: 'Sports',
      creative: 'Creative'
    }
  },
  contact: {
    title: 'Contact',
    description: 'I\'m always interested in new opportunities and collaborations. Don\'t hesitate to reach out through any of the following channels.',
    availability: 'I\'m available for full-time job opportunities, project collaborations, and consulting.',
    preferredContact: 'I prefer email communications, but I\'m also reachable through LinkedIn for professional discussions.'
  },
  footer: {
    links: {
      email: 'Email',
      github: 'GitHub',
      behance: 'Behance',
      website: 'Website'
    },
    aria: {
      navigation: 'Social links and contacts',
      email: 'Send an email',
      github: 'Visit GitHub profile',
      behance: 'Visit Behance portfolio',
      website: 'Visit website'
    }
  },
  experience: {
    title: 'Work Experience',
    current: 'Current',
    menu: 'Menu',
    close: 'Close',
    social: 'Social',
    details: {
      duration: 'Period',
      company: 'Company',
      location: 'Location',
      responsibilities: 'Responsibilities',
      technologies: 'Technologies'
    }
  },
  gallery: {
    loading: 'Loading image...',
    imageCounter: 'Image {current} of {total}',
    prevImage: 'Previous image',
    nextImage: 'Next image',
    close: 'Close',
  },
  timeline: {
    date: 'Date',
    milestone: 'Milestone'
  },
  theme: {
    toggleTheme: 'Toggle theme',
    light: 'Light theme',
    dark: 'Dark theme'
  },
  header: {
    navigation: 'Main navigation',
    backHome: 'Back to home',
    controls: 'Controls',
    toggleMenu: 'Toggle menu',
    toggleLanguage: 'Change language',
  },
  scroll: {
    progress: 'Reading progress',
    percentage: 'You have read {value}% of the page'
  },
  language: {
    select: 'Select language',
    it: 'Italian',
    en: 'English',
    current: 'Current language: {language}',
    switch: 'Switch to {language}'
  },
  menu: {
    title: 'Main menu',
    toggle: 'Toggle menu',
    close: 'Close menu',
    navigation: 'Main navigation',
    social: {
      title: 'Social media',
      follow: 'Follow me on social media'
    }
  },
};

export default translations; 