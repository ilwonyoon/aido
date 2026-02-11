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

export interface NewArticleEmailProps {
  readonly title: string;
  readonly excerpt: string;
  readonly slug: string;
  readonly category: string;
  readonly unsubscribeUrl: string;
  readonly siteUrl?: string;
}

export function NewArticleEmail({
  title,
  excerpt,
  slug,
  category,
  unsubscribeUrl,
  siteUrl = 'https://aido-d2cc0.web.app',
}: NewArticleEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{title}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <EmailHeader />

          <Text style={categoryStyle}>{category}</Text>
          <Heading as="h2" style={titleStyle}>
            {title}
          </Heading>
          <Text style={excerptStyle}>{excerpt}</Text>

          <Button href={`${siteUrl}/insights/${slug}/`} style={ctaButtonStyle}>
            Read Article
          </Button>

          <EmailFooter unsubscribeUrl={unsubscribeUrl} />
        </Container>
      </Body>
    </Html>
  );
}

export default NewArticleEmail;

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

const categoryStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#0070f3',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  fontWeight: 600,
  margin: '0 0 8px 0',
};

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 600,
  color: '#ededed',
  margin: '0 0 12px 0',
  letterSpacing: '-0.02em',
  lineHeight: '1.3',
};

const excerptStyle: React.CSSProperties = {
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
