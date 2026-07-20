import { Panel } from './Panel'
import {
  achievements,
  certifications,
  images,
  memberships,
} from '../data/portfolio'

export function Certifications() {
  return (
    <Panel number="15" title="CERTIFICATIONS & ACHIEVEMENTS">
      <div className="panel__body">
        <div className="certs-layout">
          <div>
            <div className="certs-block">
              <h3>CERTIFICATIONS</h3>
              <ul>
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="certs-block">
              <h3>ACHIEVEMENTS</h3>
              <ul>
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="certs-block">
              <h3>PROFESSIONAL MEMBERSHIPS</h3>
              <ul>
                {memberships.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="certs-visuals">
            <img src={images.cert1} alt="Professional certificate" />
            <img src={images.cert2} alt="Achievement certificate" />
            <img
              src={images.hardhat}
              alt="Construction hard hat and gloves"
              style={{ gridColumn: '1 / -1' }}
            />
          </div>
        </div>
      </div>
    </Panel>
  )
}
