import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import './Navbar.css'

const navigation = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    const onKeyDown = (event) => { if (event.key === 'Escape') closeMenu() }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <header className={`navbar${isScrolled ? ' is-scrolled' : ''}`}>
      <a href="#accueil" className="navbar-logo" onClick={closeMenu} aria-label="EN Digital Studio — Accueil">
        <img src="/images/logo.png" alt="EN Digital Studio" />
      </a>

      <button
        className="navbar-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav id="primary-navigation" className={`navbar-links${isOpen ? ' is-open' : ''}`} aria-label="Navigation principale">
        {navigation.map(({ href, label }) => (
          <a href={href} key={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="#contact" className="navbar-mobile-contact" onClick={closeMenu}>
          Démarrer un projet <ArrowRight size={16} />
        </a>
      </nav>

      <a href="#contact" className="navbar-button">Démarrer un projet <ArrowRight size={15} /></a>
    </header>
  )
}

export default Navbar
