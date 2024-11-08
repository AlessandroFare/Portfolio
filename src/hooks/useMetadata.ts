import { metadataIT, metadataEN } from '@/config/metadata.i18n';

export function generateMetadata(language: string = 'it') {
  const metadata = language === 'it' ? metadataIT : metadataEN;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords.join(', '),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      locale: language,
      type: 'website',
      url: 'https://alessandrofare.netlify.app',
      siteName: metadata.title,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
    alternates: {
      canonical: 'https://alessandrofare.netlify.app',
      languages: {
        'it': 'https://alessandrofare.netlify.app/it',
        'en': 'https://alessandrofare.netlify.app/en',
      },
    },
  };
} 