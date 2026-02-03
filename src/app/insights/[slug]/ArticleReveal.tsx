'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

interface ArticleRevealProps {
  children: ReactNode
  className?: string
}

/**
 * Article page animation wrapper.
 * - Title (h1) and excerpt ([data-subtitle]) get GSAP typing effect.
 * - Header meta ([data-header-meta]) fades in after typing.
 * - Article content, aside, and remaining blocks fade in on scroll.
 * - Fixed scroll-hint chevron at viewport bottom.
 */
export function ArticleReveal({ children, className }: ArticleRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    const scrollHint = hintRef.current
    if (!el) return

    const tweens: gsap.core.Tween[] = []
    const triggers: ScrollTrigger[] = []

    // ── 1. Typing effect for title and excerpt ──────────
    const h1 = el.querySelector('h1')
    const subtitle = el.querySelector('[data-subtitle]')
    let h1Text = ''
    let subtitleText = ''
    let titleDuration = 0

    if (h1) {
      h1Text = h1.textContent || ''
      h1.textContent = ''
      titleDuration = h1Text.length * 0.03
      tweens.push(
        gsap.to(h1, {
          duration: titleDuration,
          text: { value: h1Text, delimiter: '' },
          ease: 'none',
          delay: 0.3,
        })
      )
    }

    if (subtitle) {
      subtitleText = subtitle.textContent || ''
      subtitle.textContent = ''
      const subtitleDelay = 0.3 + titleDuration + 0.15
      tweens.push(
        gsap.to(subtitle, {
          duration: subtitleText.length * 0.02,
          text: { value: subtitleText, delimiter: '' },
          ease: 'none',
          delay: subtitleDelay,
        })
      )
    }

    // ── 2. Hide blocks initially ─────────────────────────
    const headerMeta = el.querySelector('[data-header-meta]')
    const blocks = Array.from(el.querySelectorAll('.article-content, aside, .fade-block'))

    if (headerMeta) gsap.set(headerMeta, { opacity: 0, y: 16 })
    blocks.forEach((block) => gsap.set(block, { opacity: 0, y: 24 }))

    // Calculate when all typing finishes
    const subtitleDelay = subtitle
      ? 0.3 + titleDuration + 0.15
      : 0.3 + titleDuration
    const subtitleDuration = subtitle
      ? subtitleText.length * 0.02
      : 0
    const typingEndTime = subtitleDelay + subtitleDuration

    // ── 3. After typing: reveal header meta + scroll hint ──
    let handleClick: (() => void) | null = null
    let hideOnScroll: (() => void) | null = null

    const setupTimer = setTimeout(() => {
      // Fade in header meta
      if (headerMeta) {
        tweens.push(
          gsap.to(headerMeta, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          })
        )
      }

      // Show scroll hint
      if (scrollHint) {
        tweens.push(
          gsap.to(scrollHint, {
            opacity: 1,
            duration: 0.5,
            delay: 0.4,
          })
        )

        handleClick = () => {
          window.scrollBy({ top: 320, behavior: 'smooth' })
        }
        scrollHint.addEventListener('click', handleClick)

        hideOnScroll = () => {
          gsap.to(scrollHint, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              scrollHint.style.pointerEvents = 'none'
            },
          })
          window.removeEventListener('wheel', hideOnScroll!)
          window.removeEventListener('touchmove', hideOnScroll!)
          if (handleClick) scrollHint.removeEventListener('click', handleClick)
        }
        window.addEventListener('wheel', hideOnScroll, { passive: true, once: true })
        window.addEventListener('touchmove', hideOnScroll, { passive: true, once: true })
      }

      // Content blocks: scroll-triggered
      blocks.forEach((block) => {
        const trigger = ScrollTrigger.create({
          trigger: block,
          start: 'top 88%',
          once: true,
          onEnter: () => {
            tweens.push(
              gsap.to(block, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power2.out',
              })
            )
          },
        })
        triggers.push(trigger)
      })
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }, typingEndTime * 1000)

    return () => {
      clearTimeout(setupTimer)
      tweens.forEach((t) => t.kill())
      triggers.forEach((t) => t.kill())
      if (scrollHint) {
        if (handleClick) scrollHint.removeEventListener('click', handleClick)
        if (hideOnScroll) {
          window.removeEventListener('wheel', hideOnScroll)
          window.removeEventListener('touchmove', hideOnScroll)
        }
        gsap.set(scrollHint, { clearProps: 'opacity' })
      }
      // HMR safety
      if (h1) h1.textContent = h1Text
      if (subtitle) subtitle.textContent = subtitleText
      if (headerMeta) gsap.set(headerMeta, { clearProps: 'opacity,y' })
      blocks.forEach((b) => gsap.set(b, { clearProps: 'opacity,y' }))
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className={className}>
        {children}
      </div>

      {/* Fixed scroll hint — own z-layer */}
      <div
        ref={hintRef}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 cursor-pointer"
        style={{ opacity: 0 }}
        aria-label="Scroll down for more"
        role="button"
      >
        <div
          className="scroll-hint-btn"
          style={{ animation: 'scrollBounce 2s ease-in-out infinite' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 7l4.5 4.5L13.5 7" />
          </svg>
        </div>
      </div>
    </>
  )
}
