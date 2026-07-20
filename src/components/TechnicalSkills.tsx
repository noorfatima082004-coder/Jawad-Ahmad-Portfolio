import {
  FaHardHat,
  FaDraftingCompass,
  FaLaptop,
  FaClipboardCheck,
  FaRulerCombined,
  FaShieldAlt,
  FaCogs,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { Panel } from './Panel'
import { images, technicalSkills } from '../data/portfolio'

const icons = [
  FaCogs,
  FaMapMarkedAlt,
  FaDraftingCompass,
  FaLaptop,
  FaRulerCombined,
  FaClipboardCheck,
  FaHardHat,
  FaShieldAlt,
]

export function TechnicalSkills() {
  return (
    <Panel number="14" title="TECHNICAL SKILLS">
      <div className="panel__body">
        <div className="skills-layout">
          <img
            className="skills-layout__photo"
            src={images.survey}
            alt="Surveying total station"
          />
          <div className="skills-list">
            {technicalSkills.map((skill, i) => {
              const Icon = icons[i % icons.length]
              return (
                <div className="skill-row" key={skill.name}>
                  <Icon className="skill-row__icon" />
                  <span className="skill-row__name">{skill.name}</span>
                  <span className="skill-row__level">{skill.level}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Panel>
  )
}
