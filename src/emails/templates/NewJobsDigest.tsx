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
import { JobCard, type JobCardProps } from '../components/JobCard';
import { colors, emailBodyStyle, emailContainerStyle, ctaButtonStyle } from '../components/tokens';

export interface NewJobsDigestProps {
  readonly jobs: ReadonlyArray<JobCardProps>;
  readonly totalNewJobs: number;
  readonly dateRange: string;
  readonly unsubscribeUrl: string;
  readonly siteUrl?: string;
}

const previewJobs: ReadonlyArray<JobCardProps> = [
  {
    companyName: 'Anthropic',
    companyId: 'anthropic',
    title: 'Senior Product Designer, Claude',
    location: 'San Francisco, CA',
    url: 'https://anthropic.com/careers',
    compensation: '$180K\u2013$250K + Equity',
  },
  {
    companyName: 'Cursor',
    companyId: 'cursor',
    title: 'Product Designer',
    location: 'San Francisco, CA',
    url: 'https://cursor.com/careers',
    compensation: '$160K\u2013$220K',
  },
  {
    companyName: 'Perplexity',
    companyId: 'perplexity',
    title: 'Staff Product Designer',
    location: 'San Francisco, CA',
    url: 'https://perplexity.ai/careers',
  },
];

export function NewJobsDigest({
  jobs = previewJobs,
  totalNewJobs = 3,
  dateRange = 'Feb 4 \u2014 Feb 11',
  unsubscribeUrl = '#',
  siteUrl = 'https://aido-d2cc0.web.app',
}: Partial<NewJobsDigestProps> = {}) {
  const previewText = `${totalNewJobs} new AI design ${totalNewJobs === 1 ? 'job' : 'jobs'} this week`;

  return (
    <Html>
      <EmailHead />
      <Preview>{previewText}</Preview>
      <Body style={emailBodyStyle}>
        <Container style={emailContainerStyle}>
          <EmailHeader />

          <Heading as="h2" style={headingStyle}>
            {totalNewJobs} New AI Design {totalNewJobs === 1 ? 'Job' : 'Jobs'}
          </Heading>
          <Text style={dateStyle}>{dateRange}</Text>

          {jobs.map((job, index) => (
            <JobCard key={index} {...job} siteUrl={siteUrl} />
          ))}

          <Button href={`${siteUrl}/jobs/`} style={{ ...ctaButtonStyle, marginTop: '16px' }}>
            View All Jobs
          </Button>

          <EmailFooter unsubscribeUrl={unsubscribeUrl} />
        </Container>
      </Body>
    </Html>
  );
}

export default NewJobsDigest;

const headingStyle: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 600,
  color: colors.foreground,
  margin: '0 0 4px 0',
  letterSpacing: '-0.02em',
};

const dateStyle: React.CSSProperties = {
  fontSize: '12px',
  color: colors.muted,
  margin: '0 0 24px 0',
  letterSpacing: '0.01em',
};
