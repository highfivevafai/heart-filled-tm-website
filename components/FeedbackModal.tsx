"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { submitFeedback } from "@/app/actions/submitFeedback";

type Step = 1 | 2 | 3;

interface FeedbackFormData {
  rating: number;
  clarity: string;
  missingInfo: string;
  oneSuggestion: string;
  testimonialName: string;
  testimonialRole: string;
  testimonialText: string;
}

const SUBMITTED_KEY = "heartfilled_feedback_submitted";
const SUBMISSIONS_KEY = "heartfilled_feedback_submissions";
const SESSION_CLOSED_KEY = "heartfilled_feedback_closed_session";

const initialFormState: FeedbackFormData = {
  rating: 0,
  clarity: "",
  missingInfo: "",
  oneSuggestion: "",
  testimonialName: "",
  testimonialRole: "",
  testimonialText: "",
};

const FeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [ratingError, setRatingError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FeedbackFormData>(initialFormState);
  const timeoutRef = useRef<number | null>(null);

  const totalSteps = 3;

  const stars = useMemo(() => [1, 2, 3, 4, 5], []);

  useEffect(() => {
    setIsHydrated(true);
    setShowBadge(true);

    const hasSubmitted = localStorage.getItem(SUBMITTED_KEY) === "true";
    if (hasSubmitted) {
      setIsOpen(false);
      return;
    }

    const closedInSession = sessionStorage.getItem(SESSION_CLOSED_KEY) === "true";
    if (closedInSession) {
      setShowBadge(true);
      setIsOpen(false);
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setStep(1);
      setIsOpen(true);
      setShowBadge(false);
    }, 4000);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isHydrated]);

  const closeModal = () => {
    setIsOpen(false);
    setShowThankYou(false);
    setShowBadge(true);
    setRatingError(null);

    const hasSubmitted = localStorage.getItem(SUBMITTED_KEY) === "true";
    if (!hasSubmitted) {
      sessionStorage.setItem(SESSION_CLOSED_KEY, "true");
    }
  };

  const openFromBadge = () => {
    const hasSubmitted = localStorage.getItem(SUBMITTED_KEY) === "true";
    setStep(1);
    setShowThankYou(hasSubmitted);
    setRatingError(null);
    setIsOpen(true);
    setShowBadge(false);
  };

  const goBack = () => {
    setStep((current) => (current > 1 ? ((current - 1) as Step) : current));
  };

  const goForward = () => {
    setStep((current) => (current < totalSteps ? ((current + 1) as Step) : current));
  };

  const handleContinue = () => {
    if (step === 2 && (formData.rating < 1 || formData.rating > 5)) {
      setRatingError("Please select a star rating before continuing.");
      return;
    }

    setRatingError(null);
    goForward();
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const feedbackData = new FormData();
      feedbackData.append("rating", String(formData.rating));
      feedbackData.append("clarity", formData.clarity);
      feedbackData.append("missingInfo", formData.missingInfo);
      feedbackData.append("oneSuggestion", formData.oneSuggestion);
      feedbackData.append("testimonialName", formData.testimonialName);
      feedbackData.append("testimonialRole", formData.testimonialRole);
      feedbackData.append("testimonialText", formData.testimonialText);

      await submitFeedback(feedbackData);

      const existing = localStorage.getItem(SUBMISSIONS_KEY);
      const entries: Array<FeedbackFormData & { submittedAt: string }> = existing
        ? JSON.parse(existing)
        : [];

      entries.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });

      localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(entries));
      localStorage.setItem(SUBMITTED_KEY, "true");
      sessionStorage.removeItem(SESSION_CLOSED_KEY);

      setIsOpen(true);
      setShowBadge(true);
      setShowThankYou(true);
      setFormData(initialFormState);
      setStep(1);
    } catch (error) {
      console.error(error);
      setSubmitError("We couldn't submit your feedback right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[11000] flex items-center justify-center bg-slate-950/50 p-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-slate-200 bg-white p-6 md:p-8">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 cursor-pointer text-slate-500 transition hover:text-slate-700"
              aria-label="Close feedback modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {!showThankYou && (
              <p className="text-sm font-medium text-slate-500 mb-4">Step {step} of {totalSteps}</p>
            )}

            {showThankYou && (
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Thank You for Your Feedback</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Your feedback has been submitted successfully. We appreciate your time and
                  thoughtful suggestions to help improve the Heart Filled Toastmasters website.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Your response has been recorded as your one-time submission.
                </p>
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="cursor-pointer bg-loyal-blue px-5 py-2.5 text-white transition hover:bg-blissful-blue"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {!showThankYou && step === 1 && (
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Help Us Improve Our Club Website</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We&apos;ve created a new website for Heart Filled Toastmasters to help guests and
                  members learn about our club and easily RSVP for a meeting.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">About the Website</h3>

                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                  <li>The goal of the website is to help interested guests RSVP to a Heart Filled Toastmasters meeting.</li>
                  <li>The website explains what Toastmasters International is, details about Heart Filled Toastmasters, and how visitors can attend a meeting.</li>
                  <li>
                    The site follows the official Toastmasters{" "}
                    <a
                      href="https://content.toastmasters.org/image/upload/02330-001-0001-brand-manual.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      brand guidelines
                    </a>
                    .
                  </li>
                  <li>It is a fully responsive, modern website built with current technology.</li>
                  <li>The site currently includes six pages: Home, About, Contact, Visit Our Club, Privacy, and Accessibility.</li>
                  <li>This is the first version (MVP) and will continue to improve with feedback and future iterations.</li>
                  <li>Images, testimonials, and some text content will be updated, so your suggestions are especially helpful.</li>
                </ul>

                <p className="text-sm text-slate-600 mb-8">
                  Officers are encouraged to submit feedback once after reviewing the website.
                </p>

                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="cursor-pointer border border-slate-300 px-5 py-2.5 text-slate-700 transition hover:bg-slate-100"
                  >
                    Review Site
                  </button>
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="cursor-pointer bg-loyal-blue px-5 py-2.5 text-white transition hover:bg-blissful-blue"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {!showThankYou && step === 2 && (
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Your Feedback</h2>

                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-semibold text-gray-900 mb-2">1. Overall Impression</p>
                    <p className="text-gray-700 mb-3">How would you rate the website overall?</p>
                    <div className="flex items-center gap-2" role="radiogroup" aria-label="Overall website rating">
                      {stars.map((value) => (
                        <button
                          key={value}
                          type="button"
                          role="radio"
                          aria-checked={formData.rating === value}
                          onClick={() => {
                            setFormData((previous) => ({ ...previous, rating: value }));
                            setRatingError(null);
                          }}
                          className="cursor-pointer text-3xl leading-none transition"
                        >
                          <span className={value <= formData.rating ? "text-yellow-400" : "text-slate-300"}>★</span>
                        </button>
                      ))}
                    </div>
                    {ratingError && (
                      <p className="mt-2 text-sm text-red-700" role="alert">
                        {ratingError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="clarity" className="block text-lg font-semibold text-gray-900 mb-2">
                      2. Clarity
                    </label>
                    <p className="text-gray-700 mb-2">Was anything confusing or difficult to find?</p>
                    <input
                      id="clarity"
                      type="text"
                      value={formData.clarity}
                      onChange={(event) => setFormData((previous) => ({ ...previous, clarity: event.target.value }))}
                      className="w-full border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-loyal-blue/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="missingInfo" className="block text-lg font-semibold text-gray-900 mb-2">
                      3. Missing Information
                    </label>
                    <p className="text-gray-700 mb-2">Is there anything important we should add for guests or members?</p>
                    <input
                      id="missingInfo"
                      type="text"
                      value={formData.missingInfo}
                      onChange={(event) => setFormData((previous) => ({ ...previous, missingInfo: event.target.value }))}
                      className="w-full border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-loyal-blue/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="oneSuggestion" className="block text-lg font-semibold text-gray-900 mb-2">
                      4. One Suggestion
                    </label>
                    <p className="text-gray-700 mb-2">If you could change one thing, what would it be?</p>
                    <input
                      id="oneSuggestion"
                      type="text"
                      value={formData.oneSuggestion}
                      onChange={(event) => setFormData((previous) => ({ ...previous, oneSuggestion: event.target.value }))}
                      className="w-full border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-loyal-blue/30"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <button
                    type="button"
                    onClick={goBack}
                    className="cursor-pointer border border-slate-300 px-5 py-2.5 text-slate-700 transition hover:bg-slate-100"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="cursor-pointer bg-loyal-blue px-5 py-2.5 text-white transition hover:bg-blissful-blue"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {!showThankYou && step === 3 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">Optional Testimonial</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  If you&apos;d like, you can also contribute a short testimonial about your
                  experience with Heart Filled Toastmasters that may be used on the website.
                </p>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="testimonialName" className="block text-gray-900 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      id="testimonialName"
                      type="text"
                      value={formData.testimonialName}
                      onChange={(event) => setFormData((previous) => ({ ...previous, testimonialName: event.target.value }))}
                      className="w-full border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-loyal-blue/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="testimonialRole" className="block text-gray-900 font-semibold mb-2">
                      Your Role (optional)
                    </label>
                    <input
                      id="testimonialRole"
                      type="text"
                      value={formData.testimonialRole}
                      onChange={(event) => setFormData((previous) => ({ ...previous, testimonialRole: event.target.value }))}
                      placeholder="e.g., Member, Vice President Education"
                      className="w-full border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-loyal-blue/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="testimonialText" className="block text-gray-900 font-semibold mb-2">
                      Testimonial
                    </label>
                    <p className="text-gray-700 mb-2">
                      What has Heart Filled Toastmasters helped you improve or achieve?
                    </p>
                    <textarea
                      id="testimonialText"
                      value={formData.testimonialText}
                      onChange={(event) => setFormData((previous) => ({ ...previous, testimonialText: event.target.value }))}
                      rows={5}
                      className="w-full border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-loyal-blue/30"
                    />
                    <p className="mt-2 text-sm text-slate-600">
                      Your testimonial may be edited slightly for clarity or length before being
                      published on the website.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={isSubmitting}
                    className="cursor-pointer border border-slate-300 px-5 py-2.5 text-slate-700 transition hover:bg-slate-100"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer bg-loyal-blue px-5 py-2.5 text-white transition hover:bg-blissful-blue"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Feedback"}
                  </button>
                </div>
                {submitError && (
                  <p className="mt-4 text-sm text-red-700" role="alert">
                    {submitError}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      )}

      {showBadge && !isOpen && (
        <button
          type="button"
          onClick={openFromBadge}
          className="fixed bottom-5 right-5 z-[10500] cursor-pointer bg-loyal-blue px-5 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blissful-blue"
          aria-label="Open feedback modal"
        >
          Feedback
        </button>
      )}

    </>
  );
};

export default FeedbackModal;
