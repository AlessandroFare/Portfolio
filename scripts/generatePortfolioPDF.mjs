import { createElement } from 'react';
import { renderToFile, StyleSheet } from '@react-pdf/renderer';
import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    position: 'relative',
    marginBottom: 40,
    padding: 30,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    overflow: 'hidden',
  },
  headerPattern: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 150,
    height: 150,
    opacity: 0.1,
    transform: 'rotate(45deg)',
    backgroundColor: '#3B82F6',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
    position: 'relative',
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#64748B',
    marginBottom: 16,
    position: 'relative',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#4B5563',
  },
  section: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderLeft: '4 solid #3B82F6',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#1E293B',
    marginBottom: 20,
    letterSpacing: 0.5,
    borderBottom: '2 solid #E2E8F0',
    paddingBottom: 8,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#4B5563',
  },
  experienceItem: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  experienceDot: {
    position: 'absolute',
    left: -2,
    top: '50%',
    width: 4,
    height: 4,
    backgroundColor: '#3B82F6',
    borderRadius: 2,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 10,
  },
  tech: {
    fontSize: 10,
    backgroundColor: '#F3F4F6',
    padding: '4 8',
    borderRadius: 4,
    color: '#4B5563',
  },
  contactInfo: {
    flexDirection: 'row',
    gap: 10,
  },
  contactText: {
    fontSize: 12,
    color: '#4B5563',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  company: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },
  period: {
    fontSize: 12,
    color: '#94A3B8',
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: '#475569',
    marginBottom: 12,
    lineHeight: 1.5,
  },
  skillCategory: {
    marginBottom: 20,
    backgroundColor: '#F8FAFC',
    padding: 15,
    borderRadius: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 12,
  },
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skill: {
    fontSize: 11,
    backgroundColor: '#EFF6FF',
    color: '#3B82F6',
    padding: '6 12',
    borderRadius: 4,
    letterSpacing: 0.5,
  },
  languageItem: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#F8FAFC',
    borderRadius: 6,
  },
  languageName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 4,
  },
  languageLevel: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 8,
  },
  languageDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  languageDetail: {
    fontSize: 10,
    color: '#64748B',
    backgroundColor: '#F1F5F9',
    padding: '4 8',
    borderRadius: 4,
  },
  interestGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  interest: {
    fontSize: 11,
    backgroundColor: '#F1F5F9',
    color: '#475569',
    padding: '6 12',
    borderRadius: 4,
  },
  projectItem: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: 1,
    borderColor: '#E5E7EB',
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 12,
    color: '#4B5563',
  },
  cover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
    backgroundColor: '#F8FAFC',
    position: 'relative',
  },
  coverPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#3B82F6',
    opacity: 0.05,
  },
  coverTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: 1,
  },
  coverSubtitle: {
    fontSize: 24,
    color: '#64748B',
    marginBottom: 40,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  coverDivider: {
    width: 80,
    height: 4,
    backgroundColor: '#3B82F6',
    marginBottom: 40,
    borderRadius: 2,
  },
  coverContact: {
    marginTop: 60,
    gap: 12,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  coverContactText: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  },
  coverDate: {
    marginTop: 60,
    fontSize: 12,
    color: '#94A3B8',
  },
  tocTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1E293B',
  },
  tocItems: {
    gap: 16,
  },
  tocItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tocText: {
    fontSize: 14,
    color: '#334155',
    flex: 1,
  },
  tocDots: {
    fontSize: 14,
    color: '#CBD5E1',
    letterSpacing: 2,
  },
  tocPage: {
    fontSize: 14,
    color: '#64748B',
  },
  pageNumber: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 12,
    color: '#6B7280',
  },
  // Stili per la copertina
  coverContact: {
    marginTop: 40,
    gap: 12,
    alignItems: 'center',
  },
  coverContactText: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
  },
  coverDate: {
    marginTop: 40,
    fontSize: 12,
    color: '#9CA3AF',
  },

  // Stili per le certificazioni
  certificationItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 4,
  },
  certTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  certIssuer: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  certDate: {
    fontSize: 10,
    color: '#9CA3AF',
  },

  // Stili per l'istruzione
  educationItem: {
    marginBottom: 20,
    borderLeft: '2 solid #E5E7EB',
    paddingLeft: 10,
  },
  institution: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  eduPeriod: {
    fontSize: 10,
    color: '#9CA3AF',
    marginBottom: 6,
  },

  // Stili per i progetti
  projectContainer: {
    marginBottom: 25,
    padding: 20,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    borderLeft: '4 solid #3B82F6',
    position: 'relative',
    overflow: 'hidden',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  projectDescription: {
    fontSize: 12,
    color: '#475569',
    marginBottom: 12,
    lineHeight: 1.5,
  },
  projectLinks: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 16,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 4,
  },
  projectLink: {
    fontSize: 11,
    color: '#3B82F6',
    textDecoration: 'underline',
  },

  // Stili per le soft skills
  softSkillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 10,
  },
  softSkill: {
    fontSize: 10,
    backgroundColor: '#EFF6FF',
    color: '#3B82F6',
    padding: '4 8',
    borderRadius: 4,
  },

  // Stili per il footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    borderTop: '1 solid #E2E8F0',
  },
  footerText: {
    fontSize: 10,
    color: '#94A3B8',
  },

  // Stili per la tesi
  thesisContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 4,
  },
  thesisTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  institution: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  company: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  period: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 10,
  },
  tech: {
    fontSize: 10,
    backgroundColor: '#F3F4F6',
    padding: '4 8',
    borderRadius: 4,
    color: '#4B5563',
  },

  // Box informativi migliorati
  infoBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    borderLeft: '4 solid #3B82F6',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  infoBoxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },

  // Griglia per skills e interessi
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  gridItem: {
    backgroundColor: '#F1F5F9',
    padding: '8 12',
    borderRadius: 6,
    color: '#475569',
  },

  // Timeline per esperienze
  timeline: {
    position: 'relative',
    paddingLeft: 20,
  },
  timelineLine: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: '#E2E8F0',
  },
  timelineDot: {
    position: 'absolute',
    left: -4,
    width: 10,
    height: 10,
    backgroundColor: '#3B82F6',
    borderRadius: 5,
  },

  // Sezioni con icone
  sectionWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  sectionIcon: {
    width: 24,
    height: 24,
    fill: '#3B82F6',
  },

  // Footer migliorato con data di generazione
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    borderTop: '1 solid #E2E8F0',
  },
  footerText: {
    fontSize: 10,
    color: '#94A3B8',
  },
  pageNumber: {
    fontSize: 10,
    color: '#94A3B8',
    fontStyle: 'italic',
  }
});

