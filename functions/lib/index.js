"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmail = void 0;
const firestore_1 = require("firebase-functions/v2/firestore");
const params_1 = require("firebase-functions/params");
const app_1 = require("firebase-admin/app");
const firestore_2 = require("firebase-admin/firestore");
const resend_1 = require("resend");
const components_1 = require("@react-email/components");
const WelcomeEmail_1 = require("./emails/templates/WelcomeEmail");
(0, app_1.initializeApp)();
const resendApiKey = (0, params_1.defineSecret)('RESEND_API_KEY');
const SITE_URL = 'https://aido-d2cc0.web.app';
const FROM_EMAIL = 'AIDO <onboarding@resend.dev>';
exports.sendWelcomeEmail = (0, firestore_1.onDocumentWritten)({
    document: 'newsletter_subscribers/{email}',
    secrets: [resendApiKey],
}, async (event) => {
    const afterData = event.data?.after?.data();
    // Document was deleted
    if (!afterData)
        return;
    // Only send to active subscribers
    if (afterData.status !== 'active')
        return;
    // Already sent welcome email
    if (afterData.welcomeSent === true)
        return;
    const beforeData = event.data?.before?.data();
    // Determine if this is a new subscription or re-subscription
    const isNewSubscription = !beforeData;
    const isResubscription = beforeData?.status === 'unsubscribed' && afterData.status === 'active';
    if (!isNewSubscription && !isResubscription)
        return;
    const email = afterData.email;
    const token = afterData.unsubscribeToken;
    const unsubscribeUrl = `${SITE_URL}/unsubscribe/?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;
    try {
        const html = await (0, components_1.render)((0, WelcomeEmail_1.WelcomeEmail)({ unsubscribeUrl, siteUrl: SITE_URL }));
        const resend = new resend_1.Resend(resendApiKey.value());
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
        const db = (0, firestore_2.getFirestore)();
        await db.doc(`newsletter_subscribers/${event.params.email}`).update({
            welcomeSent: true,
            welcomeSentAt: new Date(),
        });
        console.log(`Welcome email sent to ${email}`);
    }
    catch (error) {
        console.error(`Failed to send welcome email to ${email}:`, error);
        throw error; // Let Cloud Functions retry
    }
});
//# sourceMappingURL=index.js.map