'use client';

import { FormEvent, useMemo, useRef, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { StarterPrompts } from './StarterPrompts';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const API_URL =
  process.env.NEXT_PUBLIC_AI_SEARCH_API_URL ??
  'https://us-central1-aido-d2cc0.cloudfunctions.net/search';

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const canSubmit = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    });
  };

  const runChat = async (text: string) => {
    const prompt = text.trim();
    if (!prompt || isLoading) return;

    const history = [...messages];
    const nextMessages = [...history, { role: 'user' as const, content: prompt }, { role: 'assistant' as const, content: '' }];
    setMessages(nextMessages);
    setInput('');
    setIsLoading(true);
    scrollToBottom();

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: prompt,
          history: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error('Search request failed');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split('\n\n');
        buffer = chunks.pop() ?? '';

        for (const chunk of chunks) {
          const line = chunk
            .split('\n')
            .map((row) => row.trim())
            .find((row) => row.startsWith('data: '));

          if (!line) continue;
          const payload = line.slice(6);
          if (payload === '[DONE]') continue;

          try {
            const parsed = JSON.parse(payload) as { text?: string; error?: string };

            if (parsed.error) {
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: 'assistant',
                  content: `Error: ${parsed.error}`,
                };
                return updated;
              });
              continue;
            }

            if (parsed.text) {
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                if (!last || last.role !== 'assistant') return prev;
                updated[updated.length - 1] = {
                  role: 'assistant',
                  content: last.content + parsed.text,
                };
                return updated;
              });
              scrollToBottom();
            }
          } catch {
            continue;
          }
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: 'assistant',
          content: 'Something went wrong. Please try again.',
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await runChat(input);
  };

  return (
    <div className="space-y-4">
      {messages.length === 0 && <StarterPrompts onSelect={runChat} />}

      <div ref={listRef} className="card p-5 min-h-[360px] max-h-[62vh] overflow-y-auto space-y-3">
        {messages.length === 0 ? (
          <p className="text-sm text-[var(--muted)]">Ask about roles, stage, region, compensation, or interview prep.</p>
        ) : (
          messages.map((message, idx) => (
            <ChatMessage key={`${message.role}-${idx}`} role={message.role} content={message.content} />
          ))
        )}
      </div>

      <form onSubmit={onSubmit} className="card p-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about AI companies and design roles..."
            className="flex-1 bg-[var(--card)] border border-[var(--border)] rounded-lg px-3 py-2 text-sm"
          />
          <button
            type="submit"
            disabled={!canSubmit}
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--background)] text-sm font-medium disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
