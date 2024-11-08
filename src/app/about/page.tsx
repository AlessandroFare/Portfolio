"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Flag, Code, Globe, Database, Cloud, Brain, Lock, BarChart2, Cpu, Coffee, Server, Box, Dumbbell, Waves, Mountain, Swords, Palette, Music, Settings } from 'lucide-react';
import { InfoItem } from '@/components/about/InfoItem';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { aboutIT, aboutEN } from '@/config/about.i18n';

// Aggiungiamo un'interfaccia per le competenze
interface Skill {
  name: {
    it: string;
    en: string;
  };
  icon?: React.ElementType;
}

// Organizziamo meglio i dati
const developmentSkills: Skill[] = [
  { 
    name: {
      it: "JavaScript/TypeScript",
      en: "JavaScript/TypeScript"
    }, 
    icon: Code 
  },
  { 
    name: {
      it: "Java",
      en: "Java"
    }, 
    icon: Coffee 
  },
  { 
    name: {
      it: "Python",
      en: "Python"
    }, 
    icon: Code 
  },
  { 
    name: {
      it: "C",
      en: "C"
    }, 
    icon: Code 
  },
  { 
    name: {
      it: "PHP",
      en: "PHP"
    }, 
    icon: Code 
  },
  { 
    name: {
      it: "HTML/CSS",
      en: "HTML/CSS"
    }, 
    icon: Code 
  },
  { 
    name: {
      it: "SQL",
      en: "SQL"
    }, 
    icon: Database 
  },
  { 
    name: {
      it: "Assembly",
      en: "Assembly"
    }, 
    icon: Cpu 
  }
];

const frameworkSkills: Skill[] = [
  { 
    name: {
      it: "React",
      en: "React"
    }, 
    icon: Box 
  },
  { 
    name: {
      it: "Next.js",
      en: "Next.js"
    }, 
    icon: Box 
  },
  { 
    name: {
      it: "Node.js",
      en: "Node.js"
    }, 
    icon: Server 
  },
  { 
    name: {
      it: "NestJS",
      en: "NestJS"
    }, 
    icon: Server 
  },
  { 
    name: {
      it: "Spring Boot",
      en: "Spring Boot"
    }, 
    icon: Server 
  },
  { 
    name: {
      it: "Express",
      en: "Express"
    }, 
    icon: Server 
  },
  { 
    name: {
      it: "OutSystems",
      en: "OutSystems"
    }, 
    icon: Box 
  },
  { 
    name: {
      it: "MongoDB",
      en: "MongoDB"
    }, 
    icon: Database 
  }
];

const otherSkills: Skill[] = [
  { 
    name: {
      it: "Machine Learning",
      en: "Machine Learning"
    }, 
    icon: Brain 
  },
  { 
    name: {
      it: "Crittografia",
      en: "Cryptography"
    }, 
    icon: Lock 
  },
  { 
    name: {
      it: "Ricerca Operativa",
      en: "Operations Research"
    }, 
    icon: BarChart2 
  },
  { 
    name: {
      it: "Sistemi Operativi",
      en: "Operating Systems"
    }, 
    icon: Cpu 
  },
  { 
    name: {
      it: "Basi di Dati",
      en: "Databases"
    }, 
    icon: Database 
  },
  { 
    name: {
      it: "Sistemi Embedded",
      en: "Embedded Systems"
    }, 
    icon: Cpu 
  },
  { 
    name: {
      it: "Reti di Calcolatori",
      en: "Computer Networks"
    }, 
    icon: Globe 
  },
  { 
    name: {
      it: "Cloud Computing",
      en: "Cloud Computing"
    }, 
    icon: Cloud 
  }
];

// Aggiorniamo l'interfaccia Hobby per supportare le traduzioni
interface Hobby {
  name: {
    it: string;
    en: string;
  };
  icon: React.ElementType;
  description?: {
    it: string;
    en: string;
  };
}

