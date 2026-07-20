import { Panel } from './Panel'
import { images } from '../data/portfolio'

export function ChiniotDetails() {
  return (
    <Panel number="06" title="PROJECT OVERVIEW" className="details details--dark" dark>
      <div className="panel__body details">
        <div className="details__top">
          <div className="details__text">
            <h3>PROJECT OVERVIEW</h3>
            <p>
              Construction of Chiniot Welfare Complex on Jhang Road, Chiniot —
              a multi-purpose civic development including welfare facilities,
              structural works, and complete site infrastructure.
            </p>
            <h3>SCOPE OF WORK</h3>
            <ul>
              <li>Main welfare complex building</li>
              <li>Structural &amp; finishing works</li>
              <li>Site development &amp; utilities</li>
              <li>Roads, drainage &amp; external works</li>
            </ul>
          </div>
          <img
            className="details__photo"
            src={images.chiniot[0]}
            alt="Chiniot Welfare Complex"
          />
        </div>
        <div className="details-collage details-collage--6">
          {images.chiniot.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Chiniot Welfare Complex — site photo ${i + 1}`}
            />
          ))}
        </div>
        <div className="details__cols">
          <div className="details__col">
            <h4>KEY RESPONSIBILITIES</h4>
            <p>
              Site supervision, progress monitoring, coordination with
              consultants, quality checks, and workforce management.
            </p>
          </div>
          <div className="details__col">
            <h4>CHALLENGES</h4>
            <p>
              Tight programme, multi-trade interfaces, weather constraints, and
              maintaining live-site safety standards.
            </p>
          </div>
          <div className="details__col">
            <h4>SOLUTIONS</h4>
            <p>
              Phased sequencing, daily coordination meetings, strict QA
              hold-points, and proactive material planning.
            </p>
          </div>
          <div className="details__col">
            <h4>RESULTS</h4>
            <p>
              On-time handover, zero major safety incidents, and client
              recognition for quality workmanship.
            </p>
          </div>
        </div>
      </div>
    </Panel>
  )
}
