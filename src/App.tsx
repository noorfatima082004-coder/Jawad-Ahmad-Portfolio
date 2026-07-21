import { useState, useEffect } from 'react'
import { Cover } from './components/Cover'
import { About } from './components/About'
import { Timeline } from './components/Timeline'
import { Competencies } from './components/Competencies'
import { ProjectCard } from './components/ProjectCard'
import { SportsComplexDetails } from './components/SportsComplexDetails'
import { ChiniotDetails } from './components/ChiniotDetails'
import { TechnicalSkills } from './components/TechnicalSkills'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Navbar, type TabId } from './components/Navbar'
import { projects } from './data/portfolio'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home')
  const [sportsComplex, chiniot] = projects

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  return (
    <div className="site">
      <Navbar activeTab={activeTab} onChange={setActiveTab} />

      <main className={`app app--${activeTab}`} key={activeTab}>
        {activeTab === 'home' && <Cover />}

        {activeTab === 'about' && <About />}

        {activeTab === 'experience' && (
          <>
            <Timeline />
            <Competencies />
          </>
        )}

        {activeTab === 'projects' && (
          <>
            <ProjectCard project={sportsComplex} />
            <SportsComplexDetails />
            <ProjectCard project={chiniot} />
            <ChiniotDetails />
          </>
        )}

        {activeTab === 'qualifications' && (
          <>
            <TechnicalSkills />
            <Certifications />
          </>
        )}

        {activeTab === 'contact' && <Contact />}
      </main>
    </div>
  )
}

export default App
