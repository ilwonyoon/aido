'use client'

import { useEffect, useRef, useCallback } from 'react'

/**
 * Flowing gradient background with subtle mouse-reactive parallax.
 * Uses CSS `page-gradient` class (defined in globals.css) for the
 * animated linear-gradient, and JS for smooth mouse tracking.
 */
export function PageBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const smoothMouse = useRef({ x: 0.5, y: 0.5 })
  const animRef = useRef<number>(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    }
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    window.addEventListener('mousemove', handleMouseMove)

    const update = () => {
      smoothMouse.current = {
        x: smoothMouse.current.x + (mouseRef.current.x - smoothMouse.current.x) * 0.003,
        y: smoothMouse.current.y + (mouseRef.current.y - smoothMouse.current.y) * 0.003,
      }
      el.style.setProperty('--mx', `${(smoothMouse.current.x - 0.5) * 30}px`)
      el.style.setProperty('--my', `${(smoothMouse.current.y - 0.5) * 20}px`)
      animRef.current = requestAnimationFrame(update)
    }
    update()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <div
        ref={ref}
        className="page-gradient absolute"
        style={{ inset: '-40px', transform: 'translate(var(--mx, 0px), var(--my, 0px))' }}
      />
    </div>
  )
}
