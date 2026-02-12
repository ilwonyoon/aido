'use client';

import { useAuth } from '@/contexts/AuthContext';
import { NewsletterSignup } from '@/components/newsletter/NewsletterSignup';

export default function SubscribePage() {
  const { user } = useAuth();
  const isAdmin = user?.email === 'ilwonyoon@gmail.com';

  if (!isAdmin) {
    return (
      <div className="max-w-lg mx-auto py-16 sm:py-24 text-center">
        <h1 className="text-2xl font-semibold mb-3">Coming soon</h1>
        <p className="text-body text-[var(--muted)]">
          Newsletter subscription is not yet available.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto py-16 sm:py-24">
      <h1 className="text-2xl font-semibold mb-3">
        Stay updated
      </h1>
      <p className="text-body text-[var(--muted)] mb-8">
        Get notified when new AI design jobs are posted and when we publish new insights.
        No spam, unsubscribe anytime.
      </p>
      <NewsletterSignup source="newsletter-page" />
    </div>
  );
}
