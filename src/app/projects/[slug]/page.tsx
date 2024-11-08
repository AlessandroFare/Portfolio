import React from 'react';
import { Metadata } from 'next';
import ProjectPage from '@/components/ProjectPage';
import { getProjectBySlug, projects } from '@/config/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: 'Progetto non trovato',
      description: 'Il progetto richiesto non è stato trovato'
    };
  }

  return {
    title: `${project.title} | Alessandro Farè`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.images.preview],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.images.preview],
    }
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
} 