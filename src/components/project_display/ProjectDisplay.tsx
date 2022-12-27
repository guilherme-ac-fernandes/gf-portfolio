import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Project from '../../interfaces/project';

import './ProjectDisplay.css';

interface ProjectDisplayProps {
  project: Project;
}

export default function ProjectDisplay({ project }: ProjectDisplayProps) {
  return (
    <div className='project_display'>
      <p>{project.name}</p>
      <p>{project.description}</p>
      <img src={project.image} alt={project.name} />
      <ul>
        {project.skills.map((skill, index) => (
          <li key={`${project.name}-${index}`}>{skill}</li>
        ))}
      </ul>
      <a href={project.codeUrl}>
        <FaGithub />
      </a>
      {project.deployUrl && (
        <a href={project.deployUrl}>
          <FaExternalLinkAlt />
        </a>
      )}
      <p>{project.module}</p>
    </div>
  );
}
