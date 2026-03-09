'use server';

import crypto from 'crypto';
import { headers } from 'next/headers';
import { Resend } from 'resend';
import { UserConfirmationEmail } from '@/emails/UserConfirmation';
import { AdminNotificationEmail } from '@/emails/AdminNotification';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to validate max length
function assertMaxLength(value: string, maxLength: number, fieldName: string) {
  if (value.length > maxLength) {
    throw new Error(`${fieldName} exceeds maximum length of ${maxLength} characters`);
  }
}

export async function submitContact(formData: FormData) {
  // 1️⃣ Honeypot check
  if (formData.get('website')) {
    throw new Error('Bot detected');
  }

  // 2️⃣ Turnstile token verification
  const token = formData.get('cf-turnstile-response');
  if (!token) throw new Error('Missing Turnstile token');

  const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET!,
      response: token as string
    })
  });

  const verifyData = await verifyRes.json();
  if (!verifyData.success) {
    const errorCodes = Array.isArray(verifyData['error-codes'])
      ? verifyData['error-codes'].join(', ')
      : 'unknown_error';

    console.error('Turnstile verification failed:', {
      errorCodes,
      hostname: verifyData.hostname,
      action: verifyData.action,
    });

    throw new Error(`Turnstile verification failed: ${errorCodes}`);
  }

  // 3️⃣ Submission ID
  const submissionId = crypto.randomUUID();

  // 4️⃣ Headers
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for')?.split(',')[0] ?? '';
  const userAgent = headersList.get('user-agent') ?? '';

  // 5️⃣ Extract fields
  const firstName = String(formData.get('firstName') ?? '');
  const lastName = String(formData.get('lastName') ?? '');
  const email = String(formData.get('email') ?? '');
  const phone = String(formData.get('phone') ?? '');
  const referralSource = String(formData.get('referralSource') ?? '');
  const about = String(formData.get('about') ?? '');

  // 6️⃣ Length validation (THIS is the correct place)
  assertMaxLength(firstName, 50, 'First name');
  assertMaxLength(lastName, 50, 'Last name');
  assertMaxLength(email, 254, 'Email');
  assertMaxLength(phone, 20, 'Phone');
  assertMaxLength(referralSource, 100, 'Referral source');
  assertMaxLength(about, 500, 'About');

  // 7️⃣ Payload
  const payload = {
    submissionId,
    submittedAt: new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
    firstName,
    lastName,
    email,
    phone,
    referralSource,
    about,
    ip,
    userAgent
  };

  // 8️⃣ Google Sheets
  const res = await fetch(process.env.GOOGLE_SHEET_WEBHOOK!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) throw new Error('Failed to submit form');

  // 9️⃣ Send Emails with Resend
  try {
    console.log('🔵 Starting email send process...');
    console.log('📧 FROM_EMAIL:', process.env.FROM_EMAIL);
    console.log('📧 ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
    console.log('📧 User email:', email);
    
    // Send confirmation email to user
    console.log('📤 Attempting to send user confirmation email...');
    const { data: userData, error: userError } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: 'Thank you for contacting HeartFilled Toastmasters! 🎉',
      react: UserConfirmationEmail({ firstName, lastName }),
    });

    if (userError) {
      console.error('❌ Failed to send user confirmation email:', JSON.stringify(userError, null, 2));
    } else {
      console.log('✅ User confirmation email sent successfully:', userData);
    }

    // Send notification email to admin
    console.log('📤 Attempting to send admin notification email...');
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.ADMIN_EMAIL!,
      subject: `🎯 New Lead: ${firstName} ${lastName}`,
      react: AdminNotificationEmail({
        submissionId: payload.submissionId,
        submittedAt: payload.submittedAt,
        firstName,
        lastName,
        email,
        phone,
        referralSource,
        about,
        ip,
        userAgent,
      }),
    });

    if (adminError) {
      console.error('❌ Failed to send admin notification email:', JSON.stringify(adminError, null, 2));
    } else {
      console.log('✅ Admin notification email sent successfully:', adminData);
    }
  } catch (emailError) {
    // Log email errors but don't fail the entire submission
    console.error('❌ Exception during email send:', emailError);
    // The form submission was successful, just email notification failed
  }
}
