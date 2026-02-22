'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { ChatMessage } from './ChatMessage';
import { StarterPrompts } from './StarterPrompts';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type Phase = 'analyzing' | 'searching' | null;

const API_URL =
  process.env.NEXT_PUBLIC_AI_SEARCH_API_URL ??
  'https://us-central1-aido-d2cc0.cloudfunctions.net/search';

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [phase, setPhase] = useState<Phase>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const canSubmit = useMemo(() => input.trim().length > 0 && !isLoading, [input, isLoading]);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    });
  };

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  }, [input]);

  const runChat = async (text: string) => {
    const prompt = text.trim();
    if (!prompt || isLoading) return;

    const history = [...messages];
    setMessages([...history, { role: 'user', content: prompt }, { role: 'assistant', content: '' }]);
    setInput('');
    setIsLoading(true);
    setPhase(null);
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

      if (!res.ok || !res.body) throw new Error('Request failed');

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
            const parsed = JSON.parse(payload) as { text?: string; error?: string; phase?: string };

            if (parsed.phase) {
              setPhase(parsed.phase as Phase);
              continue;
            }

            if (parsed.error) {
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = { role: 'assistant', content: `Error: ${parsed.error}` };
                return updated;
              });
              continue;
            }

            if (parsed.text) {
              setPhase(null);
              setMessages((prev) => {
                const updated = [...prev];
                const last = updated[updated.length - 1];
                if (!last || last.role !== 'assistant') return prev;
                updated[updated.length - 1] = { role: 'assistant', content: last.content + parsed.text };
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
        updated[updated.length - 1] = { role: 'assistant', content: 'Something went wrong. Please try again.' };
        return updated;
      });
    } finally {
      setIsLoading(false);
      setPhase(null);
      scrollToBottom();
      textareaRef.current?.focus();
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await runChat(input);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      runChat(input);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {messages.length === 0 && <StarterPrompts onSelect={runChat} />}

      <div
        ref={listRef}
        className="card p-4 min-h-[360px] max-h-[60vh] overflow-y-auto flex flex-col gap-3"
      >
        {messages.length === 0 ? (
          <p className="text-sm text-[var(--muted)] m-auto">Ask about companies, roles, compensation, or interview prep.</p>
        ) : (
          messages.map((message, idx) => (
            <ChatMessage
              key={`${message.role}-${idx}`}
              role={message.role}
              content={message.content}
              isStreaming={isLoading && idx === messages.length - 1 && message.role === 'assistant'}
              phase={isLoading && idx === messages.length - 1 && message.role === 'assistant' ? phase : null}
            />
          ))
        )}
      </div>

      <form onSubmit={onSubmit} className="card p-3">
        <div className="flex items-end gap-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={1}
            placeholder="Ask anything... (Enter to send, Shift+Enter for new line)"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
              resize: 'none',
              overflow: 'hidden',
            }}
            className="flex-1 bg-transparent border-0 outline-none text-sm py-1.5 text-[var(--foreground)] placeholder:text-[var(--muted)]"
          />
          <button
            type="submit"
            disabled={!canSubmit}
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium disabled:opacity-40 shrink-0 transition-opacity"
          >
            {isLoading ? '...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}
