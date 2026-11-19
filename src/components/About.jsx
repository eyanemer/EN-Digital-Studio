import './About.css'
import { ArrowRight, Gem, Handshake, Sparkles, Zap } from 'lucide-react'

const values = [
  { icon: Gem, title: 'Qualité premium', text: 'Un travail soigné, pensé dans les moindres détails.' },
  { icon: Zap, title: 'Innovation', text: 'Des solutions créatives à la hauteur de vos ambitions.' },
  { icon: Handshake, title: 'Accompagnement', text: 'Un suivi personnalisé, du premier échange à la livraison.' },
]

function About() {
  return (
    <section className="about" id="apropos" aria-labelledby="about-title">
      <div className="about-art" role="img" aria-label="Un espace de travail créatif et élégant">
        <div className="about-photo" />
        <div className="about-mark"><Sparkles size={14} /> L&apos;idée devient expérience</div>
        <div className="about-card"><span>EN</span><small>Digital Studio</small></div>
      </div>

      <div className="about-content">
        <p className="section-label">— Qui sommes-nous ? —</p>
        <h2 id="about-title">Bien plus qu&apos;un studio,<br /><em>un partenaire créatif.</em></h2>
        <p>EN Digital Studio accompagne les entrepreneurs, les marques et les professionnels dans la création de leur identité et de leur présence digitale.</p>
        <p>Notre approche associe créativité, sens du détail et solutions digitales adaptées à vos objectifs. Chaque projet est une occasion de donner vie à une vision unique.</p>
        <a href="#services" className="small-button">Découvrir notre savoir-faire <ArrowRight size={14} /></a>
      </div>

      <ul className="values" aria-label="Nos engagements">
        {values.map(({ icon: Icon, title, text }) => (
          <li key={title}><Icon aria-hidden="true" /><span><b>{title}</b>{text}</span></li>
        ))}
      </ul>
    </section>
  )
}

export default About
