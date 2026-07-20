import {
  FaBriefcase,
  FaBuilding,
  FaCity,
  FaHandshake,
} from 'react-icons/fa'
import { Panel } from './Panel'
import { aboutStats, coreExpertise, images } from '../data/portfolio'

const icons = [FaBriefcase, FaBuilding, FaCity, FaHandshake]

export function About() {
  return (
    <Panel number="02" title="ABOUT ME" className="about-panel">
      <div className="panel__body about">
        <div className="about__hero">
          <div className="about__photo-wrap">
            <img
              className="about__photo"
              src={images.portrait}
              alt="Jawad Ahmad — Civil Site Engineer"
            />
          </div>

          <div className="about__content">
            <div className="about__summary">
              <h3>PROFESSIONAL SUMMARY</h3>
              <p>
                Civil Site Engineer with 20+ years of hands-on experience
                delivering welfare complexes, flyovers, institutional buildings,
                and infrastructure projects across Punjab. Proven leadership in
                site execution, QA/QC, and on-time delivery.
              </p>
            </div>

            <div className="about__stats">
              {aboutStats.map((stat, i) => {
                const Icon = icons[i]
                return (
                  <div className="about__stat" key={stat.label}>
                    <div className="about__stat-icon">
                      <Icon />
                    </div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="about__expertise">
              <h3>CORE EXPERTISE</h3>
              <ul>
                {coreExpertise.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <blockquote className="about__philosophy">
              <strong>PHILOSOPHY</strong>
              &ldquo;We don&apos;t just construct structures, we build trust,
              quality and lasting relationships.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </Panel>
  )
}
