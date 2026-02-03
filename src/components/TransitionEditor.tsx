'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

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

interface SliderRowProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (v: number) => void
}

function SliderRow({ label, value, min, max, step, unit, onChange }: SliderRowProps) {
  return (
    <div className="flex items-center gap-2 mb-1.5">
      <span className="text-[10px] w-16 shrink-0" style={{ color: '#888' }}>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 h-1 rounded-full appearance-none cursor-pointer"
        style={{
          background: 'linear-gradient(to right, #222 0%, #666 100%)',
          accentColor: 'var(--accent)',
        }}
      />
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          const v = parseFloat(e.target.value)
          if (!isNaN(v)) onChange(v)
        }}
        className="w-[52px] text-[11px] font-mono text-right px-1 py-0.5 rounded border"
        style={{
          background: 'rgba(255,255,255,0.1)',
          borderColor: 'rgba(255,255,255,0.2)',
          color: '#fff',
        }}
      />
      <span className="text-[9px] w-6" style={{ color: '#666' }}>{unit}</span>
    </div>
  )
}

/**
 * Floating dev tool for tweaking page transition values.
 * Emits a custom event with current values on every change.
 * Animation hooks listen for 'transition-values-update' events.
 */
export function TransitionEditor() {
  const [values, setValues] = useState(DEFAULTS)
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const update = useCallback((field: keyof TransitionValues, v: number) => {
    setValues((prev) => ({ ...prev, [field]: v }))
  }, [])

  // Emit values on every change
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('transition-values-update', { detail: values })
    )
  }, [values])

  const handleReset = useCallback(() => setValues(DEFAULTS), [])

  const handleCopy = useCallback(() => {
    const lines = [
      '// Transition values',
      `headerDuration: ${values.headerDuration}`,
      `headerDelay: ${values.headerDelay}`,
      `cardDuration: ${values.cardDuration}`,
      `cardStagger: ${values.cardStagger}`,
      `cardYOffset: ${values.cardYOffset}`,
      `sectionDuration: ${values.sectionDuration}`,
      `sectionYOffset: ${values.sectionYOffset}`,
      `scrollTrigger: ${values.scrollTrigger}%`,
    ]
    navigator.clipboard.writeText(lines.join('\n'))
    setCopied(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 1500)
  }, [values])

  const handleReplay = useCallback(() => {
    window.dispatchEvent(new CustomEvent('transition-replay', { detail: values }))
  }, [values])

  return (
    <>
      {/* Toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed top-4 right-4 z-[200] px-3 py-1.5 text-xs font-medium rounded-md border transition-colors hidden lg:block"
        style={{
          background: open ? 'var(--accent)' : 'var(--card)',
          borderColor: open ? 'var(--accent)' : 'var(--border)',
          color: open ? '#fff' : 'var(--muted)',
        }}
      >
        {open ? 'Close' : 'Transitions'}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed top-14 right-4 z-[200] w-80 max-h-[80vh] overflow-y-auto rounded-lg border shadow-2xl"
          style={{
            background: 'rgba(17, 17, 17, 0.95)',
            borderColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Header */}
          <div
            className="px-4 pt-3 pb-2 border-b sticky top-0"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              background: 'rgba(17, 17, 17, 0.98)',
            }}
          >
            <div className="text-xs font-semibold tracking-wide" style={{ color: 'var(--foreground)' }}>
              Transition Editor
            </div>
          </div>

          <div className="px-4 py-3 space-y-4">
            {/* Header group */}
            <div>
              <div className="text-[11px] font-bold mb-2" style={{ color: '#fff' }}>
                Header Entrance
              </div>
              <SliderRow label="Duration" value={values.headerDuration} min={0.1} max={2} step={0.05} unit="s" onChange={(v) => update('headerDuration', v)} />
              <SliderRow label="Delay" value={values.headerDelay} min={0} max={1} step={0.05} unit="s" onChange={(v) => update('headerDelay', v)} />
            </div>

            {/* Cards group */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
              <div className="text-[11px] font-bold mb-2" style={{ color: '#fff' }}>
                Card Stagger
              </div>
              <SliderRow label="Duration" value={values.cardDuration} min={0.1} max={2} step={0.05} unit="s" onChange={(v) => update('cardDuration', v)} />
              <SliderRow label="Stagger" value={values.cardStagger} min={0.01} max={0.3} step={0.01} unit="s" onChange={(v) => update('cardStagger', v)} />
              <SliderRow label="Y Offset" value={values.cardYOffset} min={0} max={60} step={2} unit="px" onChange={(v) => update('cardYOffset', v)} />
            </div>

            {/* Sections group */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
              <div className="text-[11px] font-bold mb-2" style={{ color: '#fff' }}>
                Section Reveal
              </div>
              <SliderRow label="Duration" value={values.sectionDuration} min={0.1} max={2} step={0.05} unit="s" onChange={(v) => update('sectionDuration', v)} />
              <SliderRow label="Y Offset" value={values.sectionYOffset} min={0} max={60} step={2} unit="px" onChange={(v) => update('sectionYOffset', v)} />
              <SliderRow label="Trigger" value={values.scrollTrigger} min={50} max={100} step={1} unit="%" onChange={(v) => update('scrollTrigger', v)} />
            </div>
          </div>

          {/* Actions */}
          <div
            className="px-4 py-3 flex gap-2 border-t sticky bottom-0"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              background: 'rgba(17, 17, 17, 0.98)',
            }}
          >
            <button
              onClick={handleReplay}
              className="flex-1 px-3 py-1.5 text-[11px] font-medium rounded-md transition-colors"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Replay
            </button>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-[11px] font-medium rounded-md transition-colors"
              style={{
                background: copied ? 'var(--success)' : 'rgba(255,255,255,0.1)',
                color: '#fff',
              }}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={handleReset}
              className="px-3 py-1.5 text-[11px] font-medium rounded-md border transition-colors"
              style={{
                background: 'transparent',
                borderColor: 'rgba(255,255,255,0.1)',
                color: 'var(--muted)',
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  )
}
