import type { Project } from './projects';

interface TimelineItem {
  date: string;
  milestone: string;
}

interface ProjectTranslationContent {
  description: string;
  timeline: TimelineItem[];
  challenges: string[];
  solutions: string[];
}

type ProjectTranslations = Record<string, ProjectTranslationContent>;

export const projectTranslationsIT: ProjectTranslations = {
  'pikbook': {
    description: 'Full Stack responsive Social Network realizzato attraverso Node.js, MongoDB, Express.js e Passport.js e connesso a Cloudinary per l\'upload e l\'archiviazione delle immagini. PikBook è un Social Network che dà la possibilità ai propri utenti di condividere progetti personali tramite contenuti testuali e immagini.',
    timeline: [
      { date: 'Aprile 2020', milestone: 'Design e architettura del sistema' },
      { date: 'Aprile 2020', milestone: 'Sviluppo backend con Node.js e MongoDB' },
      { date: 'Maggio 2020', milestone: 'Implementazione frontend e integrazione Cloudinary' }
    ],
    challenges: [
      'Gestione efficiente delle immagini caricate',
      'Sistema di likes e commenti nascosti',
      'Ottimizzazione delle performance',
      'Sincronizzazione real-time dei dati'
    ],
    solutions: [
      'Integrazione con Cloudinary per storage e ottimizzazione immagini',
      'Implementazione di sistema di visualizzazione condizionale',
      'Utilizzo di caching e lazy loading',
      'Implementazione di WebSocket per aggiornamenti in tempo reale'
    ]
  },
  'mindspace': {
    description: 'MindSpace è un\'applicazione SaaS di gestione di progetti creativi. Gli utenti possono creare progetti, aggiungere note, caricare immagini e organizzare visivamente le loro idee utilizzando una semplice bacheca di tipo Kanban. Il focus è sulla semplicità e sulla user experience, ispirandosi allo stile di Koto Studio.',
    timeline: [
      { date: 'Ottobre 2024', milestone: 'Ideazione e design dell\'interfaccia' },
      { date: 'Novembre 2024', milestone: 'Sviluppo del sistema di note e categorie' },
      { date: 'Dicembre 2024', milestone: 'Implementazione sincronizzazione cloud' }
    ],
    challenges: [
      'Gestione efficiente dello stato dell\'applicazione',
      'Sincronizzazione in tempo reale tra dispositivi',
      'Ottimizzazione delle performance con molte note',
      'Integrazione con Supabase per autenticazione e storage'
    ],
    solutions: [
      'Utilizzo di React con Next.js per interfacce interattive',
      'Implementazione di Supabase per gestione backend',
      'Utilizzo di Tailwind CSS per stili reattivi',
      'Implementazione di Framer Motion per animazioni fluide'
    ]
  },
  'portfolio': {
    description: 'Portfolio personale sviluppato con Next.js e TypeScript, con focus su performance e accessibilità. Il sito è completamente responsive e include animazioni fluide, supporto multilingua e tema chiaro/scuro.',
    timeline: [
      { date: 'Gennaio 2024', milestone: 'Design e prototipazione' },
      { date: 'Febbraio 2024', milestone: 'Sviluppo componenti principali' },
      { date: 'Marzo 2024', milestone: 'Ottimizzazione e internazionalizzazione' }
    ],
    challenges: [
      'Implementazione di animazioni fluide',
      'Ottimizzazione delle performance',
      'Supporto multilingua',
      'Gestione del tema chiaro/scuro'
    ],
    solutions: [
      'Utilizzo di Framer Motion per le animazioni',
      'Implementazione di lazy loading e code splitting',
      'Sistema di internazionalizzazione con context',
      'Gestione temi con next-themes'
    ]
  },
  'ocr-invoice': {
    description: 'Applicativo Java per la classificazione automatica dei dati di fatture elettroniche tramite algoritmi di Machine Learning e rilevazione del testo con motore OCR. Il sistema permette di classificare collezioni di documenti associando i dati a otto campi fondamentali delle fatture.',
    timeline: [
      { date: 'Ottobre 2021', milestone: 'Analisi requisiti e studio fattibilità' },
      { date: 'Novembre 2021', milestone: 'Implementazione OCR e preprocessing' },
      { date: 'Dicembre 2021', milestone: 'Training modello ML e testing' }
    ],
    challenges: [
      'Accuratezza del riconoscimento testo',
      'Preprocessing efficiente delle immagini',
      'Classificazione documenti eterogenei',
      'Gestione di diversi formati di fatture'
    ],
    solutions: [
      'Utilizzo di Tesseract OCR con Leptonica',
      'Implementazione di tecniche avanzate di preprocessing',
      'Sviluppo di algoritmi ML personalizzati',
      'Sistema modulare di elaborazione documenti'
    ]
  },
  'voto-elettronico': {
    description: 'Applicazione Java Swing MVC per la gestione di sessioni di voto elettronico, connessa a un database MySQL. Il sistema permette di configurare e gestire sessioni di voto per elezioni o referendum, con diverse modalità di votazione e scrutinio.',
    timeline: [
      { date: 'Dicembre 2021', milestone: 'Design dell\'architettura MVC' },
      { date: 'Gennaio 2022', milestone: 'Implementazione sistema di autenticazione' },
      { date: 'Febbraio 2022', milestone: 'Sviluppo sistema di scrutinio' }
    ],
    challenges: [
      'Sicurezza del sistema di voto',
      'Verifica dell\'identità degli elettori',
      'Gestione di diverse modalità di votazione',
      'Implementazione del sistema di scrutinio'
    ],
    solutions: [
      'Utilizzo di pattern MVC e DAO',
      'Implementazione di autenticazione sicura',
      'Sistema automatico di generazione CF',
      'Sviluppo di algoritmi di scrutinio flessibili'
    ]
  },
  'snake-mips': {
    description: 'Il famoso gioco di Snake sviluppato in MIPS Assembly. È stato sviluppato utilizzando Mars MIPS Simulator. Richiede la Keyboard and Display MMIO e il Bitmap Display che devono essere connessi a Mars MIPS. È un gioco semplice da giocare: bisogna muovere il serpente con le chiavi wasd, mangiare i frutti arancioni per ingrandirlo ed evitare di colpire la sua stessa coda.',
    timeline: [
      { date: 'Gennaio 2019', milestone: 'Analisi e progettazione iniziale' },
      { date: 'Gennaio 2019', milestone: 'Sviluppo del core engine' },
      { date: 'Febbraio 2019', milestone: 'Implementazione grafica e testing' }
    ],
    challenges: [
      'Implementazione della logica di gioco in Assembly',
      'Gestione della grafica con MMIO',
      'Ottimizzazione delle performance',
      'Gestione delle collisioni'
    ],
    solutions: [
      'Utilizzo efficiente dei registri MIPS',
      'Implementazione di routine grafiche ottimizzate',
      'Algoritmi efficienti per la gestione del serpente',
      'Sistema di controllo collisioni ottimizzato'
    ]
  },
  'thesis': {
    description: 'Applicativo Java per la categorizzazione automatica dei dati di fatture elettroniche passive a livello globale attraverso algoritmi di Machine Learning. Il sistema permette di classificare collezioni di documenti associando i dati a otto campi fondamentali delle fatture, imparando da documenti preclassificati.',
    timeline: [
      { date: 'Ottobre 2021', milestone: 'Analisi dei requisiti e studio di fattibilità' },
      { date: 'Novembre 2021', milestone: 'Implementazione OCR e preprocessing' },
      { date: 'Dicembre 2021', milestone: 'Training e validazione modelli ML' }
    ],
    challenges: [
      'Riconoscimento accurato del testo dalle fatture',
      'Preprocessing efficiente dei dati',
      'Classificazione accurata dei documenti',
      'Gestione di diversi formati di fatture'
    ],
    solutions: [
      'Utilizzo di Tesseract OCR con Leptonica',
      'Implementazione di tecniche di preprocessing avanzate',
      'Utilizzo di Weka per ML',
      'Sviluppo di un sistema di indicizzazione documenti'
    ]
  },
  'cigarettes-stubs': {
    description: 'Startup per il progetto Green Jobs Nature. È stato creato un porta sigarette e mozziconi tascabile in polietilene, per ridurre l\'inquinamento e rendere le città più pulite. Sono stati sviluppati e stampati due prototipi diversi da poter utilizzare, composti dal logo della startup.',
    timeline: [
      { date: 'Febbraio 2016', milestone: 'Ideazione e analisi di mercato' },
      { date: 'Marzo 2016', milestone: 'Design e prototipazione' },
      { date: 'Aprile 2016', milestone: 'Test e validazione del prodotto' }
    ],
    challenges: [
      'Design di un prodotto pratico e portatile',
      'Scelta dei materiali ecosostenibili',
      'Creazione di un brand riconoscibile',
      'Sviluppo di una strategia di mercato'
    ],
    solutions: [
      'Utilizzo di polietilene riciclabile',
      'Design ergonomico e compatto',
      'Creazione di un\'identità visiva forte',
      'Campagna di sensibilizzazione ambientale'
    ]
  }
};

