import {
  FaHardHat,
  FaClipboardCheck,
  FaDraftingCompass,
  FaRoad,
  FaBuilding,
} from 'react-icons/fa'
import { Panel } from './Panel'
import { timeline } from '../data/portfolio'

const icons = [FaHardHat, FaClipboardCheck, FaDraftingCompass, FaRoad, FaBuilding]

export function Timeline() {
  return (
    <Panel number="03" title="CAREER TIMELINE" className="timeline-panel">
      <div className="panel__body">
        <div className="timeline">
          {timeline.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div className="timeline__item" key={item.years}>
                <div className="timeline__dot">
                  <Icon />
                </div>
                <div>
                  <div className="timeline__years">{item.years}</div>
                  <div className="timeline__title">{item.title}</div>
                  <div className="timeline__company">{item.company}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Panel>
  )
}
