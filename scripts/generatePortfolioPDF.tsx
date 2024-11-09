import * as React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Language {
  name: string;
  level: string;
  details?: {
    listening: string;
    reading: string;
    speaking: string;
    writing: string;
  };
}

interface Contact {
  email: string;
  website: string;
  github: string;
  linkedin: string;
}

interface Skills {
  development: string[];
  frameworks: string[];
  tools: string[];
}

interface PortfolioData {
  about: {
    intro: string;
    location: string;
  };
  experience: Experience[];
  skills: Skills;
  languages: Language[];
  interests: string[];
  contact: Contact;
}

interface Translations {
  en: {
    about: {
      title: string;
      skills: {
        title: string;
        development: string;
        frameworks: string;
        other: string;
      };
      languages: {
        title: string;
      };
      interests: {
        title: string;
      };
    };
    experience: {
      title: string;
    };
    projects: {
      title: string;
    };
  };
  it: {
    about: {
      title: string;
      skills: {
        title: string;
        development: string;
        frameworks: string;
        other: string;
      };
      languages: {
        title: string;
      };
      interests: {
        title: string;
      };
    };
    experience: {
      title: string;
    };
    projects: {
      title: string;
    };
  };
}

// Importa i dati direttamente qui invece di importarli da altri file
const projects = [
  {
    title: 'MindSpace',
    description: 'Web application for organizing thoughts and notes',
    technologies: ['React', 'Next.js', 'TypeScript'],
    links: {
      demo: 'https://mindspace.vercel.app',
      github: 'https://github.com/AlessandroFare/mindspace'
    }
  },
  // ... altri progetti
];

// Dati statici corretti che corrispondono alle interfacce
const portfolioData: Record<'en' | 'it', PortfolioData> = {
  en: {
    about: {
      intro: "Full Stack Developer with a Computer Science degree...",
      location: "Milan, Italy"
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
    ],
    skills: {
      development: ["TypeScript", "JavaScript", "Java"],
      frameworks: ["React", "Next.js", "Node.js"],
      tools: ["Git", "AWS", "Docker"]
    },
    languages: [
      {
        name: "Italian",
        level: "Native"
      },
      {
        name: "English",
        level: "B2",
        details: {
          listening: "B1",
          reading: "B2",
          speaking: "B1",
          writing: "B2"
        }
      }
    ],
    interests: ["Soccer", "Martial Arts", "Swimming"],
    contact: {
      email: "ale14798@hotmail.com",
      website: "alessandrofare.netlify.app",
      github: "github.com/AlessandroFare",
      linkedin: "linkedin.com/in/alessandro-fare"
    }
  },
  it: {
    about: {
      intro: "Sviluppatore Full Stack con laurea in Informatica presso l'Università degli Studi di Milano. Esperto in tecnologie web moderne e appassionato di creazione di applicazioni efficienti e user-friendly.",
      location: "Milano, Italia"
    },
    experience: [
      {
        title: "Backend Developer",
        company: "SIVA",
        period: "2024 - Presente",
        description: "Sviluppo di applicazioni backend con NestJS e integrazione con servizi cloud.",
        technologies: ["NestJS", "TypeScript", "AWS"]
      },
      {
        title: "Backend Developer",
        company: "Publicis Media",
        period: "2024",
        description: "Sviluppo e manutenzione di sistemi backend con Spring Boot e AWS.",
        technologies: ["Java", "Spring Boot", "AWS"]
      },
      {
        title: "OutSystems Developer",
        company: "KPMG",
        period: "2022 - 2024",
        description: "Sviluppo di applicazioni enterprise con la piattaforma OutSystems.",
        technologies: ["OutSystems", "JavaScript", "SQL"]
      }
    ],
    skills: {
      development: ["TypeScript", "JavaScript", "Java", "Python", "C", "SQL", "HTML/CSS"],
      frameworks: ["React", "Next.js", "Node.js", "Spring Boot", "OutSystems", "Express.js"],
      tools: ["Git", "AWS", "Docker", "MongoDB", "PostgreSQL"]
    },
    languages: [
      {
        name: "Italiano",
        level: "Madrelingua"
      },
      {
        name: "Inglese",
        level: "B2",
        details: {
          listening: "B1",
          reading: "B2",
          speaking: "B1",
          writing: "B2"
        }
      }
    ],
    interests: [
      "Calcio",
      "Arti Marziali (Kenpo Jutsu)",
      "Nuoto",
      "Arrampicata",
      "Escursionismo",
      "Produzione Musicale",
      "Design Grafico"
    ],
    contact: {
      email: "ale14798@hotmail.com",
      website: "alessandrofare.netlify.app",
      github: "github.com/AlessandroFare",
      linkedin: "linkedin.com/in/alessandro-fare"
    }
  }
};

