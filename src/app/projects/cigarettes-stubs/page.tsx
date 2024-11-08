import ProjectPage from '@/components/ProjectPage';
import { getProjectBySlug } from '@/config/projects';

export default function CigarettesStubsProject() {
  const project = getProjectBySlug('cigarettes-stubs');
  
  if (!project) {
    return null;
  }

  return <ProjectPage project={project} />;
}