// Aggiorniamo gli array sports e creative con le traduzioni
const sports: Hobby[] = [
  { 
    name: {
      it: "Calcio",
      en: "Football"
    }, 
    icon: Dumbbell 
  },
  { 
    name: {
      it: "Nuoto",
      en: "Swimming"
    }, 
    icon: Waves 
  },
  { 
    name: {
      it: "Arrampicata",
      en: "Climbing"
    }, 
    icon: Mountain 
  },
  { 
    name: {
      it: "Arti Marziali",
      en: "Martial Arts"
    }, 
    icon: Swords,
    description: {
      it: "Kenpo Jutsu",
      en: "Kenpo Jutsu"
    }
  },
  { 
    name: {
      it: "Camminate in montagna",
      en: "Mountain Hiking"
    }, 
    icon: Mountain 
  }
];

const creative: Hobby[] = [
  { 
    name: {
      it: "Graphic Design",
      en: "Graphic Design"
    }, 
    icon: Palette 
  },
  { 
    name: {
      it: "Produzione musicale",
      en: "Music Production"
    }, 
    icon: Music 
  },
  { 
    name: {
      it: "Customizzazione dispositivi",
      en: "Device Customization"
    }, 
    icon: Settings 
  }
];

// Componente per la card della competenza
function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:shadow-lg 
                 hover:bg-white dark:hover:bg-gray-800 transition-all group"
    >
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />}
        <span className="group-hover:text-blue-500 transition-colors">
          {skill.name[language]}
        </span>
      </div>
    </motion.div>
  );
}

