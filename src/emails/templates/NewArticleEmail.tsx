import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components';
import { EmailHead } from '../components/EmailHead';
import { EmailHeader } from '../components/EmailHeader';
import { EmailFooter } from '../components/EmailFooter';
import { colors, emailBodyStyle, emailContainerStyle, ctaButtonStyle } from '../components/tokens';

export interface NewArticleEmailProps {
  readonly title: string;
  readonly excerpt: string;
  readonly slug: string;
  readonly category: string;
  readonly unsubscribeUrl: string;
  readonly siteUrl?: string;
}

export function NewArticleEmail({
  title = 'Why AI-Native Companies Need Designers Who Think in Systems',
  excerpt = 'The best AI products aren\'t just well-designed interfaces. They\'re systems where design decisions compound. Here\'s what that means for your next role.',
  slug = 'ai-native-design-systems',
  category = 'insights',
  unsubscribeUrl = '#',
  siteUrl = 'https://aido-d2cc0.web.app',
}: Partial<NewArticleEmailProps> = {}) {
  return (
    <Html>
      <EmailHead />
      <Preview>{title}</Preview>
      <Body style={emailBodyStyle}>
        <Container style={emailContainerStyle}>
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

const categoryStyle: React.CSSProperties = {
  fontSize: '12px',
  color: colors.accent,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  fontWeight: 600,
  margin: '0 0 8px 0',
};

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 600,
  color: colors.foreground,
  margin: '0 0 12px 0',
  letterSpacing: '-0.02em',
  lineHeight: '1.3',
};

const excerptStyle: React.CSSProperties = {
  fontSize: '15px',
  color: colors.textBody,
  lineHeight: '1.6',
  margin: '0 0 24px 0',
};
