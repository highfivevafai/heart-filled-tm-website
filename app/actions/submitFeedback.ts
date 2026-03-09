'use server';

import crypto from 'crypto';
import { headers } from 'next/headers';
import { Resend } from 'resend';
import { FeedbackNotificationEmail } from '@/emails/FeedbackNotification';

const resend = new Resend(process.env.RESEND_API_KEY);

function assertMaxLength(value: string, maxLength: number, fieldName: string) {
  if (value.length > maxLength) {
    throw new Error(`${fieldName} exceeds maximum length of ${maxLength} characters`);
  }
}

function assertRating(value: number) {
  if (!Number.isInteger(value) || value < 1 || value > 5) {
    throw new Error('Rating must be an integer between 1 and 5');
  }
}

export async function submitFeedback(formData: FormData) {
  const rating = Number(formData.get('rating') ?? 0);
  const clarity = String(formData.get('clarity') ?? '');
  const missingInfo = String(formData.get('missingInfo') ?? '');
  const oneSuggestion = String(formData.get('oneSuggestion') ?? '');
  const testimonialName = String(formData.get('testimonialName') ?? '');
  const testimonialRole = String(formData.get('testimonialRole') ?? '');
  const testimonialText = String(formData.get('testimonialText') ?? '');

  assertRating(rating);
  assertMaxLength(clarity, 300, 'Clarity');
  assertMaxLength(missingInfo, 300, 'Missing information');
  assertMaxLength(oneSuggestion, 300, 'One suggestion');
  assertMaxLength(testimonialName, 100, 'Testimonial name');
  assertMaxLength(testimonialRole, 100, 'Testimonial role');
  assertMaxLength(testimonialText, 1000, 'Testimonial text');

  const submissionId = crypto.randomUUID();
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for')?.split(',')[0] ?? '';
  const userAgent = headersList.get('user-agent') ?? '';

  const payload = {
    submissionId,
    submittedAt: new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
    rating,
    clarity,
    missingInfo,
    oneSuggestion,
    testimonialName,
    testimonialRole,
    testimonialText,
    ip,
    userAgent,
  };

  const webhookUrl = process.env.GOOGLE_SHEET_FEEDBACK_WEBHOOK || process.env.GOOGLE_SHEET_WEBHOOK;
  if (!webhookUrl) {
    throw new Error('Missing feedback webhook environment variable');
  }

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to submit feedback');
  }

  // Send admin email notification (non-blocking for successful submissions)
  try {
    const fromEmail = process.env.FROM_EMAIL;
    const adminEmail = process.env.ADMIN_EMAIL;

    if (!fromEmail || !adminEmail || !process.env.RESEND_API_KEY) {
      console.warn('Skipping feedback email: missing RESEND_API_KEY, FROM_EMAIL, or ADMIN_EMAIL');
      return;
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Feedback Submission - ${rating}/5`,
      react: FeedbackNotificationEmail({
        submissionId: payload.submissionId,
        submittedAt: payload.submittedAt,
        rating,
        clarity,
        missingInfo,
        oneSuggestion,
        testimonialName,
        testimonialRole,
        testimonialText,
        ip,
        userAgent,
      }),
    });

    if (error) {
      console.error('Failed to send feedback notification email:', JSON.stringify(error, null, 2));
    } else {
      console.log('Feedback notification email sent successfully:', data);
    }
  } catch (emailError) {
    console.error('Exception while sending feedback notification email:', emailError);
  }
}
