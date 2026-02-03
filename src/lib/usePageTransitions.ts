'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TransitionValues {
  headerDuration: number
  headerDelay: number
  cardDuration: number
  cardStagger: number
  cardYOffset: number
  sectionDuration: number
  sectionYOffset: number
  scrollTrigger: number
}

const DEFAULTS: TransitionValues = {
  headerDuration: 0.6,
  headerDelay: 0.2,
  cardDuration: 0.5,
  cardStagger: 0.06,
  cardYOffset: 20,
  sectionDuration: 0.7,
  sectionYOffset: 24,
  scrollTrigger: 88,
}

/**
 * Applies entrance transitions to page elements.
 * Sequences: header fades in → after header completes, cards stagger in.
 *
 * @param containerRef - ref to the page container
 * @param ready - set to true when content is loaded (e.g. !loading)
 */
export function usePageTransitions(
  containerRef: React.RefObject<HTMLDivElement | null>,
  ready: boolean
) {
  useEffect(() => {
    if (!ready) return

    const el = containerRef.current
    if (!el) return

    let vals = { ...DEFAULTS }
    const tweens: gsap.core.Tween[] = []
    const triggers: ScrollTrigger[] = []

    function run(v: TransitionValues) {
      if (!el) return

      // Clean previous run
      tweens.forEach((t) => t.kill())
      triggers.forEach((t) => t.kill())
      tweens.length = 0
      triggers.length = 0

      // ── Header entrance ──
      const headers = el.querySelectorAll('[data-transition="header"]')
      headers.forEach((header) => {
        gsap.set(header, { opacity: 0, y: 16 })
      })

      // ── Cards: hide immediately ──
      // Grid view: stagger individual .card elements
      // List view: fade the container as a single block
      const cardContainers = el.querySelectorAll('[data-transition="cards"]')
      const allCards: Element[] = []
      const blockFadeContainers: Element[] = []
      cardContainers.forEach((container) => {
        const cards = Array.from(container.querySelectorAll('.card'))
        if (cards.length > 0) {
          allCards.push(...cards)
          gsap.set(cards, { opacity: 0, y: v.cardYOffset })
        } else {
          // List view or no .card found — fade the whole container
          blockFadeContainers.push(container)
          gsap.set(container, { opacity: 0, y: v.cardYOffset })
        }
      })

      // ── Sections: hide ──
      const sections = el.querySelectorAll('[data-transition="section"]')
      sections.forEach((s) => gsap.set(s, { opacity: 0, y: v.sectionYOffset }))

      // ── Step 1: Animate header ──
      const headerTl = gsap.timeline({
        onComplete: () => {
          // ── Step 2: After header, stagger cards or fade containers ──
          if (allCards.length > 0) {
            tweens.push(
              gsap.to(allCards, {
                opacity: 1,
                y: 0,
                duration: v.cardDuration,
                stagger: v.cardStagger,
                ease: 'power2.out',
                onComplete: () => {
                  allCards.forEach((c) => gsap.set(c, { clearProps: 'transform' }))
                },
              })
            )
          }
          if (blockFadeContainers.length > 0) {
            tweens.push(
              gsap.to(blockFadeContainers, {
                opacity: 1,
                y: 0,
                duration: v.cardDuration,
                ease: 'power2.out',
                onComplete: () => {
                  blockFadeContainers.forEach((c) => gsap.set(c, { clearProps: 'transform' }))
                },
              })
            )
          }

          // ── Step 2b: Set up scroll-triggered sections ──
          sections.forEach((section) => {
            const trigger = ScrollTrigger.create({
              trigger: section,
              start: `top ${v.scrollTrigger}%`,
              once: true,
              onEnter: () => {
                tweens.push(
                  gsap.to(section, {
                    opacity: 1,
                    y: 0,
                    duration: v.sectionDuration,
                    ease: 'power2.out',
                    onComplete: () => { gsap.set(section, { clearProps: 'transform' }) },
                  })
                )
              },
            })
            triggers.push(trigger)
          })
          requestAnimationFrame(() => ScrollTrigger.refresh())
        },
      })

      headers.forEach((header) => {
        headerTl.to(
          header,
          {
            opacity: 1,
            y: 0,
            duration: v.headerDuration,
            ease: 'power2.out',
            onComplete: () => { gsap.set(header, { clearProps: 'transform' }) },
          },
          v.headerDelay
        )
      })
      tweens.push(headerTl as unknown as gsap.core.Tween)

      // If user scrolls before header finishes, skip to cards
      const earlyScroll = () => {
        headerTl.progress(1)
        window.removeEventListener('wheel', earlyScroll)
        window.removeEventListener('touchmove', earlyScroll)
      }
      window.addEventListener('wheel', earlyScroll, { passive: true, once: true })
      window.addEventListener('touchmove', earlyScroll, { passive: true, once: true })
    }

    // Initial run
    // Small delay to ensure DOM is painted after loading state change
    const initTimer = requestAnimationFrame(() => run(vals))

    // Listen for replay events from TransitionEditor
    const handleReplay = (e: Event) => {
      vals = (e as CustomEvent<TransitionValues>).detail
      run(vals)
    }
    window.addEventListener('transition-replay', handleReplay)

    return () => {
      cancelAnimationFrame(initTimer)
      tweens.forEach((t) => t.kill())
      triggers.forEach((t) => t.kill())
      window.removeEventListener('transition-replay', handleReplay)

      // Restore visibility
      el.querySelectorAll('[data-transition="header"]').forEach((h) =>
        gsap.set(h, { clearProps: 'opacity,y' })
      )
      el.querySelectorAll('[data-transition="cards"]').forEach((container) => {
        const cards = container.querySelectorAll('.card')
        if (cards.length > 0) {
          cards.forEach((c) => gsap.set(c, { clearProps: 'opacity,y' }))
        } else {
          gsap.set(container, { clearProps: 'opacity,y' })
        }
      })
      el.querySelectorAll('[data-transition="section"]').forEach((s) =>
        gsap.set(s, { clearProps: 'opacity,y' })
      )
    }
  }, [containerRef, ready])
}
