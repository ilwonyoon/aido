'use client'

import { useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. Card Stagger Entrance
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export function useCardStagger(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll('.card')
    if (cards.length === 0) return

    // gsap.from() animates FROM hidden TO the element's natural state.
    // If the tween is killed mid-way, GSAP clears inline styles and
    // the element falls back to its CSS-defined (visible) appearance.
    const tween = gsap.from(cards, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 0.15,
    })

    return () => {
      tween.kill()
      // Clear any leftover inline styles so cards aren't stuck invisible
      cards.forEach((card) => {
        gsap.set(card, { clearProps: 'opacity,y' })
      })
    }
  }, [containerRef])
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. Number Counter (scroll-triggered)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export function useNumberCounter(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const counters = container.querySelectorAll('[data-counter]')
    if (counters.length === 0) return

    const triggers: ScrollTrigger[] = []

    const animate = (el: Element) => {
      const target = el.getAttribute('data-counter') ?? '0'
      const prefix = el.getAttribute('data-prefix') ?? ''
      const suffix = el.getAttribute('data-suffix') ?? ''
      const numericValue = parseFloat(target.replace(/[^0-9.]/g, ''))
      const hasDecimal = target.includes('.')
      const obj = { val: 0 }

      gsap.to(obj, {
        val: numericValue,
        duration: 1.2,
        ease: 'power2.out',
        onUpdate: () => {
          const display = hasDecimal ? obj.val.toFixed(1) : Math.round(obj.val)
          ;(el as HTMLElement).textContent = `${prefix}${display}${suffix}`
        },
      })
    }

    counters.forEach((el) => {
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => animate(el),
      })
      triggers.push(trigger)
    })

    // Refresh so triggers fire for elements already in viewport on mount
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [containerRef])
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. Text Reveal (character stagger)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export function TextReveal({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const chars = container.querySelectorAll('.char')

    // gsap.from() ensures elements return to their natural visible
    // state even if the tween is interrupted or killed.
    const tween = gsap.from(chars, {
      opacity: 0,
      y: 8,
      duration: 0.4,
      stagger: 0.02,
      ease: 'power2.out',
      delay: 0.1,
    })

    return () => {
      tween.kill()
      chars.forEach((c) => {
        gsap.set(c, { clearProps: 'opacity,y' })
      })
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. Progress Bar Animation (scroll-triggered)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export function useProgressBars(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const bars = container.querySelectorAll('[data-progress]')
    if (bars.length === 0) return

    const triggers: ScrollTrigger[] = []

    bars.forEach((bar) => {
      const value = bar.getAttribute('data-progress') ?? '0'
      gsap.set(bar, { width: '0%' })

      const trigger = ScrollTrigger.create({
        trigger: bar,
        start: 'top 95%',
        once: true,
        onEnter: () => {
          gsap.to(bar, {
            width: `${value}%`,
            duration: 1,
            ease: 'power2.out',
          })
        },
      })
      triggers.push(trigger)
    })

    // Refresh so triggers fire for elements already in viewport on mount
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

    return () => {
      triggers.forEach((t) => t.kill())
      // Reset bars to target width so they aren't stuck at 0% after cleanup
      bars.forEach((bar) => {
        const value = bar.getAttribute('data-progress') ?? '0'
        gsap.set(bar, { width: `${value}%` })
      })
    }
  }, [containerRef])
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. Page Background (flowing gradient)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

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
    <div
      ref={ref}
      className="page-gradient absolute inset-0 pointer-events-none"
      style={{ zIndex: 0, transform: 'translate(var(--mx, 0px), var(--my, 0px))' }}
    />
  )
}

/* Keep HeroBackground as alias for backward compat in SitePreview */
export const HeroBackground = PageBackground
