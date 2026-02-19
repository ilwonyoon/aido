'use client';

type StarterPromptsProps = {
  onSelect: (text: string) => void;
};

const PROMPTS = [
  '0→1 AI product design 하고 싶어, SF 선호',
  'Series A-B에서 디자인 리더십 있는 회사 추천해줘',
  'Remote OK이고 보상 좋은 AI 스타트업은?',
  'Anthropic vs Cursor 비교해줘',
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