// Importiamo i dati del portfolio
const portfolioData = {
  en: {
    about: {
      intro: "Full Stack Developer with a Computer Science degree from the University of Milan...",
      location: "Milan, Italy"
    },
    contact: {
      email: "ale14798@hotmail.com",
      website: "alessandrofare.netlify.app",
      github: "github.com/AlessandroFare",
      linkedin: "linkedin.com/in/alessandro-fare"
    },
    experience: [
      {
        title: "Backend Developer",
        company: "SIVA",
        period: "2024 - Present",
        description: "Backend development with NestJS and cloud services integration.",
        technologies: ["NestJS", "TypeScript", "AWS"]
      },
      // ... altre esperienze
    ]
  },
  it: {
    about: {
      intro: "Sviluppatore Full Stack con laurea in Informatica presso l'Università degli Studi di Milano...",
      location: "Milano, Italia"
    },
    contact: {
      email: "ale14798@hotmail.com",
      website: "alessandrofare.netlify.app", 
      github: "github.com/AlessandroFare",
      linkedin: "linkedin.com/in/alessandro-fare"
    },
    experience: [
      {
        title: "Backend Developer",
        company: "SIVA",
        period: "2024 - Presente",
        description: "Sviluppo backend con NestJS e integrazione servizi cloud.",
        technologies: ["NestJS", "TypeScript", "AWS"]
      },
      // ... altre esperienze
    ]
  }
};

