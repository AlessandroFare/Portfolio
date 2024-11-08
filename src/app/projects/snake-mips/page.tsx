import ProjectPage from '@/components/ProjectPage';
import { getProjectBySlug } from '@/config/projects';

export default function SnakeMipsProject() {
  const project = getProjectBySlug('snake-mips');
  
  if (!project) {
    return null;
  }

  return <ProjectPage project={project} />;
}
