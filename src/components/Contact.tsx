import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Panel } from './Panel'
import { contact } from '../data/portfolio'

export function Contact() {
  return (
    <Panel number="17" className="contact" dark>
      <div className="panel__body contact__inner">
        <h2 className="contact__headline">
          LET&apos;S BUILD THE FUTURE TOGETHER
        </h2>
        <div>
          <h3 className="contact__section-title">CONTACT</h3>
          <div className="contact__list">
            <div className="contact__item">
              <span className="contact__item-icon">
                <FaPhoneAlt />
              </span>
              <a href={`tel:${contact.phone.replace(/-/g, '')}`}>
                {contact.phone}
              </a>
            </div>
            <div className="contact__item">
              <span className="contact__item-icon">
                <FaEnvelope />
              </span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="contact__item">
              <span className="contact__item-icon">
                <FaMapMarkerAlt />
              </span>
              <span>{contact.location}</span>
            </div>
          </div>
        </div>
        <p className="contact__thanks">THANK YOU FOR YOUR TIME</p>
      </div>
    </Panel>
  )
}
