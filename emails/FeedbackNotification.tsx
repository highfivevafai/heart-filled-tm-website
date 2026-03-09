import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
} from '@react-email/components';
import * as React from 'react';

interface FeedbackNotificationEmailProps {
  submissionId: string;
  submittedAt: string;
  rating: number;
  clarity: string;
  missingInfo: string;
  oneSuggestion: string;
  testimonialName: string;
  testimonialRole: string;
  testimonialText: string;
  ip: string;
  userAgent: string;
}

export const FeedbackNotificationEmail = ({
  submissionId,
  submittedAt,
  rating,
  clarity,
  missingInfo,
  oneSuggestion,
  testimonialName,
  testimonialRole,
  testimonialText,
  ip,
  userAgent,
}: FeedbackNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>New Website Feedback Submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Feedback Submitted</Heading>

        <Text style={text}>
          A new website feedback response was submitted from the HeartFilled Toastmasters site.
        </Text>

        <Section style={feedbackSection}>
          <Heading as="h2" style={h2}>Feedback Summary</Heading>

          <div style={infoRow}>
            <Text style={label}>Rating:</Text>
            <Text style={value}>{rating} / 5</Text>
          </div>

          <div style={infoRow}>
            <Text style={label}>Clarity:</Text>
            <Text style={value}>{clarity || 'N/A'}</Text>
          </div>

          <div style={infoRow}>
            <Text style={label}>Missing Information:</Text>
            <Text style={value}>{missingInfo || 'N/A'}</Text>
          </div>

          <div style={infoRow}>
            <Text style={label}>One Suggestion:</Text>
            <Text style={value}>{oneSuggestion || 'N/A'}</Text>
          </div>
        </Section>

        <Section style={testimonialSection}>
          <Heading as="h2" style={h2}>Optional Testimonial</Heading>

          <div style={infoRow}>
            <Text style={label}>Full Name:</Text>
            <Text style={value}>{testimonialName || 'N/A'}</Text>
          </div>

          <div style={infoRow}>
            <Text style={label}>Role:</Text>
            <Text style={value}>{testimonialRole || 'N/A'}</Text>
          </div>

          <div style={infoRow}>
            <Text style={label}>Testimonial:</Text>
            <Text style={messageText}>{testimonialText || 'N/A'}</Text>
          </div>
        </Section>

        <Hr style={hr} />

        <Section style={metaSection}>
          <Heading as="h2" style={h3}>Submission Details</Heading>

          <div style={infoRow}>
            <Text style={metaLabel}>Submission ID:</Text>
            <Text style={metaValue}>{submissionId}</Text>
          </div>

          <div style={infoRow}>
            <Text style={metaLabel}>Submitted At:</Text>
            <Text style={metaValue}>{submittedAt}</Text>
          </div>

          <div style={infoRow}>
            <Text style={metaLabel}>IP Address:</Text>
            <Text style={metaValue}>{ip || 'N/A'}</Text>
          </div>

          <div style={infoRow}>
            <Text style={metaLabel}>User Agent:</Text>
            <Text style={metaValue}>{userAgent || 'N/A'}</Text>
          </div>
        </Section>

        <Text style={footer}>
          This feedback has also been saved to your Google Sheet.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default FeedbackNotificationEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '40px 20px',
  marginBottom: '64px',
  maxWidth: '650px',
  borderRadius: '8px',
};

const h1 = {
  color: '#1f2937',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 30px',
  textAlign: 'center' as const,
};

const h2 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const h3 = {
  color: '#6b7280',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '16px 0',
};

const feedbackSection = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
  border: '1px solid #e5e7eb',
};

const testimonialSection = {
  backgroundColor: '#eef2ff',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
  border: '1px solid #c7d2fe',
};

const metaSection = {
  backgroundColor: '#f3f4f6',
  borderRadius: '8px',
  padding: '20px',
  margin: '16px 0',
};

const infoRow = {
  marginBottom: '12px',
};

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 4px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
};

const value = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '0 0 16px',
  fontWeight: '500',
  whiteSpace: 'pre-wrap' as const,
};

const messageText = {
  color: '#1f2937',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '0 0 16px',
  whiteSpace: 'pre-wrap' as const,
};

const metaLabel = {
  color: '#6b7280',
  fontSize: '12px',
  fontWeight: '600',
  margin: '0 0 2px',
};

const metaValue = {
  color: '#374151',
  fontSize: '13px',
  margin: '0 0 12px',
  wordBreak: 'break-all' as const,
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const footer = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '24px 0 0',
  textAlign: 'center' as const,
};
