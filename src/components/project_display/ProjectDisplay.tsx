import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Project from '../../interfaces/project';

import './ProjectDisplay.css';

interface ProjectDisplayProps {
  project: Project;
}

export default function ProjectDisplay({ project }: ProjectDisplayProps) {
  return (
    <div className='project_display'>
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <aside className='project_display_aside'>
        <p className={`project_module ${project.module}`}>{project.module}</p>
        <div>
          <a href={project.codeUrl} target='_blank' rel='noreferrer'>
            <FaGithub />
          </a>
          {project.deployUrl && (
            <a href={project.deployUrl} target='_blank' rel='noreferrer'>
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </aside>
      <p className='project_display_description'>{project.description}</p>
      {/* <ul>
        {project.skills.map((skill, index) => (
          <li key={`${project.name}-${index}`}>{skill}</li>
        ))}
      </ul> */}
    </div>
  );
}
