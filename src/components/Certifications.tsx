import { Panel } from './Panel'
import { qualification } from '../data/portfolio'

export function Certifications() {
  return (
    <Panel number="12" title="QUALIFICATION">
      <div className="panel__body">
        <div className="certs-layout certs-layout--full">
          <div className="certs-block">
            <h3>{qualification.degree}</h3>
            <ul>
              <li>{qualification.institute}</li>
              <li>{qualification.board}</li>
              <li>{qualification.years}</li>
            </ul>
          </div>
        </div>
      </div>
    </Panel>
  )
}
