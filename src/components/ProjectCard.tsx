import type { Project } from '../data/portfolio'
import { Panel } from './Panel'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const meta = [
    project.employer && { label: 'EMPLOYER', value: project.employer },
    project.client && { label: 'CLIENT', value: project.client },
    project.duration && { label: 'DURATION', value: project.duration },
    { label: 'ROLE', value: project.role },
  ].filter(Boolean) as { label: string; value: string }[]

  return (
    <Panel number={project.number} className="project-card" dark>
      <div className="project-card__media">
        <img src={project.image} alt={project.name} />
        <div className="project-card__overlay">
          <div className="project-card__label">PROJECT PORTFOLIO</div>
          <div className="project-card__name">{project.name}</div>
        </div>
      </div>
      <dl className="project-card__meta">
        {meta.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      {project.scope && project.scope.length > 0 && (
        <ul className="project-card__scope">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </Panel>
  )
}
