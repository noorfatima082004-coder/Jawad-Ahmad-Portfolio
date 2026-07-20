export type TabId =
  | 'home'
  | 'about'
  | 'experience'
  | 'projects'
  | 'qualifications'
  | 'contact'

const tabs: { id: TabId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'qualifications', label: 'Qualifications' },
  { id: 'contact', label: 'Contact' },
]

type Props = {
  activeTab: TabId
  onChange: (tab: TabId) => void
}

export function Navbar({ activeTab, onChange }: Props) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button
          type="button"
          className="navbar__brand"
          onClick={() => onChange('home')}
        >
          <span className="navbar__brand-name">JAWAD AHMAD</span>
          <span className="navbar__brand-role">Civil Site Engineer</span>
        </button>

        <nav className="navbar__tabs" aria-label="Portfolio sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`navbar__tab ${activeTab === tab.id ? 'is-active' : ''}`}
              onClick={() => onChange(tab.id)}
              aria-current={activeTab === tab.id ? 'page' : undefined}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
