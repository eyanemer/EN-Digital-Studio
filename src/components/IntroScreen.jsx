import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import './IntroScreen.css'

export default function IntroScreen() {
  const reduceMotion = useReducedMotion()
  const [dismissed, setDismissed] = useState(false)
  const visible = !reduceMotion && !dismissed

  useEffect(() => {
    if (reduceMotion) return undefined

    const timeout = window.setTimeout(() => setDismissed(true), 1650)
    return () => window.clearTimeout(timeout)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          aria-label="EN Digital Studio"
          role="status"
        >
          <motion.img
            src="/images/logo.png"
            alt="EN Digital Studio"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.35 }}
          >
            Créons votre univers digital
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
