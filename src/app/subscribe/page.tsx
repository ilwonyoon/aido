import { Text } from '@/components/ui/Text';
import { NewsletterSignup } from '@/components/newsletter/NewsletterSignup';

export const metadata = {
  title: 'Subscribe',
  description: 'Get notified about new AI design jobs and insights from AIDO.',
};

export default function SubscribePage() {
  return (
    <div className="max-w-lg mx-auto py-16 sm:py-24">
      <Text variant="display" className="mb-3">
        Stay updated
      </Text>
      <Text variant="body-lg" color="muted" className="mb-8">
        Get notified when new AI design jobs are posted and when we publish new insights.
        No spam, unsubscribe anytime.
      </Text>
      <NewsletterSignup source="newsletter-page" />
    </div>
  );
}
