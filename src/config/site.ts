import { Metadata } from "next";

interface SiteConfig {
  name: string;
  description: string;
  url: string;
  metadata: Metadata;
}

export const siteConfig: SiteConfig = {
  name: "Alessandro Farè",
  description: "Full Stack Developer",
  url: "https://alessandrofare.netlify.app",
  metadata: {
    title: "Alessandro Farè",
    description: "Full Stack Developer",
    openGraph: {
      type: "website",
      locale: "it_IT",
      url: "https://alessandrofare.netlify.app",
      title: "Alessandro Farè",
      description: "Full Stack Developer",
      siteName: "Alessandro Farè",
    },
    twitter: {
      card: "summary_large_image",
      title: "Alessandro Farè",
      description: "Full Stack Developer",
    },
  },
}; 