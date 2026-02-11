import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';

export interface WelcomeEmailProps {
  readonly unsubscribeUrl: string;
  readonly siteUrl?: string;
}

export function WelcomeEmail({
  unsubscribeUrl,
  siteUrl = 'https://aido-d2cc0.web.app',
}: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to AIDO — AI Design Opportunities</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
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
            <a href={`${siteUrl}/insights/`} style={linkStyle}>insights and analysis</a>.
          </Text>

          <EmailFooter unsubscribeUrl={unsubscribeUrl} />
        </Container>
      </Body>
    </Html>
  );
}

export default WelcomeEmail;

const bodyStyle: React.CSSProperties = {
  backgroundColor: '#000000',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  margin: '0',
  padding: '0',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '40px 20px',
};

const headingStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 600,
  color: '#ededed',
  margin: '0 0 12px 0',
  letterSpacing: '-0.02em',
};

const bodyTextStyle: React.CSSProperties = {
  fontSize: '15px',
  color: '#888888',
  lineHeight: '1.6',
  margin: '0 0 24px 0',
};

const ctaButtonStyle: React.CSSProperties = {
  backgroundColor: '#0070f3',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 600,
  borderRadius: '8px',
  padding: '12px 24px',
  textDecoration: 'none',
  display: 'inline-block',
};

const secondaryTextStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#666666',
  lineHeight: '1.6',
  margin: '16px 0 0 0',
};

const linkStyle: React.CSSProperties = {
  color: '#3291ff',
  textDecoration: 'underline',
};
