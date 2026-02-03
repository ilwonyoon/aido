'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Stagger-animate all `.card` children of a container on mount.
 * Cards fade in from below with a short stagger delay.
 * Uses gsap.from() so elements fall back to their CSS-defined visible
 * state if the animation is interrupted (e.g. HMR, unmount).
 */
export function useCardStagger(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll('.card')
    if (cards.length === 0) return

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
      cards.forEach((card) => {
        gsap.set(card, { clearProps: 'opacity,y' })
      })
    }
  }, [containerRef])
}

/**
 * Scroll-triggered number counter for elements with `data-counter`.
 * Supports `data-prefix` and `data-suffix` for formatting.
 */
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

/**
 * Scroll-triggered progress bar fill for elements with `data-progress`.
 * Animates width from 0% to the specified percentage.
 */
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
      bars.forEach((bar) => {
        const value = bar.getAttribute('data-progress') ?? '0'
        gsap.set(bar, { width: `${value}%` })
      })
    }
  }, [containerRef])
}