const projects = [
  {
    title: 'MindSpace',
    description: 'SaaS application for creative project management. Users can create projects, add notes, upload images, and organize their ideas using a Kanban-style board.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    links: {
      demo: 'https://mindspace.vercel.app',
      github: 'https://github.com/AlessandroFare/mindspace'
    }
  },
  {
    title: 'Voto Elettronico',
    description: 'Electronic voting system with blockchain integration for secure and transparent elections.',
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'Blockchain'],
    links: {
      github: 'https://github.com/AlessandroFare/VotoElettronico'
    }
  },
  {
    title: 'PikBook',
    description: 'Full Stack responsive Social Network for sharing creative projects and photography.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    links: {
      demo: 'https://pikbook.herokuapp.com',
      github: 'https://github.com/AlessandroFare/PikBook'
    }
  },
  {
    title: 'Snake MIPS',
    description: 'Classic Snake game implementation in MIPS Assembly language.',
    technologies: ['MIPS Assembly', 'Mars'],
    links: {
      github: 'https://github.com/AlessandroFare/Snake-MIPS'
    }
  },
  {
    title: 'Cigarettes & Stubs',
    description: 'Startup project for Green Jobs Nature. Created a portable cigarette and stub holder in polyethylene to reduce pollution and make cities cleaner.',
    technologies: ['UI/UX Design', 'Product Design'],
    links: {
      demo: 'http://cigarettes-stubs.launchrock.com/',
      behance: 'https://www.behance.net/gallery/68146095/Cigarettes-and-Stubs'
    }
  }
];

const certifications = {
  en: [
    {
      title: "Associate Reactive Developer",
      issuer: "OutSystems",
      date: "2023",
      description: "Certification in reactive web application development using OutSystems platform.",
      validUntil: "2025",
      credentialId: "OS-ARD-2023"
    },
    {
      title: "Associate Traditional Web Developer",
      issuer: "OutSystems",
      date: "2023",
      description: "Certification in traditional web application development using OutSystems platform.",
      validUntil: "2025",
      credentialId: "OS-TWD-2023"
    },
    {
      title: "ScrumLearn Scrum Master Certified",
      issuer: "ScrumLearn",
      date: "2023",
      description: "Certification in Agile methodologies and Scrum framework.",
      validUntil: "2025",
      credentialId: "SL-SM-2023"
    }
  ],
  it: [
    {
      title: "Associate Reactive Developer",
      issuer: "OutSystems",
      date: "2023",
      description: "Certificazione nello sviluppo di applicazioni web reactive usando la piattaforma OutSystems.",
      validUntil: "2025",
      credentialId: "OS-ARD-2023"
    },
    {
      title: "Associate Traditional Web Developer",
      issuer: "OutSystems",
      date: "2023",
      description: "Certificazione nello sviluppo di applicazioni web tradizionali usando la piattaforma OutSystems.",
      validUntil: "2025",
      credentialId: "OS-TWD-2023"
    },
    {
      title: "ScrumLearn Scrum Master Certified",
      issuer: "ScrumLearn",
      date: "2023",
      description: "Certificazione nelle metodologie Agile e nel framework Scrum.",
      validUntil: "2025",
      credentialId: "SL-SM-2023"
    }
  ]
};

const education = {
  en: [
    {
      title: 'Bachelor in Computer Science',
      institution: 'University of Milan',
      period: '2017 - 2022',
      grade: '95/110',
      description: 'Focus on software engineering, algorithms, and web technologies. Thesis project on automatic classification of electronic invoice data using Machine Learning algorithms and OCR text detection.',
      courses: [
        'Software Engineering',
        'Web Technologies',
        'Databases',
        'Algorithms and Data Structures',
        'Operating Systems',
        'Computer Networks'
      ]
    },
    {
      title: 'Scientific High School Diploma',
      institution: 'Liceo Scientifico G. Marconi',
      period: '2012 - 2017',
      grade: '75/100',
      description: 'Scientific studies with focus on mathematics, physics, and natural sciences.'
    }
  ],
  it: [
    {
      title: 'Laurea in Informatica',
      institution: 'Università degli Studi di Milano',
      period: '2017 - 2022',
      grade: '95/110',
      description: 'Focus su ingegneria del software, algoritmi e tecnologie web. Progetto di tesi sulla classificazione automatica dei dati delle fatture elettroniche tramite algoritmi di Machine Learning e OCR.',
      courses: [
        'Ingegneria del Software',
        'Tecnologie Web',
        'Basi di Dati',
        'Algoritmi e Strutture Dati',
        'Sistemi Operativi',
        'Reti di Calcolatori'
      ]
    },
    {
      title: 'Diploma Scientifico',
      institution: 'Liceo Scientifico G. Marconi',
      period: '2012 - 2017',
      grade: '75/100',
      description: 'Studi scientifici con focus su matematica, fisica e scienze naturali.'
    }
  ]
};