const translations: Translations = {
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

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  header: {
    marginBottom: 30,
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
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    color: '#3B82F6',
    borderBottom: '1 solid #E5E7EB',
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    color: '#4B5563',
  },
  contactText: {
    fontSize: 12,
    marginBottom: 5,
    color: '#4B5563',
  },
  jobTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  company: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 5,
  },
  period: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    marginBottom: 10,
    color: '#4B5563',
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
  skillCategory: {
    marginBottom: 15,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#374151',
  },
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skill: {
    fontSize: 10,
    backgroundColor: '#F3F4F6',
    padding: '4 8',
    borderRadius: 4,
    color: '#4B5563',
  },
  languageItem: {
    marginBottom: 10,
  },
  languageName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  languageLevel: {
    fontSize: 12,
    color: '#6B7280',
  },
  interestGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  interest: {
    fontSize: 12,
    backgroundColor: '#F3F4F6',
    padding: '4 8',
    borderRadius: 4,
    color: '#4B5563',
  },
  projectItem: {
    marginBottom: 20,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  link: {
    fontSize: 10,
    color: '#3B82F6',
    textDecoration: 'underline',
    marginBottom: 5,
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 20,
    right: 30,
    color: '#9CA3AF',
  },
  contactInfo: {
    marginTop: 10,
    marginBottom: 20,
  },
  experienceItem: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottom: '1 solid #E5E7EB',
  },
});

const PortfolioPDF = ({ language }: { language: 'en' | 'it' }) => {
  const t = translations[language];
  const data = portfolioData[language];

  const getSkillCategoryTitle = (category: keyof Skills): string => {
    const skillMap: Record<keyof Skills, string> = {
      development: t.about.skills.development,
      frameworks: t.about.skills.frameworks,
      tools: t.about.skills.other
    };
    return skillMap[category];
  };

  return (
    <Document>
      {/* Prima Pagina */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Alessandro Farè</Text>
          <Text style={styles.subtitle}>Full Stack Developer</Text>
          <View style={styles.contactInfo}>
            {Object.entries(data.contact).map(([key, value]) => (
              <Text key={key} style={styles.contactText}>{value}</Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.about.title}</Text>
          <Text style={styles.text}>{data.about.intro}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience.title}</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{exp.title}</Text>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.period}>{exp.period}</Text>
              <Text style={styles.description}>{exp.description}</Text>
              <View style={styles.techStack}>
                {exp.technologies.map((tech, i) => (
                  <Text key={i} style={styles.tech}>{tech}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>

      {/* Seconda Pagina */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.about.skills.title}</Text>
          {(Object.keys(data.skills) as Array<keyof Skills>).map((category) => (
            <View key={category} style={styles.skillCategory}>
              <Text style={styles.categoryTitle}>
                {getSkillCategoryTitle(category)}
              </Text>
              <View style={styles.skillGrid}>
                {data.skills[category].map((skill, i) => (
                  <Text key={i} style={styles.skill}>{skill}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.about.languages.title}</Text>
          {data.languages.map((lang, index) => (
            <View key={index} style={styles.languageItem}>
              <Text style={styles.languageName}>{lang.name}</Text>
              <Text style={styles.languageLevel}>{lang.level}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.about.interests.title}</Text>
          <View style={styles.interestGrid}>
            {data.interests.map((interest, i) => (
              <Text key={i} style={styles.interest}>{interest}</Text>
            ))}
          </View>
        </View>
      </Page>

      {/* Terza Pagina - Progetti */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.projects.title}</Text>
          {projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.description}>{project.description}</Text>
              <View style={styles.techStack}>
                {project.technologies.map((tech, i) => (
                  <Text key={i} style={styles.tech}>{tech}</Text>
                ))}
              </View>
              {project.links.demo && (
                <Text style={styles.link}>Demo: {project.links.demo}</Text>
              )}
              {project.links.github && (
                <Text style={styles.link}>GitHub: {project.links.github}</Text>
              )}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

// Genera entrambe le versioni del PDF
const generatePDFs = async () => {
  try {
    await renderToFile(
      React.createElement(PortfolioPDF, { language: "en" }),
      './public/downloads/Portfolio_Alessandro_Fare_EN.pdf'
    );
    console.log('English PDF generated successfully!');

    await renderToFile(
      React.createElement(PortfolioPDF, { language: "it" }),
      './public/downloads/Portfolio_Alessandro_Fare_IT.pdf'
    );
    console.log('Italian PDF generated successfully!');
  } catch (err) {
    console.error('Error generating PDFs:', err);
  }
};

generatePDFs(); 