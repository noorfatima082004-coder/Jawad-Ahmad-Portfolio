import { Panel } from './Panel'
import { images } from '../data/portfolio'

export function AbdullahpurDetails() {
  return (
    <Panel number="10" title="PROJECT DETAILS" className="details details--light">
      <div className="panel__body">
        <div className="details-light-layout">
          <div className="details__text">
            <h3>OVERVIEW</h3>
            <p>
              Construction of Abdullahpur Flyover — a major road infrastructure
              project involving elevated bridge works, approach roads, and
              traffic management systems.
            </p>
            <h3>SCOPE</h3>
            <ul>
              <li>Flyover superstructure &amp; substructure</li>
              <li>Pile foundation &amp; pier works</li>
              <li>Deck slab &amp; expansion joints</li>
              <li>Approach roads &amp; drainage</li>
            </ul>
            <h3>RESPONSIBILITIES</h3>
            <p>
              Execution control, drawing compliance, subcontractor coordination,
              quality documentation, and client reporting.
            </p>
            <h3>OUTCOME</h3>
            <p>
              Successfully delivered flyover infrastructure improving traffic
              flow and connectivity for the Abdullahpur corridor.
            </p>
          </div>
          <div className="details-collage details-collage--3">
            {images.abdullahpur.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Abdullahpur Flyover — site photo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Panel>
  )
}
