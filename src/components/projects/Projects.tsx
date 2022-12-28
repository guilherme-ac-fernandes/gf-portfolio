import projects from '../../data/projects';
import ProjectDisplay from '../project_display/ProjectDisplay';

import './Projects.css';

export default function Projects() {
  return (
    <section className='project_container'>
      <h2 className='project_container_title'>Projetos</h2>
      <ul className='project_display_container'>
        {projects.map((project, index) => (
          <ProjectDisplay project={project} key={index} />
        ))}
      </ul>
    </section>
  );
}
