import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components';
import { EmailHead } from '../components/EmailHead';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { colors, typeScale, fontWeight, emailBodyStyle, emailContainerStyle, ctaButtonStyle } from '../components/tokens';

export interface WelcomeEmailProps {
  readonly unsubscribeUrl: string;
  readonly siteUrl?: string;
}

export function WelcomeEmail({
  unsubscribeUrl = '#',
  siteUrl = 'https://aido-d2cc0.web.app',
}: Partial<WelcomeEmailProps> = {}) {
  return (
    <Html>
      <EmailHead />
      <Preview>Welcome to AIDO — AI Design Opportunities</Preview>
      <Body style={emailBodyStyle}>
        <Container style={emailContainerStyle}>
          <EmailHeader />

          <Heading as="h2" style={headingStyle}>
            Welcome to AIDO
          </Heading>
          <Text style={bodyTextStyle}>
            You&apos;ll receive updates when new AI design jobs are posted and
            when we publish new insights. We keep it short and relevant.
          </Text>

          <Button href={`${siteUrl}/jobs/`} style={ctaButtonStyle}>
            Browse Jobs
          </Button>

          <Text style={secondaryTextStyle}>
            You can also check out our latest{' '}
            <Link href={`${siteUrl}/insights/`} style={linkStyle}>insights and analysis</Link>.
          </Text>

          <EmailFooter unsubscribeUrl={unsubscribeUrl} />
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;

// 3xl scale: 22px, lh 1.2, ls -0.03em
const headingStyle: React.CSSProperties = {
  fontSize: typeScale['3xl'].fontSize,
  fontWeight: fontWeight.semibold,
  lineHeight: typeScale['3xl'].lineHeight,
  letterSpacing: typeScale['3xl'].letterSpacing,
  color: colors.foreground,
  margin: '0 0 12px 0',
};

// base scale: 15px, lh 1.7, ls -0.01em
const bodyTextStyle: React.CSSProperties = {
  fontSize: typeScale.base.fontSize,
  fontWeight: fontWeight.normal,
  lineHeight: typeScale.base.lineHeight,
  letterSpacing: typeScale.base.letterSpacing,
  color: colors.textBody,
  margin: '0 0 24px 0',
};

// sm scale: 13px, lh 1.65
const secondaryTextStyle: React.CSSProperties = {
  fontSize: typeScale.sm.fontSize,
  fontWeight: fontWeight.normal,
  lineHeight: typeScale.sm.lineHeight,
  color: colors.muted,
  margin: '16px 0 0 0',
};

const linkStyle: React.CSSProperties = {
  color: colors.accentLight,
  textDecoration: 'underline',
};
