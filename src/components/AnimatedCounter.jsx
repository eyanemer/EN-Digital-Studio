import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function AnimatedCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, amount: 0.7 })
  const reduceMotion = useReducedMotion()
  const count = useMotionValue(0)
  const rounded = useTransform(count, (current) => Math.round(current))

  useEffect(() => {
    if (!visible) return undefined
    if (reduceMotion) {
      count.set(value)
      return undefined
    }
    const controls = animate(count, value, { duration: 1.6, ease: 'easeOut' })
    return controls.stop
  }, [count, reduceMotion, value, visible])

  return (
    <div className="stat-item" ref={ref}>
      <strong><motion.span>{rounded}</motion.span>{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}
