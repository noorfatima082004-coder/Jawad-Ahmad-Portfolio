import {
  FaHardHat,
  FaTasks,
  FaCheckDouble,
  FaRoad,
  FaCube,
  FaIndustry,
  FaCalculator,
  FaDraftingCompass,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaHandshake,
  FaFolderOpen,
} from 'react-icons/fa'
import { Panel } from './Panel'
import { competencies } from '../data/portfolio'

const icons = [
  FaHardHat,
  FaTasks,
  FaCheckDouble,
  FaRoad,
  FaCube,
  FaIndustry,
  FaCalculator,
  FaDraftingCompass,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaHandshake,
  FaFolderOpen,
]

export function Competencies() {
  return (
    <Panel number="04" title="CORE COMPETENCIES" className="competencies" dark>
      <div className="panel__body">
        <div className="comp-grid">
          {competencies.map((label, i) => {
            const Icon = icons[i]
            return (
              <div className="comp-item" key={label}>
                <Icon className="comp-item__icon" />
                <span className="comp-item__label">{label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Panel>
  )
}
