// Send welcome emails to new subscribers
// Runs via GitHub Actions cron every 15 minutes
// Checks for subscribers without welcomeSent flag, sends welcome email, marks as sent

import { Resend } from 'resend';
import { render } from '@react-email/components';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { WelcomeEmail } from '../../src/emails/templates/WelcomeEmail';

const SITE_URL = process.env.SITE_URL ?? 'https://aido-d2cc0.web.app';
const FROM_EMAIL = process.env.NEWSLETTER_FROM_EMAIL ?? 'AIDO <onboarding@resend.dev>';

async function main() {
  const dryRun = process.argv.includes('--dry-run');

  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!serviceAccount) {
    console.error('FIREBASE_SERVICE_ACCOUNT env var is required');
    process.exit(1);
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('RESEND_API_KEY env var is required');
    process.exit(1);
  }

  initializeApp({ credential: cert(JSON.parse(serviceAccount)) });
  const db = getFirestore();
  const resend = new Resend(resendApiKey);

  // Find new subscribers without welcomeSent
  const snapshot = await db
    .collection('newsletter_subscribers')
    .where('status', '==', 'active')
    .where('welcomeSent', '==', false)
    .get();

  // Also check subscribers that don't have the welcomeSent field at all
  const snapshotNoField = await db
    .collection('newsletter_subscribers')
    .where('status', '==', 'active')
    .get();

  const pendingSubscribers = snapshotNoField.docs.filter(
    (doc) => doc.data().welcomeSent === undefined || doc.data().welcomeSent === false
  );

  console.log(`Found ${pendingSubscribers.length} subscribers needing welcome email${dryRun ? ' (DRY RUN)' : ''}`);

  if (pendingSubscribers.length === 0) {
    console.log('No pending welcome emails. Done.');
    return;
  }

  for (const doc of pendingSubscribers) {
    const data = doc.data();
    const email = data.email as string;
    const token = data.unsubscribeToken as string;
    const unsubscribeUrl = `${SITE_URL}/unsubscribe/?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;

    const html = await render(
      WelcomeEmail({ unsubscribeUrl, siteUrl: SITE_URL })
    );

    if (dryRun) {
      console.log(`  [DRY RUN] Would send welcome email to ${email}`);
      continue;
    }

    try {
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

      await doc.ref.update({ welcomeSent: true });
      console.log(`  Sent welcome email to ${email}`);
    } catch (error) {
      console.error(`  Failed to send to ${email}:`, error);
    }

    // Rate limit: 1 second between sends
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log('Welcome email batch complete.');
}

main().catch((error) => {
  console.error('Welcome email script failed:', error);
  process.exit(1);
});
