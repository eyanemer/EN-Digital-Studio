import './Portfolio.css'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    tag: 'Web design',
    title: 'Carte de visite numérique',
    text: 'Un site web élégant et moderne pour présenter un profil professionnel, ses compétences et ses coordonnées.',
    type: 'Site web',
    style: 'one',
    image: '/images/cartevisite.png',
  },
  {
    tag: 'Dashboard admin',
    title: 'Gestion de parking intelligent',
    text: 'Un tableau de bord administratif pour superviser les places, suivre les disponibilités et gérer un parking intelligent.',
    type: 'Application web',
    style: 'two',
    image: '/images/parking.png',
  },
  {
    tag: 'Smart technology',
    title: 'Poubelle intelligente',
    text: 'Une interface web dédiée à une solution de gestion intelligente des déchets et au suivi de ses fonctionnalités.',
    type: 'Site web',
    style: 'three',
    image: '/images/poubelle.png',
  },
  {
    tag: 'Projet académique',
    title: 'Système MES — Gestion des ressources',
    text: 'Une application full stack pour piloter les processus industriels, les opérateurs, les équipements et les matériaux.',
    type: 'React · Node.js · MongoDB',
    style: 'four',
    image: '/images/MES.png',
  },
]

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="portfolio-top">
        <div>
          <p className="section-label">— Quelques exemples —</p>
          <h2 id="portfolio-title">Nos projets, <em>notre savoir-faire.</em></h2>
          <p>Découvrez quelques concepts imaginés pour illustrer notre approche créative et notre univers visuel.</p>
        </div>
        <a href="#contact">Voir plus de projets <ArrowRight size={15} /></a>
      </div>

      <div className="portfolio-grid">
        {projects.map(({ image, style, tag, text, title, type }) => (
          <article className="project" key={title}>
            <div className={`project-image project-${style}${image ? ' has-image' : ''}`}>
              {image ? <img src={image} alt={`Aperçu du projet ${title}`} loading="lazy" /> : <span>Visuel du projet</span>}
            </div>
            <div className="project-info">
              <p className="project-tag">{tag}</p>
              <h3>{title}</h3>
              <p>{text}</p>
              <small>{type}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