// Modifichiamo la struttura di softSkills per renderla un array
const softSkills = {
  en: [
    'Effective Communication',
    'Team Collaboration',
    'Cross-cultural Communication',
    'Project Management',
    'Time Management',
    'Problem Solving',
    'Critical Thinking',
    'Adaptability',
    'Attention to Detail',
    'Creativity',
    'Self-motivation',
    'Agile Methodologies'
  ],
  it: [
    'Comunicazione Efficace',
    'Lavoro di Squadra',
    'Comunicazione Interculturale',
    'Gestione Progetti',
    'Gestione del Tempo',
    'Problem Solving',
    'Pensiero Critico',
    'Adattabilità',
    'Attenzione ai Dettagli',
    'Creatività',
    'Auto-motivazione',
    'Metodologie Agili'
  ]
};

// Aggiungiamo le traduzioni direttamente qui
const translations = {
  en: {
    about: {
      title: "About Me",
      skills: {
        title: "Skills",
        development: "Development",
        frameworks: "Frameworks & Tools",
        other: "Other Skills"
      },
      languages: {
        title: "Languages"
      },
      interests: {
        title: "Interests"
      }
    },
    experience: {
      title: "Experience"
    },
    projects: {
      title: "Projects"
    }
  },
  it: {
    about: {
      title: "Chi Sono",
      skills: {
        title: "Competenze",
        development: "Sviluppo",
        frameworks: "Framework & Tools",
        other: "Altri Strumenti"
      },
      languages: {
        title: "Lingue"
      },
      interests: {
        title: "Interessi"
      }
    },
    experience: {
      title: "Esperienze"
    },
    projects: {
      title: "Progetti"
    }
  }
};

const thesis = {
  en: {
    title: "Automatic Classification of Electronic Invoice Data",
    university: "University of Milan",
    company: "Digital Technologies S.R.L.",
    period: "2022",
    description: "Development of a Java application for automatic classification of electronic invoice data using Machine Learning algorithms and OCR text detection.",
    technologies: ["Java", "Machine Learning", "OCR", "Spring Boot"]
  },
  it: {
    title: "Classificazione Automatica dei Dati delle Fatture Elettroniche",
    university: "Università degli Studi di Milano",
    company: "Digital Technologies S.R.L.",
    period: "2022",
    description: "Sviluppo di un'applicazione Java per la classificazione automatica dei dati delle fatture elettroniche tramite algoritmi di Machine Learning e rilevazione del testo con OCR.",
    technologies: ["Java", "Machine Learning", "OCR", "Spring Boot"]
  }
};

