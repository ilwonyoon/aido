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
import { colors, emailBodyStyle, emailContainerStyle, ctaButtonStyle } from '../components/tokens';

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

const headingStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 600,
  color: colors.foreground,
  margin: '0 0 12px 0',
  letterSpacing: '-0.02em',
};

const bodyTextStyle: React.CSSProperties = {
  fontSize: '15px',
  color: colors.textBody,
  lineHeight: '1.6',
  margin: '0 0 24px 0',
};

const secondaryTextStyle: React.CSSProperties = {
  fontSize: '14px',
  color: colors.muted,
  lineHeight: '1.6',
  margin: '16px 0 0 0',
};

const linkStyle: React.CSSProperties = {
  color: colors.accentLight,
  textDecoration: 'underline',
};
