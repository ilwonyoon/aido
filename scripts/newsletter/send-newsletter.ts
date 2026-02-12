// Newsletter send script
// Detects new jobs/articles via git diff, renders React Email templates, sends via Resend
// Run: npx tsx scripts/newsletter/send-newsletter.ts [--dry-run] [--type jobs|article]

import { Resend } from 'resend';
import { render } from '@react-email/components';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { detectChanges, type NewJob } from './detect-changes';
import { NewJobsDigest } from '../../src/emails/templates/NewJobsDigest';
import { NewArticleEmail } from '../../src/emails/templates/NewArticleEmail';

const SITE_URL = process.env.SITE_URL ?? 'https://aido-d2cc0.web.app';
const FROM_EMAIL = process.env.NEWSLETTER_FROM_EMAIL ?? 'AIDO <onboarding@resend.dev>';
const BATCH_SIZE = 50; // Resend batch limit is 100, keep some buffer
const DELAY_BETWEEN_BATCHES_MS = 2000;

interface Subscriber {
  readonly email: string;
  readonly unsubscribeToken: string;
  readonly preferences: {
    readonly jobAlerts: boolean;
    readonly articles: boolean;
  };
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const typeArg = args.find((a) => a.startsWith('--type='))?.split('=')[1];

  console.log(`Newsletter send script started${dryRun ? ' (DRY RUN)' : ''}`);

  // Initialize Firebase Admin
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

  initializeApp({
    credential: cert(JSON.parse(serviceAccount)),
  });

  const db = getFirestore();
  const resend = new Resend(resendApiKey);

  // Detect changes
  const changes = detectChanges();
  console.log(`Detected: ${changes.newJobs.length} new jobs, ${changes.newArticles.length} new articles`);

  if (changes.newJobs.length === 0 && changes.newArticles.length === 0) {
    console.log('No new content to send. Exiting.');
    return;
  }

  // Get active subscribers
  const subscribers = await getActiveSubscribers(db);
  console.log(`Active subscribers: ${subscribers.length}`);

  if (subscribers.length === 0) {
    console.log('No subscribers. Exiting.');
    return;
  }

  // Send job digest
  if (changes.newJobs.length > 0 && typeArg !== 'article') {
    const jobSubscribers = subscribers.filter((s) => s.preferences.jobAlerts);
    console.log(`Sending job digest to ${jobSubscribers.length} subscribers...`);

    await sendJobsDigest(resend, jobSubscribers, changes.newJobs, dryRun);
  }

  // Send article notification
  if (changes.newArticles.length > 0 && typeArg !== 'jobs') {
    const articleSubscribers = subscribers.filter((s) => s.preferences.articles);

    for (const article of changes.newArticles) {
      console.log(`Sending article "${article.title}" to ${articleSubscribers.length} subscribers...`);
      await sendArticleNotification(resend, articleSubscribers, article, dryRun);
    }
  }

  console.log('Newsletter send complete.');
}

async function getActiveSubscribers(
  db: FirebaseFirestore.Firestore
): Promise<ReadonlyArray<Subscriber>> {
  const snapshot = await db
    .collection('newsletter_subscribers')
    .where('status', '==', 'active')
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      email: data.email,
      unsubscribeToken: data.unsubscribeToken,
      preferences: {
        jobAlerts: data.preferences?.jobAlerts ?? true,
        articles: data.preferences?.articles ?? true,
      },
    };
  });
}

function buildUnsubscribeUrl(email: string, token: string): string {
  return `${SITE_URL}/unsubscribe/?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;
}

async function sendJobsDigest(
  resend: Resend,
  subscribers: ReadonlyArray<Subscriber>,
  jobs: ReadonlyArray<NewJob>,
  dryRun: boolean
): Promise<void> {
  const today = new Date();
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const dateRange = `${formatDate(weekAgo)} — ${formatDate(today)}`;

  const jobCards = jobs.map((job) => ({
    companyName: job.companyName,
    companyId: job.companyId,
    title: job.title,
    location: job.location,
    url: job.url,
    compensation: job.compensation,
    siteUrl: SITE_URL,
  }));

  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);

    const emails = batch.map((subscriber) => {
      const unsubscribeUrl = buildUnsubscribeUrl(subscriber.email, subscriber.unsubscribeToken);

      return {
        from: FROM_EMAIL,
        to: subscriber.email,
        subject: `${jobs.length} New AI Design ${jobs.length === 1 ? 'Job' : 'Jobs'} This Week`,
        react: NewJobsDigest({
          jobs: jobCards,
          totalNewJobs: jobs.length,
          dateRange,
          unsubscribeUrl,
          siteUrl: SITE_URL,
        }),
        headers: {
          'List-Unsubscribe': `<${unsubscribeUrl}>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        },
      };
    });

    if (dryRun) {
      console.log(`  [DRY RUN] Would send to ${emails.length} subscribers (batch ${Math.floor(i / BATCH_SIZE) + 1})`);
      for (const email of emails) {
        console.log(`    - ${email.to}`);
      }
    } else {
      try {
        const result = await resend.batch.send(emails);
        console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: sent ${emails.length} emails`, result);
      } catch (error) {
        console.error(`  Batch ${Math.floor(i / BATCH_SIZE) + 1} failed:`, error);
      }
    }

    // Rate limit between batches
    if (i + BATCH_SIZE < subscribers.length) {
      await sleep(DELAY_BETWEEN_BATCHES_MS);
    }
  }
}

async function sendArticleNotification(
  resend: Resend,
  subscribers: ReadonlyArray<Subscriber>,
  article: { title: string; excerpt: string; slug: string; category: string },
  dryRun: boolean
): Promise<void> {
  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);

    const emails = batch.map((subscriber) => {
      const unsubscribeUrl = buildUnsubscribeUrl(subscriber.email, subscriber.unsubscribeToken);

      return {
        from: FROM_EMAIL,
        to: subscriber.email,
        subject: `New on AIDO: ${article.title}`,
        react: NewArticleEmail({
          ...article,
          unsubscribeUrl,
          siteUrl: SITE_URL,
        }),
        headers: {
          'List-Unsubscribe': `<${unsubscribeUrl}>`,
          'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
        },
      };
    });

    if (dryRun) {
      console.log(`  [DRY RUN] Would send to ${emails.length} subscribers (batch ${Math.floor(i / BATCH_SIZE) + 1})`);
    } else {
      try {
        const result = await resend.batch.send(emails);
        console.log(`  Batch ${Math.floor(i / BATCH_SIZE) + 1}: sent ${emails.length} emails`, result);
      } catch (error) {
        console.error(`  Batch ${Math.floor(i / BATCH_SIZE) + 1} failed:`, error);
      }
    }

    if (i + BATCH_SIZE < subscribers.length) {
      await sleep(DELAY_BETWEEN_BATCHES_MS);
    }
  }
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main().catch((error) => {
  console.error('Newsletter send failed:', error);
  process.exit(1);
});
