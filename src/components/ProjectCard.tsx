import {
  FaHardHat,
  FaRulerCombined,
  FaUsers,
  FaMoneyBillWave,
  FaRoad,
} from 'react-icons/fa'
import type { Project } from '../data/portfolio'
import { Panel } from './Panel'

const statIcons = [FaRulerCombined, FaMoneyBillWave, FaUsers, FaRoad, FaHardHat]

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
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
        <div>
          <dt>CLIENT</dt>
          <dd>{project.client}</dd>
        </div>
        <div>
          <dt>DURATION</dt>
          <dd>{project.duration}</dd>
        </div>
        <div>
          <dt>ROLE</dt>
          <dd>{project.role}</dd>
        </div>
      </dl>
      <div className="project-card__stats">
        {project.stats.map((stat, i) => {
          const Icon = statIcons[i % statIcons.length]
          return (
            <div className="project-card__stat" key={stat.label}>
              <Icon className="project-card__stat-icon" />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
