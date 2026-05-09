import { onDocumentWritten } from 'firebase-functions/v2/firestore';
import { defineSecret } from 'firebase-functions/params';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import { WelcomeEmail } from './emails/templates/WelcomeEmail';

initializeApp();

const resendApiKey = defineSecret('RESEND_API_KEY');

const SITE_URL = 'https://aido-d2cc0.web.app';
const FROM_EMAIL = 'AIDO <onboarding@resend.dev>';

export const sendWelcomeEmail = onDocumentWritten(
  {
    document: 'newsletter_subscribers/{email}',
    secrets: [resendApiKey],
  },
  async (event) => {
    const afterData = event.data?.after?.data();

    // Document was deleted
    if (!afterData) return;

    // Only send to active subscribers
    if (afterData.status !== 'active') return;

    // Already sent welcome email
    if (afterData.welcomeSent === true) return;

    const beforeData = event.data?.before?.data();

    // Determine if this is a new subscription or re-subscription
    const isNewSubscription = !beforeData;
    const isResubscription = beforeData?.status === 'unsubscribed' && afterData.status === 'active';

    if (!isNewSubscription && !isResubscription) return;

    const email = afterData.email as string;
    const token = afterData.unsubscribeToken as string;
    const unsubscribeUrl = `${SITE_URL}/unsubscribe/?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;

    try {
      const html = await render(
        WelcomeEmail({ unsubscribeUrl, siteUrl: SITE_URL })
      );

      const resend = new Resend(resendApiKey.value());

      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: 'Welcome to AIDO Newsletter',
        html,
        headers: {
          'List-Unsubscribe': `<${unsubscribeUrl}>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        },
      });

      // Mark as sent
      const db = getFirestore();
      await db.doc(`newsletter_subscribers/${event.params.email}`).update({
        welcomeSent: true,
        welcomeSentAt: new Date(),
      });

      console.log(`Welcome email sent to ${email}`);
    } catch (error) {
      console.error(`Failed to send welcome email to ${email}:`, error);
      throw error; // Let Cloud Functions retry
    }
  }
);

export { search } from './search';