// Aggiorniamo il componente HobbyCard per usare le traduzioni
function HobbyCard({ hobby }: { hobby: Hobby }) {
  const { language } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:shadow-lg 
                 hover:bg-white dark:hover:bg-gray-800 transition-all group"
    >
      <div className="flex items-center gap-3">
        <hobby.icon className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
        <div>
          <span className="group-hover:text-blue-500 transition-colors">
            {hobby.name[language]}
          </span>
          {hobby.description && (
            <span className="text-sm text-gray-500 block">
              {hobby.description[language]}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Componente migliorato per il livello di lingua
function LanguageLevel({ name, level }: { name: string; level: string }) {
  const getProgress = (level: string) => {
    switch(level) {
      case 'C2': return '100%';
      case 'C1': return '83%';
      case 'B2': return '66%';
      case 'B1': return '50%';
      case 'A2': return '33%';
      case 'A1': return '16%';
      default: return '0%';
    }
  };

  const getColor = (level: string) => {
    switch(level) {
      case 'B2': return 'bg-green-500 dark:bg-green-400';
      case 'B1': return 'bg-blue-500 dark:bg-blue-400';
      case 'A2': return 'bg-yellow-500 dark:bg-yellow-400';
      default: return 'bg-gray-500 dark:bg-gray-400';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:shadow-md transition-all"
    >
      <div className="flex justify-between items-center mb-2">
        <span>{name}</span>
        <span className={`px-2 py-1 rounded text-sm font-medium
          ${level === 'B2' ? 'text-green-600 dark:text-green-400' :
            level === 'B1' ? 'text-blue-600 dark:text-blue-400' :
            'text-yellow-600 dark:text-yellow-400'}`}
        >
          {level}
        </span>
      </div>
      <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: getProgress(level) }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`h-full rounded-full ${getColor(level)}`}
        />
      </div>
    </motion.div>
  );
}

// Aggiungiamo un'interfaccia per le lingue
interface Language {
  name: {
    it: string;
    en: string;
  };
  level?: string;
  isNative?: boolean;
  skills?: {
    name: {
      it: string;
      en: string;
    };
    level: string;
  }[];
}

export default function About() {
  const { t, language } = useLanguage();
  const aboutContent = language === 'it' ? aboutIT : aboutEN;

  // Spostiamo la definizione delle lingue qui dentro dove abbiamo accesso a t
  const languages: Language[] = [
    {
      name: {
        it: "Italiano",
        en: "Italian"
      },
      isNative: true
    },
    {
      name: {
        it: "Inglese",
        en: "English"
      },
      skills: [
        {
          name: {
            it: t.about.languages.levels.listening,
            en: "Listening"
          },
          level: "B1"
        },
        {
          name: {
            it: t.about.languages.levels.reading,
            en: "Reading"
          },
          level: "B2"
        },
        {
          name: {
            it: t.about.languages.levels.speaking,
            en: "Speaking"
          },
          level: "B1"
        },
        {
          name: {
            it: t.about.languages.levels.interaction,
            en: "Interaction"
          },
          level: "B1"
        },
        {
          name: {
            it: t.about.languages.levels.writing,
            en: "Writing"
          },
          level: "B2"
        }
      ]
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-32"
          >
            {/* Info Personali */}
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
              <h2 className="text-lg font-normal mb-12 pl-8">{t.about.personalInfo.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pl-8">
                <div className="space-y-6">
                  <InfoItem icon={Calendar} label={t.about.personalInfo.birthDate} value="14/07/1998" />
                  <InfoItem icon={Flag} label={t.about.personalInfo.nationality} value="Italiana" />
                  <InfoItem icon={Mail} label={t.about.personalInfo.email} value="ale14798@hotmail.com" />
                  <InfoItem icon={Phone} label={t.about.personalInfo.phone} value="(+39) 3484408364" />
                  <InfoItem 
                    icon={MapPin} 
                    label={t.about.personalInfo.address} 
                    value="Via Lodovico il Moro, 179, Milano"
                  />
                </div>
                <div className="space-y-6 text-gray-600 dark:text-gray-400">
                  {aboutContent.description.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            {/* Competenze */}
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
              <h2 className="text-lg font-normal mb-12 pl-8">{t.about.skills.title}</h2>
              <div className="pl-8 space-y-12">
                <div>
                  <h3 className="text-2xl font-light mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                    {t.about.skills.development}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {developmentSkills.map((skill) => (
                      <SkillCard key={skill.name.en} skill={skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                    {t.about.skills.frameworks}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {frameworkSkills.map((skill) => (
                      <SkillCard key={skill.name.en} skill={skill} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                    {t.about.skills.other}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {otherSkills.map((skill) => (
                      <SkillCard key={skill.name.en} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Lingue e Interessi */}
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
              <h2 className="text-lg font-normal mb-12 pl-8">{t.about.languages.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pl-8">
                {/* Lingue */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-light mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                    {t.about.languages.title}
                  </h3>
                  <div className="space-y-8">
                    {languages.map((lang, index) => (
                      <div key={index}>
                        <h4 className="text-xl font-light mb-4">{lang.name[language]}</h4>
                        {lang.isNative ? (
                          <p className="text-gray-600 dark:text-gray-400">{t.about.languages.native}</p>
                        ) : (
                          <div className="grid grid-cols-1 gap-3 text-gray-600 dark:text-gray-400">
                            {lang.skills?.map((skill, i) => (
                              <LanguageLevel 
                                key={i} 
                                name={skill.name[language]} 
                                level={skill.level} 
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interessi */}
                <div className="space-y-8">
                  <h3 className="text-2xl font-light mb-8 pb-2 border-b border-gray-200 dark:border-gray-800">
                    {t.about.interests.title}
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-light mb-4">{t.about.interests.sports}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {sports.map((sport) => (
                          <HobbyCard key={sport.name.it} hobby={sport} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-light mb-4">{t.about.interests.creative}</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {creative.map((hobby) => (
                          <HobbyCard key={hobby.name.it} hobby={hobby} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
              <h2 className="text-lg font-normal mb-12 pl-8">Education</h2>
              <div className="pl-8 space-y-12">
                {aboutContent.education.map((edu, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-light mb-4">{edu.title}</h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-400">
                      <p>{edu.degree} - {edu.university}</p>
                      <p>{edu.period}</p>
                      <ul className="list-disc pl-5 space-y-2">
                        {edu.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
} 