export const projectTranslationsEN: ProjectTranslations = {
  'pikbook': {
    description: 'Full Stack responsive Social Network built with Node.js, MongoDB, Express.js, and Passport.js, connected to Cloudinary for image upload and storage. PikBook is a Social Network that allows users to share personal projects through text content and images.',
    timeline: [
      { date: 'April 2020', milestone: 'System design and architecture' },
      { date: 'April 2020', milestone: 'Backend development with Node.js and MongoDB' },
      { date: 'May 2020', milestone: 'Frontend implementation and Cloudinary integration' }
    ],
    challenges: [
      'Efficient management of uploaded images',
      'Hidden likes and comments system',
      'Performance optimization',
      'Real-time data synchronization'
    ],
    solutions: [
      'Cloudinary integration for storage and image optimization',
      'Implementation of conditional display system',
      'Use of caching and lazy loading',
      'WebSocket implementation for real-time updates'
    ]
  },
  'mindspace': {
    description: 'MindSpace is a SaaS application for creative project management. Users can create projects, add notes, upload images, and visually organize their ideas using a simple Kanban board. The focus is on simplicity and user experience, inspired by Koto Studio\'s style.',
    timeline: [
      { date: 'October 2024', milestone: 'Interface design and ideation' },
      { date: 'November 2024', milestone: 'Notes and categories system development' },
      { date: 'December 2024', milestone: 'Cloud synchronization implementation' }
    ],
    challenges: [
      'Efficient application state management',
      'Real-time synchronization between devices',
      'Performance optimization with many notes',
      'Supabase integration for authentication and storage'
    ],
    solutions: [
      'Using React with Next.js for interactive interfaces',
      'Implementing Supabase for backend management',
      'Using Tailwind CSS for responsive styling',
      'Implementing Framer Motion for fluid animations'
    ]
  },
  'portfolio': {
    description: 'Personal portfolio developed with Next.js and TypeScript, focusing on performance and accessibility. The site is fully responsive and includes smooth animations, multilingual support, and light/dark theme.',
    timeline: [
      { date: 'January 2024', milestone: 'Design and prototyping' },
      { date: 'February 2024', milestone: 'Main components development' },
      { date: 'March 2024', milestone: 'Optimization and internationalization' }
    ],
    challenges: [
      'Implementation of smooth animations',
      'Performance optimization',
      'Multilingual support',
      'Light/dark theme management'
    ],
    solutions: [
      'Use of Framer Motion for animations',
      'Implementation of lazy loading and code splitting',
      'Internationalization system with context',
      'Theme management with next-themes'
    ]
  },
  'ocr-invoice': {
    description: 'Automatic invoice recognition and classification system using OCR and Machine Learning.',
    timeline: [
      { date: 'October 2021', milestone: 'Requirements analysis and feasibility study' },
      { date: 'November 2021', milestone: 'OCR and preprocessing implementation' },
      { date: 'December 2021', milestone: 'ML model training and testing' }
    ],
    challenges: [
      'Text recognition accuracy',
      'Heterogeneous document classification',
      'Handling different invoice formats'
    ],
    solutions: [
      'Advanced image preprocessing',
      'ML algorithms for classification',
      'Modular processing pipeline'
    ]
  },
  'voto-elettronico': {
    description: 'Java Swing MVC application for managing electronic voting sessions, connected to a MySQL database. The system allows configuring and managing voting sessions for elections or referendums, with different voting and counting methods.',
    timeline: [
      { date: 'December 2021', milestone: 'MVC architecture design' },
      { date: 'January 2022', milestone: 'Authentication system implementation' },
      { date: 'February 2022', milestone: 'Vote counting system development' }
    ],
    challenges: [
      'Voting system security',
      'Voter identity verification',
      'Management of different voting methods',
      'Vote counting system implementation'
    ],
    solutions: [
      'Use of MVC and DAO patterns',
      'Secure authentication implementation',
      'Automatic fiscal code generation system',
      'Development of flexible counting algorithms'
    ]
  },
  'snake-mips': {
    description: 'The famous Snake game developed in MIPS Assembly. It was developed using Mars MIPS Simulator. It requires the Keyboard and Display MMIO and Bitmap Display to be connected to Mars MIPS. It\'s a simple game to play: move the snake with wasd keys, eat orange fruits to grow it, and avoid hitting its own tail.',
    timeline: [
      { date: 'January 2019', milestone: 'Initial analysis and design' },
      { date: 'January 2019', milestone: 'Core engine development' },
      { date: 'February 2019', milestone: 'Graphics implementation and testing' }
    ],
    challenges: [
      'Game logic implementation in Assembly',
      'Graphics management with MMIO',
      'Performance optimization',
      'Collision handling'
    ],
    solutions: [
      'Efficient use of MIPS registers',
      'Optimized graphics routines implementation',
      'Efficient snake management algorithms',
      'Optimized collision detection system'
    ]
  },
  'thesis': {
    description: 'Java application for automatic categorization of global passive electronic invoices using Machine Learning algorithms. The system classifies document collections by mapping data to eight fundamental invoice fields, learning from pre-classified documents.',
    timeline: [
      { date: 'October 2021', milestone: 'Requirements analysis and feasibility study' },
      { date: 'November 2021', milestone: 'OCR implementation and preprocessing' },
      { date: 'December 2021', milestone: 'ML model training and validation' }
    ],
    challenges: [
      'Accurate text recognition from invoices',
      'Efficient data preprocessing',
      'Accurate document classification',
      'Handling different invoice formats'
    ],
    solutions: [
      'Use of Tesseract OCR with Leptonica',
      'Implementation of advanced preprocessing techniques',
      'Use of Weka for ML',
      'Development of document indexing system'
    ]
  },
  'cigarettes-stubs': {
    description: 'Startup for the Green Jobs Nature project. A portable cigarette and cigarette butts holder made of polyethylene was created to reduce pollution and make cities cleaner. Two different prototypes were developed and printed, featuring the startup\'s logo.',
    timeline: [
      { date: 'February 2016', milestone: 'Ideation and market analysis' },
      { date: 'March 2016', milestone: 'Design and prototyping' },
      { date: 'April 2016', milestone: 'Product testing and validation' }
    ],
    challenges: [
      'Design of a practical and portable product',
      'Selection of eco-sustainable materials',
      'Creation of a recognizable brand',
      'Development of a market strategy'
    ],
    solutions: [
      'Use of recyclable polyethylene',
      'Ergonomic and compact design',
      'Creation of a strong visual identity',
      'Environmental awareness campaign'
    ]
  }
}; 