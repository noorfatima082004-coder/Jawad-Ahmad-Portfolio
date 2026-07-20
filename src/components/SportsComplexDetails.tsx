import { Panel } from './Panel'
import { images } from '../data/portfolio'

export function SportsComplexDetails() {
  return (
    <Panel number="06" title="PROJECT OVERVIEW" className="details details--dark" dark>
      <div className="panel__body details">
        <div className="details__top">
          <div className="details__text">
            <h3>ROLE</h3>
            <p>
              Site Engineer, Alam Khan Brothers (Engineering &amp; Construction
              Pvt. Ltd.) — March 2021 to Present.
            </p>
            <h3>SCOPE</h3>
            <ul>
              <li>Construction of FDA Sports Complex — Faisalabad</li>
              <li>Construction of LDA Sports Complex — Shahdara, Lahore</li>
            </ul>
          </div>
          <img
            className="details__photo"
            src={images.sportsComplex[0]}
            alt="FDA Sports Complex, Faisalabad"
          />
        </div>
        <div className="details-collage details-collage--6">
          {images.sportsComplex.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`FDA Sports Complex — site photo ${i + 1}`}
            />
          ))}
        </div>
        <div className="details__text">
          <h3>KEY RESPONSIBILITIES</h3>
          <ul>
            <li>Supervised all on-site construction activities ensuring quality and compliance with project standards.</li>
            <li>Monitored material deliveries and verified proper utilization at site.</li>
            <li>Ensured execution of work in accordance with approved drawings and technical specifications.</li>
            <li>Conducted regular site inspections and documented progress through detailed reports and photographs.</li>
            <li>Prepared daily progress reports and maintained comprehensive project records.</li>
            <li>Checked site conditions before starting work to ensure readiness.</li>
            <li>Monitored contractor performance to ensure timely and quality completion of work.</li>
            <li>Supervised installation of services including sewerage systems, water supply lines, and electrical cable ducts.</li>
          </ul>
        </div>
      </div>
    </Panel>
  )
}
