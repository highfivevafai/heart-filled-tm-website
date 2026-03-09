'use client';

import { submitContact } from '@/app/actions/submitContact';
import { SubmitButton } from './SubmitButton';
import Script from 'next/script';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Check if Turnstile token exists
    const turnstileToken = formData.get('cf-turnstile-response');
    if (!turnstileToken) {
      toast.error('Please complete the security check.');
      return;
    }

    setIsLoading(true);
    try {
      await submitContact(formData);
      toast.success('Form submitted successfully!');
      form.reset();
      
      // Reset Turnstile widget
      if (typeof window !== 'undefined' && (window as any).turnstile) {
        (window as any).turnstile.reset();
      }
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? err.message : '';
      const isTurnstileError = message.toLowerCase().includes('turnstile');

      toast.error(
        isTurnstileError
          ? 'Security verification failed. Please complete the CAPTCHA again and resubmit.'
          : 'Failed to submit form. Please try again.'
      );
      
      // Reset Turnstile widget on error too
      if (typeof window !== 'undefined' && (window as any).turnstile) {
        (window as any).turnstile.reset();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Cloudflare Turnstile script */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />

      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Honeypot field */}
        <input type="text" name="website" style={{ display: 'none' }} autoComplete="off" />

        {/* Row 1: First Name + Last Name */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              maxLength={50}
              required
              placeholder="John"
              className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              maxLength={50}
              required
              placeholder="Doe"
              className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              maxLength={254}
              required
              placeholder="john@example.com"
              className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              maxLength={20}
              required
              placeholder="(123) 456-7890"
              pattern="\d{3}[\-]?\d{3}[\-]?\d{4}"
              title="Enter a phone number like 123-456-7890"
              className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 3: How did you hear about us */}
        <div>
          <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700">
            How did you hear about us?
          </label>
          <input
            type="text"
            name="referralSource"
            id="referralSource"
            maxLength={100}
            required
            placeholder="Google, Friend, Social Media, Event"
            className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Row 4: About */}
        <div>
          <label htmlFor="about" className="block text-sm font-medium text-gray-700">
            Tell us about yourself
          </label>
          <textarea
            name="about"
            id="about"
            rows={4}
            maxLength={500}
            required
            placeholder="Write a short introduction..."
            className="mt-2 block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none resize-none"
          />
        </div>

        {/* Turnstile */}
        <div className="cf-turnstile mt-4" data-sitekey={TURNSTILE_SITE_KEY}></div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
          <p className="text-gray-700">
            By submitting this form, you agree to our{' '}
            <a 
              href="/privacy" 
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              Privacy Policy
            </a>
            . We collect limited technical information to help keep the site secure.
          </p>
        </div>

        {/* Submit */}
        <SubmitButton type="submit" disabled={isLoading} isLoading={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </SubmitButton>
      </form>
    </>
  );
}
