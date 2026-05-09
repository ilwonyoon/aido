export const PRIVATE_APP_EMAILS = ['ilwonyoon@gmail.com'] as const;
export const PRIVATE_APP_DOMAIN = 'ilwonyoon.com';

export function isPrivateAppUser(email?: string | null): boolean {
  if (!email) return false;
  return (
    PRIVATE_APP_EMAILS.includes(email as (typeof PRIVATE_APP_EMAILS)[number]) ||
    email.endsWith(`@${PRIVATE_APP_DOMAIN}`)
  );
}
