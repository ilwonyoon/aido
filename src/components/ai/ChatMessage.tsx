'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ChatMessageProps = {
  role: 'user' | 'assistant';
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[88%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? 'bg-[var(--accent)] text-[var(--background)]'
            : 'bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)]'
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{content}</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ href, children }) => {
                if (href?.startsWith('/')) {
                  return (
                    <Link href={href} className="underline underline-offset-4 hover:text-[var(--accent)]">
                      {children}
                    </Link>
                  );
                }
                return (
                  <a href={href} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[var(--accent)]">
                    {children}
                  </a>
                );
              },
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              ul: ({ children }) => <ul className="list-disc pl-5 mb-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal pl-5 mb-2">{children}</ol>,
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
