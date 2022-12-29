import projects from '../../data/projects';
import ProjectDisplay from '../project_display/ProjectDisplay';
import SectionTitle from '../section_title/SectionTitle';

import './Projects.css';

export default function Projects() {
  return (
    <section id='projects' className='project_container'>
      <SectionTitle
        title='Projetos'
        text='Confira alguns dos meus projetos recentes'
      />
      <ul className='project_display_container'>
        {projects.map((project, index) => (
          <ProjectDisplay project={project} key={index} />
        ))}
      </ul>
    </section>
  );
}
