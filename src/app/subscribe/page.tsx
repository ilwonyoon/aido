import { NewsletterSignup } from '@/components/newsletter/NewsletterSignup';

export const metadata = {
  title: 'Subscribe',
  description: 'Get notified about new AI design jobs and insights from AIDO.',
};

export default function SubscribePage() {
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
