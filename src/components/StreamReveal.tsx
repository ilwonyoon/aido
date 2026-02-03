'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface StreamRevealProps {
  children: ReactNode
  /** Words revealed per second */
  wordsPerSecond?: number
  /** Delay before streaming starts (ms) */
  delay?: number
  className?: string
}

/**
 * Chat-like word-by-word typing reveal.
 * Text appears one word at a time (instant pop, no fade).
 * Block elements (cards, grids, buttons) appear as whole units.
 * If user scrolls ahead, unrevealed content fades in.
 */
export function StreamReveal({
  children,
  wordsPerSecond = 18,
  delay = 300,
  className,
}: StreamRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const units: HTMLElement[] = []

    function walkAndWrap(node: Node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || ''
        if (!text.trim()) return

        const frag = document.createDocumentFragment()
        const parts = text.split(/(\s+)/)

        for (const part of parts) {
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part))
          } else if (part) {
            const span = document.createElement('span')
            span.textContent = part
            span.style.opacity = '0'
            units.push(span)
            frag.appendChild(span)
          }
        }

        node.parentNode?.replaceChild(frag, node)
        return
      }

      if (node.nodeType !== Node.ELEMENT_NODE) return

      const elem = node as HTMLElement

      // Block-level UI elements — reveal as single unit
      const isBlock =
        elem.classList.contains('card') ||
        elem.classList.contains('grid') ||
        elem.tagName === 'BUTTON' ||
        elem.tagName === 'IMG' ||
        elem.tagName === 'SVG' ||
        (elem.tagName === 'A' && elem.classList.contains('inline-flex'))

      if (isBlock) {
        elem.style.opacity = '0'
        units.push(elem)
        return
      }

      // Walk children (snapshot first since we mutate the DOM)
      const childNodes = Array.from(node.childNodes)
      for (const child of childNodes) {
        walkAndWrap(child)
      }
    }

    walkAndWrap(el)

    // Sequential reveal timer
    let index = 0
    const msPerWord = 1000 / wordsPerSecond
    let timerId: ReturnType<typeof setTimeout> | null = null
    const revealed = new Set<HTMLElement>()
    let userScrolled = false

    const revealUnit = (unit: HTMLElement, fade = false) => {
      if (revealed.has(unit)) return
      revealed.add(unit)
      if (fade) {
        unit.style.transition = 'opacity 0.3s ease'
      }
      unit.style.opacity = '1'
      observer.unobserve(unit)
    }

    // Scroll-ahead: fade in words that enter viewport
    const onScroll = () => { userScrolled = true }
    window.addEventListener('wheel', onScroll, { passive: true })
    window.addEventListener('touchmove', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        if (!userScrolled) return
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealUnit(entry.target as HTMLElement, true)
          }
        }
      },
      { threshold: 0.1 }
    )

    for (const unit of units) {
      observer.observe(unit)
    }

    const tick = () => {
      if (index >= units.length) return
      revealUnit(units[index])
      index++
      timerId = setTimeout(tick, msPerWord)
    }

    timerId = setTimeout(tick, delay)

    return () => {
      if (timerId) clearTimeout(timerId)
      observer.disconnect()
      window.removeEventListener('wheel', onScroll)
      window.removeEventListener('touchmove', onScroll)
      // HMR safety: show everything
      for (const unit of units) {
        unit.style.opacity = '1'
      }
    }
  }, [wordsPerSecond, delay])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
