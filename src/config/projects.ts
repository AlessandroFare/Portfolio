import { projectTranslationsIT, projectTranslationsEN } from './projects.i18n';

export interface Project {
  slug: string;
  title: string;
  year: string;
  description: string;
  images: {
    preview: string;
    hero: string;
    gallery?: string[];
  };
  technologies: string[];
  tags: string[];
  details: {
    duration: string;
    role: string;
    team?: string;
    timeline: Array<{
      date: string;
      milestone: string;
    }>;
    challenges: string[];
    solutions: string[];
    stats?: {
      commits?: number;
      files?: number;
      functions?: number;
      tests?: number;
    };
  };
  links: {
    demo?: string;
    github?: string;
  };
  relatedProjects?: string[];
}

export function getProjectDescription(slug: string, language: 'it' | 'en'): string {
  const translations = language === 'it' ? projectTranslationsIT : projectTranslationsEN;
  return translations[slug]?.description || '';
}

export const projects: Project[] = [
  {
    slug: 'pikbook',
    title: 'PikBook',
    year: '2020',
    description: '',
    images: {
      preview: '/projects/pikbook-preview.jpg', // Cambiato da .png a .jpg
      hero: '/projects/pikbook-hero.jpg',       // Cambiato da .png a .jpg
      gallery: [
        '/projects/pikbook-1.jpg',              // Cambiato da .png a .jpg
        '/projects/pikbook-2.jpg' 
      ]
    },
    technologies: ['Node.js', 'MongoDB', 'Express.js', 'Passport.js', 'Cloudinary', 'CSS', 'Pug.js', 'JavaScript', 'Ajax'],
    tags: ['Web App', 'Social Network', 'Full Stack'],
    details: {
      duration: '2 mesi',
      role: 'Full Stack Developer',
      timeline: projectTranslationsIT['pikbook'].timeline,
      challenges: projectTranslationsIT['pikbook'].challenges,
      solutions: projectTranslationsIT['pikbook'].solutions,
      stats: {
        commits: 245,
        files: 89,
        functions: 156,
        tests: 78
      }
    },
    links: {
      demo: 'https://pikbook.herokuapp.com',
      github: 'https://github.com/AlessandroFare/PikBook'
    },
    relatedProjects: ['mindspace', 'portfolio']
  },
  {
    slug: 'thesis',
    title: 'Tesi',
    year: '2021',
    description: '',
    images: {
      preview: '/projects/thesis-preview.jpg',
      hero: '/projects/thesis-hero.jpg',
      gallery: [
        '/projects/thesis-1.jpg',
        '/projects/thesis-2.jpg'
      ]
    },
    technologies: ['Java', 'Python', 'OCR Tesseract', 'Leptonica', 'Weka', 'Machine Learning'],
    tags: ['Machine Learning', 'OCR', 'Data Analysis'],
    details: {
      duration: '3 mesi',
      role: 'Machine Learning Developer',
      timeline: projectTranslationsIT['thesis'].timeline,
      challenges: projectTranslationsIT['thesis'].challenges,
      solutions: projectTranslationsIT['thesis'].solutions,
      stats: {
        commits: 189,
        files: 76,
        functions: 134,
        tests: 56
      }
    },
    links: {
      github: 'https://github.com/AlessandroFare/Thesis_ComputerScience'
    },
    relatedProjects: ['ocr-invoice']
  },
  {
    slug: 'snake-mips',
    title: 'Snake MIPS',
    year: '2019',
    description: '',
    images: {
      preview: '/projects/snake-mips-preview.jpg',
      hero: '/projects/snake-mips-hero.jpg',
      gallery: [
        '/projects/snake-mips-1.jpg',
        '/projects/snake-mips-2.jpg'
      ]
    },
    technologies: ['MIPS Assembly', 'Mars MIPS Simulator', 'Keyboard MMIO', 'Bitmap Display'],
    tags: ['Game Development', 'Assembly', 'Low Level'],
    details: {
      duration: '2 mesi',
      role: 'Assembly Developer',
      timeline: projectTranslationsIT['snake-mips'].timeline,
      challenges: projectTranslationsIT['snake-mips'].challenges,
      solutions: projectTranslationsIT['snake-mips'].solutions,
      stats: {
        files: 1,
        functions: 15
      }
    },
    links: {
      github: 'https://github.com/AlessandroFare/Snake-MIPS'
    }
  },
  {
    slug: 'cigarettes-stubs',
    title: 'Cigarettes & Stubs',
    year: '2016',
    description: '',
    images: {
      preview: '/projects/cigarettes-stubs-preview.jpg',
      hero: '/projects/cigarettes-stubs-hero.jpg',
      gallery: [
        '/projects/cigarettes-stubs-1.jpg',
        '/projects/cigarettes-stubs-2.jpg'
      ]
    },
    technologies: ['3D Printing', 'Product Design', 'UI/UX Design', 'Startup'],
    tags: ['Startup', 'Green', 'Design'],
    details: {
      duration: '3 mesi',
      role: 'Product Designer',
      timeline: projectTranslationsIT['cigarettes-stubs'].timeline,
      challenges: projectTranslationsIT['cigarettes-stubs'].challenges,
      solutions: projectTranslationsIT['cigarettes-stubs'].solutions
    },
    links: {
      demo: 'http://cigarettes-stubs.launchrock.com'
    }
  },
  {
    slug: 'mindspace',
    title: 'MindSpace',
    year: '2024',
    description: '',
    images: {
      preview: '/projects/mindspace-preview.jpg',
      hero: '/projects/mindspace-hero.jpg',
      gallery: [
        '/projects/mindspace-1.jpg',
        '/projects/mindspace-2.jpg'
      ]
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
    tags: ['Web App', 'SaaS', 'Full Stack'],
    details: {
      duration: '3 mesi',
      role: 'Full Stack Developer',
      timeline: projectTranslationsIT['mindspace'].timeline,
      challenges: projectTranslationsIT['mindspace'].challenges,
      solutions: projectTranslationsIT['mindspace'].solutions,
      stats: {
        commits: 189,
        files: 76,
        functions: 134,
        tests: 56
      }
    },
    links: {
      demo: 'https://mindspace.vercel.app',
      github: 'https://github.com/AlessandroFare/mindspace'
    },
    relatedProjects: ['pikbook', 'portfolio']
  },
  {
    slug: 'voto-elettronico',
    title: 'Voto Elettronico',
    year: '2022',
    description: '',
    images: {
      preview: '/projects/voto-elettronico-preview.jpg',
      hero: '/projects/voto-elettronico-hero.jpg',
      gallery: [
        '/projects/voto-elettronico-1.jpg',
        '/projects/voto-elettronico-2.jpg'
      ]
    },
    technologies: ['Java', 'Swing', 'MySQL', 'MVC', 'DAO'],
    tags: ['Desktop App', 'Database', 'Security'],
    details: {
      duration: '3 mesi',
      role: 'Java Developer',
      timeline: projectTranslationsIT['voto-elettronico'].timeline,
      challenges: projectTranslationsIT['voto-elettronico'].challenges,
      solutions: projectTranslationsIT['voto-elettronico'].solutions,
      stats: {
        commits: 156,
        files: 45,
        functions: 89,
        tests: 34
      }
    },
    links: {
      github: 'https://github.com/AlessandroFare/VotoElettronico'
    },
    relatedProjects: ['thesis', 'snake-mips']
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex + 1) % projects.length];
}

export function getPrevProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex - 1 + projects.length) % projects.length];
}

export function getProjectTranslations(slug: string, language: 'it' | 'en') {
  const translations = language === 'it' ? projectTranslationsIT : projectTranslationsEN;
  return translations[slug] || null;
} 