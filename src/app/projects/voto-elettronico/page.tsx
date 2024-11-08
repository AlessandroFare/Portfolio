import ProjectPage from '@/components/ProjectPage';
import { getProjectBySlug } from '@/config/projects';

export default function VotoElettronico() {
  const project = getProjectBySlug('voto-elettronico');
  
  if (!project) {
    return null;
  }

  return <ProjectPage project={project} />;
} 