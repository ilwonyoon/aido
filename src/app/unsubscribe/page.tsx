'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { unsubscribeFromNewsletter } from '@/lib/firebase/newsletter';

type UnsubscribeStatus = 'loading' | 'success' | 'error' | 'invalid';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<UnsubscribeStatus>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  const email = searchParams.get('email');
  const token = searchParams.get('token');

  const processUnsubscribe = useCallback(async () => {
    if (!email || !token) {
      setStatus('invalid');
      return;
    }

    const result = await unsubscribeFromNewsletter(email, token);

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.error ?? 'Something went wrong');
    }
  }, [email, token]);

  useEffect(() => {
    processUnsubscribe();
  }, [processUnsubscribe]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        {status === 'loading' && (
          <>
            <Text variant="title" className="mb-2">Unsubscribing...</Text>
            <Text variant="body" color="muted">Please wait.</Text>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="w-12 h-12 rounded-full bg-[var(--success)] flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="var(--background)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <Text variant="title" className="mb-2">You&apos;ve been unsubscribed</Text>
            <Text variant="body" color="muted" className="mb-6">
              You will no longer receive emails from AIDO.
            </Text>
            <Button variant="secondary" onClick={() => window.location.href = '/'}>
              Back to AIDO
            </Button>
          </>
        )}

        {status === 'error' && (
          <>
            <Text variant="title" className="mb-2">Something went wrong</Text>
            <Text variant="body" color="muted" className="mb-4">
              {errorMessage}
            </Text>
            <Button variant="secondary" onClick={processUnsubscribe}>
              Try again
            </Button>
          </>
        )}

        {status === 'invalid' && (
          <>
            <Text variant="title" className="mb-2">Invalid unsubscribe link</Text>
            <Text variant="body" color="muted" className="mb-6">
              This link appears to be broken or expired.
            </Text>
            <Button variant="secondary" onClick={() => window.location.href = '/'}>
              Back to AIDO
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <Text variant="body" color="muted">Loading...</Text>
      </div>
    }>
      <UnsubscribeContent />
    </Suspense>
  );
}
