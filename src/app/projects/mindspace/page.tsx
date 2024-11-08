import ProjectPage from '@/components/ProjectPage';
import { getProjectBySlug } from '@/config/projects';

export default function MindSpaceProject() {
  const project = getProjectBySlug('mindspace');
  
  if (!project) {
    return null;
  }

  return <ProjectPage project={project} />;
}
