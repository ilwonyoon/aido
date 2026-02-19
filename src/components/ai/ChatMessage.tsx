'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Phase = 'analyzing' | 'searching' | null;

type ChatMessageProps = {
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
  phase?: Phase;
};

const PHASE_LABELS: Record<string, string> = {
  analyzing: 'Analyzing your query...',
  searching: 'Finding matches...',
};

function TypingIndicator({ phase }: { phase: Phase }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1 items-center">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] animate-bounce"
            style={{ animationDelay: `${delay}ms`, animationDuration: '1s' }}
          />
        ))}
      </div>
      {phase && (
        <span className="text-xs text-[var(--muted)]">{PHASE_LABELS[phase]}</span>
      )}
    </div>
  );
}

export function ChatMessage({ role, content, isStreaming, phase }: ChatMessageProps) {
  const isUser = role === 'user';
  const showTyping = !isUser && content === '' && isStreaming;

  return (
    <div className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center shrink-0 mt-1">
          <span className="text-white text-[10px] font-bold">U</span>
        </div>
      )}
      <div
        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-[var(--accent)] text-white rounded-br-sm'
            : 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] rounded-bl-sm'
        }`}
      >
        {showTyping ? (
          <TypingIndicator phase={phase ?? null} />
        ) : isUser ? (
          <p className="whitespace-pre-wrap">{content}</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => {
                if (href?.startsWith('/')) {
                  return (
                    <Link href={href} className="text-[var(--accent)] hover:underline underline-offset-4">
                      {children}
                    </Link>
                  );
                }
                return (
                  <a href={href} target="_blank" rel="noreferrer" className="text-[var(--accent)] hover:underline underline-offset-4">
                    {children}
                  </a>
                );
              },
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-0.5">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-0.5">{children}</ol>,
              li: ({ children }) => <li className="text-sm">{children}</li>,
              strong: ({ children }) => <strong className="font-semibold text-[var(--foreground)]">{children}</strong>,
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
      {isUser && (
        <div className="w-6 h-6 rounded-full bg-[var(--muted-dim)] flex items-center justify-center shrink-0 mt-1">
          <span className="text-[var(--foreground)] text-[10px] font-bold">Me</span>
        </div>
      )}
    </div>
  );
}
