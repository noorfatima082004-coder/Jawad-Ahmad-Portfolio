import { Panel } from './Panel'
import { images } from '../data/portfolio'

export function ChiniotDetails() {
  return (
    <Panel number="08" title="PROJECT OVERVIEW" className="details details--dark" dark>
      <div className="panel__body details">
        <div className="details__top">
          <div className="details__text">
            <h3>ROLE</h3>
            <p>
              Client Engineer, Chiniot Welfare Complex, Jhang Road, Chiniot —
              16 November 2016 to March 2021.
            </p>
            <h3>SCOPE</h3>
            <ul>
              <li>LRBT Eye Hospital</li>
              <li>Sadaqat Model School &amp; Rasheeda Aslam Higher Secondary School</li>
              <li>External Works — Roads &amp; Landscaping</li>
              <li>Boundary Wall, Mosque &amp; Guard Room</li>
            </ul>
          </div>
          <img
            className="details__photo"
            src={images.chiniotWelfare[0]}
            alt="Chiniot Anjuman Islamia Welfare Complex"
          />
        </div>
        <div className="details-collage">
          {images.chiniotWelfare.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Chiniot Welfare Complex — site photo ${i + 1}`}
            />
          ))}
        </div>
        <div className="details__text">
          <h3>KEY RESPONSIBILITIES</h3>
          <ul>
            <li>Supervised all civil construction activities at site.</li>
            <li>Monitored and controlled site materials to ensure quality and efficiency.</li>
            <li>
              Supervised concrete works including slump tests, temperature checks,
              and laboratory testing as per project specifications.
            </li>
            <li>Ensured all activities were executed according to approved drawings and specifications.</li>
            <li>Conducted continuous field inspections and maintained photographic records of work progress.</li>
            <li>Prepared daily progress reports and maintained proper documentation.</li>
            <li>Verified site readiness before initiating construction activities.</li>
            <li>Monitored contractor performance and ensured compliance with safety standards.</li>
            <li>Inspected reinforcement (rebar), cutting, fixing, and formwork prior to concrete pouring.</li>
            <li>Supervised installation of sewerage, water supply, and electrical duct systems.</li>
          </ul>
        </div>

      </div>
    </Panel>
  )
}
