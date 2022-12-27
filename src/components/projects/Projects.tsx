import projects from '../../data/projects';
import ProjectDisplay from '../project_display/ProjectDisplay';

import './Projects.css';

export default function Projects() {
  return (
    <section>
      <h3>Projetos</h3>
      <ul className='project_display_container'>
        {projects.map((project, index) => (
          <ProjectDisplay project={project} key={index} />
        ))}
      </ul>
    </section>
  );
}
