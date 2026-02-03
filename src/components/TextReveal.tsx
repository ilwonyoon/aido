'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Character-by-character stagger text entrance animation.
 * Splits text into individual characters and animates each
 * with a slight upward fade-in.
 */
export function TextReveal({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const chars = container.querySelectorAll('.char')
    gsap.set(chars, { opacity: 0, y: 8 })
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: 'power2.out',
      delay: 0.1,
    })

    return () => {
      gsap.killTweensOf(chars)
    }
  }, [text])

  return (
    <span ref={containerRef} className={className}>
      {text.split('').map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="char inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}
