/**
 * Server-side script to process company research requests from Firestore.
 *
 * Usage:
 *   npx tsx scripts/process-company-requests.ts --next
 *   npx tsx scripts/process-company-requests.ts --start <requestId>
 *   npx tsx scripts/process-company-requests.ts --complete <requestId> <companyId>
 *   npx tsx scripts/process-company-requests.ts --fail <requestId> <errorMessage>
 *
 * Requires firebase-admin. Authenticates via:
 *   1. Service account at ~/.config/firebase/aido-service-account.json
 *   2. GOOGLE_APPLICATION_CREDENTIALS env var
 *   3. gcloud application-default credentials
 */

import * as admin from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';

const PROJECT_ID = 'aido-d2cc0';
const COLLECTION = 'companyRequests';

function initializeFirebase(): admin.firestore.Firestore {
  if (admin.apps.length > 0) {
    return admin.firestore();
  }

  const serviceAccountPath = path.join(
    process.env.HOME || '',
    '.config', 'firebase', 'aido-service-account.json'
  );

  if (fs.existsSync(serviceAccountPath)) {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: PROJECT_ID,
    });
  } else {
    // Fall back to Application Default Credentials
    admin.initializeApp({
      projectId: PROJECT_ID,
    });
  }

  return admin.firestore();
}

async function getNextPending(): Promise<void> {
  const db = initializeFirebase();
  const snapshot = await db.collection(COLLECTION)
    .where('status', '==', 'pending')
    .orderBy('createdAt', 'asc')
    .limit(1)
    .get();

  if (snapshot.empty) {
    process.stdout.write('NO_PENDING_REQUESTS\n');
    return;
  }

  const doc = snapshot.docs[0];
  const data = doc.data();
  const websiteUrl = data.websiteUrl || '';

  // Output: REQUEST_ID|CompanyName|WebsiteURL
  process.stdout.write(`${doc.id}|${data.companyName}|${websiteUrl}\n`);
}

async function markAsResearching(requestId: string): Promise<void> {
  const db = initializeFirebase();
  await db.collection(COLLECTION).doc(requestId).update({
    status: 'researching',
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    researchStartedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
  process.stdout.write(`OK: ${requestId} marked as researching\n`);
}

async function markAsCompleted(requestId: string, companyId: string): Promise<void> {
  const db = initializeFirebase();
  await db.collection(COLLECTION).doc(requestId).update({
    status: 'completed',
    companyId,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    researchCompletedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
  process.stdout.write(`OK: ${requestId} marked as completed (companyId: ${companyId})\n`);
}

async function markAsFailed(requestId: string, errorMessage: string): Promise<void> {
  const db = initializeFirebase();
  await db.collection(COLLECTION).doc(requestId).update({
    status: 'failed',
    errorMessage,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
  });
  process.stdout.write(`OK: ${requestId} marked as failed\n`);
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case '--next':
      await getNextPending();
      break;

    case '--start': {
      const requestId = args[1];
      if (!requestId) {
        console.error('Usage: --start <requestId>');
        process.exit(1);
      }
      await markAsResearching(requestId);
      break;
    }

    case '--complete': {
      const requestId = args[1];
      const companyId = args[2];
      if (!requestId || !companyId) {
        console.error('Usage: --complete <requestId> <companyId>');
        process.exit(1);
      }
      await markAsCompleted(requestId, companyId);
      break;
    }

    case '--fail': {
      const requestId = args[1];
      const errorMessage = args.slice(2).join(' ');
      if (!requestId || !errorMessage) {
        console.error('Usage: --fail <requestId> <errorMessage>');
        process.exit(1);
      }
      await markAsFailed(requestId, errorMessage);
      break;
    }

    default:
      console.error('Commands: --next, --start <id>, --complete <id> <companyId>, --fail <id> <msg>');
      process.exit(1);
  }

  process.exit(0);
}

main().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
