import { Fragment } from 'react'
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
import FAQ from './components/FAQ'
import AnimatedCounter from './components/AnimatedCounter'
import IntroScreen from './components/IntroScreen'
import { Cursor, Reveal, ScrollProgress, SmoothScroll } from './components/Motion'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CircleCheck, Sparkles } from 'lucide-react'
import './FinalPolish.css'

function App() {
  const reduceMotion = useReducedMotion()
  const wordVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

  return (
    <div className="site-shell">
      <IntroScreen />
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <main>
        <section className="hero" id="accueil">
          <div className="hero-orbit hero-orbit-left" />
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .45 }}><Sparkles size={13} /> Studio créatif & digital</motion.p>
            <motion.h1 initial={reduceMotion ? false : 'hidden'} animate="visible" variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : .09, delayChildren: reduceMotion ? 0 : .12 } } }}>
              <span className="hero-line">{['Des', 'idées', 'qui'].map((word, index, words) => <Fragment key={word}><motion.span className="hero-word" variants={wordVariants}>{word}</motion.span>{index < words.length - 1 ? ' ' : null}</Fragment>)}</span>
              <span className="hero-line"><em>{['prennent', 'vie.'].map((word, index, words) => <Fragment key={word}><motion.span className="hero-word" variants={wordVariants}>{word}</motion.span>{index < words.length - 1 ? ' ' : null}</Fragment>)}</em></span>
            </motion.h1>
            <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .48 }}>Nous créons des identités, des sites web et des expériences digitales sur mesure pour transformer vos idées en projets qui marquent.</motion.p>
            <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : .58 }}>
              <motion.a whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: .98 }} href="#contact" className="button button-primary">Parlons de votre projet <ArrowRight size={16} /></motion.a>
              <a href="#portfolio" className="button button-secondary">Voir nos réalisations <ArrowRight size={16} /></a>
            </motion.div>
            <div className="hero-benefits"><span><CircleCheck size={15} /> Sur mesure</span><span><CircleCheck size={15} /> Responsive</span><span><CircleCheck size={15} /> Accompagnement</span></div>
          </div>
          <div className="hero-scene" role="img" aria-label="Espace de travail élégant EN Digital Studio">
          </div>
        </section>
        <div className="studio-strip" aria-label="Expertises du studio"><div className="studio-strip-track">{['Identité visuelle', 'Sites web', 'E-commerce', 'Applications web', 'Accompagnement', 'Identité visuelle', 'Sites web', 'E-commerce', 'Applications web', 'Accompagnement'].map((item, index) => <span key={`${item}-${index}`}>{item}<i aria-hidden="true">✦</i></span>)}</div></div>
        <Reveal><Services /></Reveal>
        <Reveal><About /></Reveal>
        <section className="studio-stats" aria-label="Le studio en quelques chiffres">
          <AnimatedCounter value={6} label="expertises complémentaires" />
          <AnimatedCounter value={100} suffix="%" label="solutions sur mesure" />
          <AnimatedCounter value={1} suffix=":1" label="accompagnement personnalisé" />
        </section>
        <Reveal><Method /></Reveal>
        <Reveal><Portfolio /></Reveal>
        <section className="mid-cta"><div><p className="section-label">Votre idée mérite une belle présence</p><h2>Prêt à passer <em>à l’étape suivante ?</em></h2></div><a className="button button-primary" href="#contact">Démarrer un projet <ArrowRight size={16} /></a></section>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
