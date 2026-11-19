import './App.css'
import './HeroVisual.css'
import './HomePolish.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Method from './components/Method'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ArrowRight, Gem, Headphones, Rocket, Sparkles } from 'lucide-react'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="hero" id="accueil">
          <div className="hero-orbit hero-orbit-left" />
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={13} /> Studio créatif & digital</p>
            <h1>Créons ensemble<br /><em>votre univers digital.</em></h1>
            <p className="hero-description">Des solutions créatives et sur mesure pour développer votre présence en ligne et faire briller votre marque.</p>
            <div className="hero-actions">
              <a href="#services" className="button button-primary">Découvrir nos services <ArrowRight size={16} /></a>
              <a href="#portfolio" className="button button-secondary">Voir notre portfolio <ArrowRight size={16} /></a>
            </div>
            <div className="hero-benefits"><span><Rocket size={15} /> Innovation</span><span><Gem size={15} /> Qualité</span><span><Headphones size={15} /> Accompagnement</span></div>
          </div>
          <div className="hero-scene" role="img" aria-label="Espace de travail élégant EN Digital Studio">
          </div>
        </section>
        <Services />
        <About />
        <Method />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
