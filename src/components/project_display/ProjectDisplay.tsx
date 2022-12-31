import React from 'react'

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Project from '../../interfaces/project'

import './ProjectDisplay.css'

interface ProjectDisplayProps {
  project: Project;
}

export default function ProjectDisplay({ project }: ProjectDisplayProps) {
  return (
    <div className="project_display">
      <img src={project.image} alt={project.name} />
      <div className="project_display_div">
        <h3>{project.name}</h3>
        <div>
          <a href={project.codeUrl} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          {project.deployUrl && (
            <a href={project.deployUrl} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      <p className="project_display_description">{project.description}</p>
      <p className={`project_module ${project.module}`}>{project.module}</p>
      {/* <ul>
        {project.skills.map((skill, index) => (
          <li key={`${project.name}-${index}`}>{skill}</li>
        ))}
      </ul> */}
    </div>
  )
}
