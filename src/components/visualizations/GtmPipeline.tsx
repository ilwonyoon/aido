'use client';

import { useState } from 'react';

interface Stage {
  readonly role: string;
  readonly label: string;
  readonly color: string;
  readonly tasks: readonly string[];
  readonly tools: readonly string[];
  readonly aiReplacement: 'replaced' | 'augmented' | 'unchanged';
  readonly aiPlayers: readonly string[];
}

const stages: readonly Stage[] = [
  {
    role: 'SDR',
    label: 'Prospecting & Outreach',
    color: '#ef4444',
    tasks: ['List building', 'Cold emails/calls', 'Lead qualification', 'Meeting booking'],
    tools: ['ZoomInfo', 'Outreach', 'SalesLoft', 'LinkedIn Sales Nav'],
    aiReplacement: 'replaced',
    aiPlayers: ['11x', 'Artisan AI', 'Clay', 'Apollo'],
  },
  {
    role: 'AE',
    label: 'Discovery & Closing',
    color: '#f59e0b',
    tasks: ['Discovery calls', 'Demos', 'Proposals', 'Negotiation', 'Closing'],
    tools: ['Salesforce', 'Gong', 'PandaDoc'],
    aiReplacement: 'augmented',
    aiPlayers: ['Gong', 'TigerEye', 'Nooks'],
  },
  {
    role: 'CSM',
    label: 'Retention & Expansion',
    color: '#22c55e',
    tasks: ['Onboarding', 'Health scoring', 'Renewals', 'Upsell', 'Churn prevention'],
    tools: ['Gainsight', 'ChurnZero', 'Totango'],
    aiReplacement: 'replaced',
    aiPlayers: ['Sierra', 'Intercom Fin', 'Ada'],
  },
  {
    role: 'Marketing',
    label: 'Content & Enablement',
    color: '#8b5cf6',
    tasks: ['Blog posts', 'Ad copy', 'Sales decks', 'Email campaigns', 'Brand voice'],
    tools: ['Marketo', 'HubSpot', 'Pardot'],
    aiReplacement: 'replaced',
    aiPlayers: ['Writer', 'Jasper', 'Copy.ai'],
  },
];

const aiImpactLabel: Record<string, { text: string; color: string }> = {
  replaced: { text: 'Largely Replaced by AI', color: '#ef4444' },
  augmented: { text: 'AI-Augmented', color: '#f59e0b' },
  unchanged: { text: 'Still Human', color: '#6b7280' },
};

export function GtmPipeline() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '1.5rem',
        fontFamily: 'var(--font-sans, system-ui)',
      }}
    >
      {/* Title */}
      <div style={{ marginBottom: '0.5rem' }}>
        <span
          style={{
            fontSize: '0.6875rem',
            fontWeight: 600,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            color: 'var(--muted)',
          }}
        >
          Pre-AI GTM Pipeline
        </span>
      </div>

      {/* Pipeline flow */}
      <div
        style={{
          display: 'flex',
          gap: '2px',
          marginBottom: '1.25rem',
        }}
      >
        {stages.map((stage, i) => {
          const isActive = activeStage === i;
          const isDimmed = activeStage !== null && !isActive;

          return (
            <button
              key={stage.role}
              type="button"
              onClick={() => setActiveStage(isActive ? null : i)}
              style={{
                flex: 1,
                background: isActive
                  ? `${stage.color}18`
                  : 'var(--background)',
                border: isActive
                  ? `1px solid ${stage.color}40`
                  : '1px solid var(--border)',
                borderRadius: i === 0 ? '8px 0 0 8px' : i === stages.length - 1 ? '0 8px 8px 0' : '0',
                padding: '0.875rem 0.75rem',
                cursor: 'pointer',
                opacity: isDimmed ? 0.4 : 1,
                transition: 'all 0.2s ease',
                textAlign: 'center' as const,
                position: 'relative' as const,
              }}
            >
              <div
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  color: isActive ? stage.color : 'var(--foreground)',
                  marginBottom: '0.25rem',
                  transition: 'color 0.2s ease',
                }}
              >
                {stage.role}
              </div>
              <div
                style={{
                  fontSize: '0.6875rem',
                  color: 'var(--muted)',
                  lineHeight: 1.3,
                }}
              >
                {stage.label}
              </div>
              {/* Arrow connector */}
              {i < stages.length - 1 && (
                <div
                  style={{
                    position: 'absolute' as const,
                    right: '-8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 1,
                    color: 'var(--muted)',
                    fontSize: '0.75rem',
                  }}
                >
                  →
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      {activeStage !== null && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '1rem',
            padding: '1rem',
            background: 'var(--background)',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          {/* Pre-AI Tasks */}
          <div>
            <div
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.05em',
                color: 'var(--muted)',
                marginBottom: '0.5rem',
              }}
            >
              Human Tasks
            </div>
            {stages[activeStage].tasks.map((task) => (
              <div
                key={task}
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--foreground)',
                  padding: '0.25rem 0',
                  lineHeight: 1.4,
                }}
              >
                {task}
              </div>
            ))}
          </div>

          {/* Pre-AI Tools */}
          <div>
            <div
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.05em',
                color: 'var(--muted)',
                marginBottom: '0.5rem',
              }}
            >
              Legacy Tools
            </div>
            {stages[activeStage].tools.map((tool) => (
              <div
                key={tool}
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-secondary, var(--muted))',
                  padding: '0.25rem 0',
                  lineHeight: 1.4,
                }}
              >
                {tool}
              </div>
            ))}
          </div>

          {/* AI Replacement */}
          <div>
            <div
              style={{
                fontSize: '0.6875rem',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.05em',
                color: 'var(--muted)',
                marginBottom: '0.5rem',
              }}
            >
              AI Status
            </div>
            <div
              style={{
                display: 'inline-block',
                fontSize: '0.6875rem',
                fontWeight: 600,
                color: aiImpactLabel[stages[activeStage].aiReplacement].color,
                background: `${aiImpactLabel[stages[activeStage].aiReplacement].color}18`,
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                marginBottom: '0.5rem',
              }}
            >
              {aiImpactLabel[stages[activeStage].aiReplacement].text}
            </div>
            {stages[activeStage].aiPlayers.map((player) => (
              <div
                key={player}
                style={{
                  fontSize: '0.8125rem',
                  color: stages[activeStage].color,
                  padding: '0.25rem 0',
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}
              >
                {player}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hint */}
      {activeStage === null && (
        <div
          style={{
            textAlign: 'center' as const,
            fontSize: '0.75rem',
            color: 'var(--muted)',
            padding: '0.5rem 0',
          }}
        >
          Click a stage to see the pre-AI workflow and AI replacement
        </div>
      )}
    </div>
  );
}
