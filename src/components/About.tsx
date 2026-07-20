import { Panel } from './Panel'
import { careerOverview, coreExpertise, images } from '../data/portfolio'

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
              <h3>CAREER OVERVIEW</h3>
              <p>{careerOverview}</p>
            </div>

            <div className="about__expertise">
              <h3>ADDITIONAL SKILLS</h3>
              <ul>
                {coreExpertise.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  )
}
