interface AboutTranslations {
  description: string[];
  education: {
    title: string;
    degree: string;
    university: string;
    period: string;
    description: string[];
  }[];
}

export const aboutIT: AboutTranslations = {
  description: [
    'Sono uno sviluppatore informatico con una laurea in Informatica presso l\'Università degli Studi di Milano Statale.',
    'Durante il mio percorso accademico, ho acquisito competenze in diversi linguaggi di programmazione, applicandole nello sviluppo di vari progetti personali.',
    'La mia passione per la tecnologia e l\'innovazione mi spinge a rimanere costantemente aggiornato sulle ultime tendenze e best practices del settore.'
  ],
  education: [
    {
      title: 'Laurea in Informatica',
      degree: 'Laurea Triennale',
      university: 'Università degli Studi di Milano',
      period: '2017 - 2022',
      description: [
        'Curriculum incentrato su programmazione, algoritmi e strutture dati',
        'Progetti pratici in vari linguaggi di programmazione',
        'Tesi sulla classificazione automatica dei dati di fatture attraverso il Machine Learning'
      ]
    }
  ]
};

export const aboutEN: AboutTranslations = {
  description: [
    'I am a software developer with a degree in Computer Science from the University of Milan.',
    'During my academic journey, I gained expertise in various programming languages, applying them in the development of several personal projects.',
    'My passion for technology and innovation drives me to stay constantly updated on the latest industry trends and best practices.'
  ],
  education: [
    {
      title: 'Computer Science Degree',
      degree: 'Bachelor\'s Degree',
      university: 'University of Milan',
      period: '2017 - 2022',
      description: [
        'Curriculum focused on programming, algorithms and data structures',
        'Practical projects in various programming languages',
        'Thesis on automatic classification of invoice data through Machine Learning'
      ]
    }
  ]
}; 