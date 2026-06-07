import { useState } from 'react'
import Navbar from './components/Navbar'
import StaggeredMenu from './components/StaggeredMenu'
import FireCursorTrail from './components/FireCursorTrail'
import Hero from './components/Hero'
import TickerStrip from './components/TickerStrip'
import PerformanceSpecs from './components/PerformanceSpecs'
import Heritage from './components/Heritage'
import Experience from './components/Experience'
import ConfiguratorTeaser from './components/ConfiguratorTeaser'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import PressStrip from './components/PressStrip'
import Footer from './components/Footer'
import Configurator from './components/Configurator'
import ModelsPage from './components/ModelsPage'
import HeritagePage from './components/HeritagePage'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [configOpen, setConfigOpen] = useState(false)
  const [heritageOpen, setHeritageOpen] = useState(false)
  const [modelsPageOpen, setModelsPageOpen] = useState(false)

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen(prev => !prev)}
        onConfigOpen={() => setConfigOpen(true)}
        onHeritageOpen={() => setHeritageOpen(true)}
        onModelsPageOpen={() => setModelsPageOpen(true)}
      />

      <StaggeredMenu
        isOpen={menuOpen}
        onToggle={() => setMenuOpen(prev => !prev)}
        onModelsPageOpen={() => { setModelsPageOpen(true); }}
        onHeritageOpen={() => { setHeritageOpen(true); }}
      />

      <FireCursorTrail />

      <Hero menuOpen={menuOpen} />

      {/* Scrollable content sections */}
      <div style={{ position: 'relative', zIndex: 30 }}>
        {/* Spacer for fixed hero */}
        <div style={{ height: '100vh', pointerEvents: 'none' }} />

        <div style={{ backgroundColor: 'var(--bg-void)', position: 'relative' }}>
          <TickerStrip />

          <div className="cv-auto">
            <PerformanceSpecs />
          </div>

          <div className="cv-auto">
            <Heritage />
          </div>

          <div className="cv-auto">
            <Experience />
          </div>

        <div className="cv-auto">
          <ConfiguratorTeaser onConfigOpen={() => setConfigOpen(true)} />
        </div>

        <div className="cv-auto">
          <Testimonials />
        </div>

        <div className="cv-auto">
          <Faq />
        </div>

        <div className="cv-auto">
          <PressStrip />
        </div>

        <Footer />
        </div>
      </div>

      {/* Page Overlays */}
      <Configurator isOpen={configOpen} onClose={() => setConfigOpen(false)} />
      <ModelsPage isOpen={modelsPageOpen} onClose={() => setModelsPageOpen(false)} />
      <HeritagePage isOpen={heritageOpen} onClose={() => setHeritageOpen(false)} />
    </>
  )
}