const PortfolioPDF = ({ language }) => {
  const t = translations[language];
  const data = portfolioData[language];

  // Aggiungiamo la funzione getSkillCategoryTitle qui
  const getSkillCategoryTitle = (category) => {
    const titles = {
      development: language === 'en' ? 'Development' : 'Sviluppo',
      frameworks: language === 'en' ? 'Frameworks & Tools' : 'Framework & Tools',
      tools: language === 'en' ? 'Other Tools' : 'Altri Strumenti'
    };
    return titles[category] || category;
  };

  return createElement(Document, null,
    // Copertina
    createElement(Page, { size: "A4", style: styles.page },
      createElement(View, { style: styles.cover },
        createElement(Text, { style: styles.coverTitle }, "Alessandro Farè"),
        createElement(Text, { style: styles.coverSubtitle }, "Full Stack Developer"),
        createElement(View, { style: styles.coverDivider }),
        createElement(View, { style: styles.coverContact },
          createElement(Text, { style: styles.coverContactText }, data.about.location),
          createElement(Text, { style: styles.coverContactText }, data.contact.email),
          createElement(Text, { style: styles.coverContactText }, data.contact.website),
          createElement(Text, { style: styles.coverContactText }, data.contact.linkedin)
        ),
        createElement(Text, { style: styles.coverDate }, 
          new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'it-IT', {
            year: 'numeric',
            month: 'long'
          })
        )
      )
    ),

    // Indice
    createElement(Page, { size: "A4", style: styles.page },
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.tocTitle }, 
          language === 'en' ? "Table of Contents" : "Indice"
        ),
        createElement(View, { style: styles.tocItems },
          [
            { title: t.about.title, page: 3 },
            { title: t.experience.title, page: 4 },
            { title: t.about.skills.title, page: 5 },
            { title: language === 'en' ? "Education" : "Istruzione", page: 6 },
            { title: t.projects.title, page: 7 },
            { title: language === 'en' ? "Certifications" : "Certificazioni", page: 8 }
          ].map((item, i) => 
            createElement(View, { key: i, style: styles.tocItem },
              createElement(Text, { style: styles.tocText }, item.title),
              createElement(Text, { style: styles.tocDots }, "..........................."),
              createElement(Text, { style: styles.tocPage }, item.page)
            )
          )
        )
      )
    ),

    // Profilo e Competenze
    createElement(Page, { size: "A4", style: styles.page },
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, t.about.title),
        createElement(Text, { style: styles.text }, data.about.intro)
      ),

      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, t.about.skills.title),
        Object.entries(data.skills).map(([category, skills], index) =>
          createElement(View, { 
            key: `skill-${index}`, 
            style: styles.skillCategory 
          },
            createElement(Text, { style: styles.categoryTitle }, 
              getSkillCategoryTitle(category)
            ),
            createElement(View, { style: styles.skillGrid },
              skills.map((skill, i) =>
                createElement(Text, { 
                  key: `skill-${index}-${i}`, 
                  style: styles.skill 
                }, skill)
              )
            )
          )
        )
      ),

      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, t.about.languages.title),
        data.languages.map((lang, index) =>
          createElement(View, { 
            key: `lang-${index}`, 
            style: styles.languageItem 
          },
            createElement(Text, { style: styles.languageName }, lang.name),
            createElement(Text, { style: styles.languageLevel }, lang.level),
            lang.details && createElement(View, { style: styles.languageDetails },
              Object.entries(lang.details).map(([key, value], i) =>
                createElement(Text, { 
                  key: `lang-detail-${index}-${i}`, 
                  style: styles.languageDetail 
                }, `${key}: ${value}`)
              )
            )
          )
        )
      )
    ),

    // Esperienza e Certificazioni
    createElement(Page, { size: "A4", style: styles.page },
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, t.experience.title),
        data.experience.map((exp, index) =>
          createElement(View, { 
            key: `exp-${index}`, 
            style: styles.experienceItem 
          },
            createElement(Text, { style: styles.jobTitle }, exp.title),
            createElement(Text, { style: styles.company }, exp.company),
            createElement(Text, { style: styles.period }, exp.period),
            createElement(Text, { style: styles.description }, exp.description),
            createElement(View, { style: styles.techStack },
              exp.technologies.map((tech, i) =>
                createElement(Text, { 
                  key: `exp-tech-${index}-${i}`, 
                  style: styles.tech 
                }, tech)
              )
            )
          )
        )
      ),

      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, 
          language === 'en' ? "Certifications" : "Certificazioni"
        ),
        certifications[language].map((cert, index) =>
          createElement(View, { 
            key: `cert-${index}`, 
            style: styles.certificationItem 
          },
            createElement(Text, { style: styles.certTitle }, cert.title),
            createElement(Text, { style: styles.certIssuer }, cert.issuer),
            createElement(Text, { style: styles.certDate }, cert.date),
            createElement(Text, { style: styles.description }, cert.description)
          )
        )
      )
    ),

    // Progetti
    createElement(Page, { size: "A4", style: styles.page },
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, t.projects.title),
        projects.map((project, index) =>
          createElement(View, { 
            key: `project-${index}`, 
            style: styles.projectContainer 
          },
            createElement(Text, { style: styles.projectTitle }, project.title),
            createElement(Text, { style: styles.projectDescription }, project.description),
            createElement(View, { style: styles.techStack },
              project.technologies.map((tech, i) =>
                createElement(Text, { 
                  key: `tech-${i}`, 
                  style: styles.tech 
                }, tech)
              )
            ),
            createElement(View, { style: styles.projectLinks },
              Object.entries(project.links).map(([key, value], i) =>
                createElement(Text, { 
                  key: `link-${i}`, 
                  style: styles.projectLink 
                }, `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
              )
            )
          )
        )
      )
    ),

    // Aggiungiamo la pagina per istruzione e certificazioni
    createElement(Page, { size: "A4", style: styles.page },
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, 
          language === 'en' ? 'Education' : 'Istruzione'
        ),
        education[language].map((edu, index) =>
          createElement(View, { 
            key: `edu-${index}`, 
            style: styles.educationItem 
          },
            createElement(Text, { style: styles.jobTitle }, edu.title),
            createElement(Text, { style: styles.institution }, edu.institution),
            createElement(Text, { style: styles.eduPeriod }, edu.period),
            edu.description && createElement(Text, { 
              style: styles.description 
            }, edu.description)
          )
        )
      ),

      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, 
          language === 'en' ? 'Certifications' : 'Certificazioni'
        ),
        certifications[language].map((cert, index) =>
          createElement(View, { 
            key: `cert-${index}`, 
            style: styles.certificationItem 
          },
            createElement(Text, { style: styles.certTitle }, cert.title),
            createElement(Text, { style: styles.certIssuer }, cert.issuer),
            createElement(Text, { style: styles.certDate }, cert.date),
            createElement(Text, { style: styles.description }, cert.description)
          )
        )
      )
    ),

    // Pagina Tesi
    createElement(Page, { size: "A4", style: styles.page },
      createElement(View, { style: styles.section },
        createElement(Text, { style: styles.sectionTitle }, 
          language === 'en' ? 'Thesis Project' : 'Progetto di Tesi'
        ),
        createElement(View, { style: styles.thesisContainer },
          createElement(Text, { style: styles.thesisTitle }, 
            thesis[language].title
          ),
          createElement(Text, { style: styles.institution }, 
            thesis[language].university
          ),
          createElement(Text, { style: styles.company }, 
            thesis[language].company
          ),
          createElement(Text, { style: styles.period }, 
            thesis[language].period
          ),
          createElement(Text, { style: styles.description }, 
            thesis[language].description
          ),
          createElement(View, { style: styles.techStack },
            thesis[language].technologies.map((tech, i) =>
              createElement(Text, { 
                key: `thesis-tech-${i}`, 
                style: styles.tech 
              }, tech)
            )
          )
        )
      )
    ),

    // Footer migliorato con data di generazione
    createElement(View, { style: styles.footer },
      createElement(Text, { style: styles.footerText }, 
        `Generated on ${new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'it-IT', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}`
      ),
      createElement(Text, { 
        style: styles.pageNumber,
        render: ({ pageNumber, totalPages }) => 
          `${pageNumber} / ${totalPages}` 
      })
    )
  );
};

// Genera entrambe le versioni del PDF
const generatePDFs = async () => {
  try {
    await renderToFile(
      createElement(PortfolioPDF, { language: "en" }),
      './public/downloads/Portfolio_Alessandro_Fare_EN.pdf'
    );
    console.log('English PDF generated successfully!');

    await renderToFile(
      createElement(PortfolioPDF, { language: "it" }),
      './public/downloads/Portfolio_Alessandro_Fare_IT.pdf'
    );
    console.log('Italian PDF generated successfully!');
  } catch (err) {
    console.error('Error generating PDFs:', err);
  }
};

generatePDFs(); 