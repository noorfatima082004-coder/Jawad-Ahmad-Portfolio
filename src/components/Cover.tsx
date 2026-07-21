import { Panel } from './Panel'
import { images } from '../data/portfolio'

export function Cover() {
  return (
    <Panel
      number="01"
      className="cover"
      style={{ backgroundImage: `url(${images.cover})` }}
    >
      <div className="cover__content">
        <p className="cover__tagline">DESIGN | CONSTRUCT | DELIVER</p>
        <h1 className="cover__headline">
          BUILDING TOMORROW.
          <br />
          ENGINEERING EXCELLENCE.
        </h1>
        <p className="cover__name">JAWAD AHMAD</p>
        <p className="cover__role">
          CIVIL SITE ENGINEER &amp; CONSTRUCTION PROFESSIONAL
        </p>
        <div className="cover__badge">CIVIL ENGINEER</div>
        <p className="cover__footer">COMMITMENT | QUALITY | INTEGRITY</p>
      </div>
    </Panel>
  )
}
