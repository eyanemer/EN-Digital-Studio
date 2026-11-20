import { useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import Lenis from 'lenis'

/** Reveal discret, joué une seule fois quand le contenu entre dans l’écran. */
export function Reveal({ children, className = '', delay = 0, as = 'div', ...props }) {
  const Component = motion[as] || motion.div
  const reduceMotion = useReducedMotion()

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}

/** Smooth scroll Lenis, coupé automatiquement pour les personnes qui le demandent. */
export function SmoothScroll() {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined
    const lenis = new Lenis({ duration: 1, smoothWheel: true, syncTouch: false })
    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [reduceMotion])

  return null
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.25 })
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}

/** Curseur décoratif réservé aux pointeurs précis; le curseur système reste actif. */
export function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const smoothX = useSpring(x, { stiffness: 450, damping: 35 })
  const smoothY = useSpring(y, { stiffness: 450, damping: 35 })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined
    const move = (event) => { x.set(event.clientX); y.set(event.clientY) }
    window.addEventListener('pointermove', move, { passive: true })
    document.body.classList.add('has-custom-cursor')
    return () => {
      window.removeEventListener('pointermove', move)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [reduceMotion, x, y])

  const translateX = useTransform(smoothX, (value) => value - 12)
  const translateY = useTransform(smoothY, (value) => value - 12)
  return <motion.span className="custom-cursor" style={{ x: translateX, y: translateY }} aria-hidden="true" />
}

