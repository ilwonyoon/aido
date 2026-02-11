'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { subscribeToNewsletter } from '@/lib/firebase/newsletter';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'already' | 'error';

interface NewsletterSignupProps {
  readonly source?: 'footer' | 'newsletter-page';
}

export function NewsletterSignup({ source = 'footer' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    setStatus('loading');
    setErrorMessage('');

    const result = await subscribeToNewsletter(email, source);

    if (result.success) {
      setStatus(result.alreadySubscribed ? 'already' : 'success');
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(result.error ?? 'Something went wrong');
    }
  }

  if (status === 'success' || status === 'already') {
    return (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[var(--success)] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.5 4.5L6 12L2.5 8.5" stroke="var(--background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <Text variant="body" color="muted">
          {status === 'already' ? 'You\'re already subscribed!' : 'You\'re in! We\'ll keep you updated.'}
        </Text>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === 'error') setStatus('idle');
        }}
        placeholder="your@email.com"
        required
        className="
          h-[var(--control-height-md)]
          px-4 text-body
          bg-[var(--background)]
          border border-[var(--border)]
          rounded-lg
          text-[var(--foreground)]
          placeholder:text-[var(--muted)]
          focus:outline-none focus:border-[var(--accent)]
          transition-colors
          w-full sm:w-[280px]
        "
      />
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {status === 'error' && (
        <Text variant="caption" color="error" className="sm:absolute sm:mt-12">
          {errorMessage}
        </Text>
      )}
    </form>
  );
}
