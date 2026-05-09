'use client';

type StarterPromptsProps = {
  onSelect: (text: string) => void;
};

const PROMPTS = [
  'I want 0→1 AI product design roles, preferably in SF.',
  'Recommend Series A-B companies with strong design leadership.',
  'Which AI startups are remote-friendly with good compensation?',
  'Compare Anthropic vs Cursor for a product designer.',
];

export function StarterPrompts({ onSelect }: StarterPromptsProps) {
  return (
    <div className="card p-5">
      <p className="text-sm text-[var(--muted)] mb-3">Try one of these prompts</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => onSelect(prompt)}
            className="text-left px-3 py-2 rounded-lg border border-[var(--border)] bg-[var(--card)] hover:border-[var(--accent)] text-sm"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
