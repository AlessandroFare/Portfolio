import ProjectPage from '@/components/ProjectPage';
import { getProjectBySlug } from '@/config/projects';

export default function ThesisProject() {
  const project = getProjectBySlug('thesis');
  
  if (!project) {
    return null;
  }

  return <ProjectPage project={project} />;
}
