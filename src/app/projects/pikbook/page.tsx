import ProjectPage from '@/components/ProjectPage';
import { getProjectBySlug } from '@/config/projects';

export default function PikBookProject() {
  const project = getProjectBySlug('pikbook');
  
  if (!project) {
    return null;
  }

  return <ProjectPage project={project} />;
}
