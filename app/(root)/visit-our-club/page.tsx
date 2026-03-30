import type { Metadata } from "next";

import PrimaryButton from "@/components/PrimaryButton";
import LocationMap from "@/components/LocationMap";
import CallToAction from "@/components/CallToAction";
import { Accordion } from "@/components/Accordion";
import Image from "next/image";
import { siteConfig, toAbsoluteUrl } from "@/lib/siteConfig";
import { EnvelopeOpenIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import {
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
  UserGroupIcon,
  CheckIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartLineIcon,
  LightBulbIcon,
  TrophyIcon,
  HandRaisedIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  DocumentTextIcon
} from '@heroicons/react/24/solid';

export const metadata: Metadata = {
  title: "Visit Our Club in Woodland Hills",
  description:
    "Plan your first Heart Filled Toastmasters visit at St. Mel Parish in Woodland Hills. Meetings run every Thursday from 7:00 PM to 8:30 PM.",
  alternates: {
    canonical: "/visit-our-club",
  },
  openGraph: {
    title: "Visit Heart Filled Toastmasters in Woodland Hills",
    description:
      "Join our Thursday evening meetings at St. Mel Parish and experience a supportive Toastmasters club focused on public speaking and leadership.",
    url: "/visit-our-club",
    images: [
      {
        url: "/heart-filled-toastmasters-open-graph.png",
        width: 1200,
        height: 630,
        alt: "Visit Heart Filled Toastmasters in Woodland Hills, CA",
      },
    ],
  },
};

const weeklyMeetingEventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${siteConfig.baseUrl}/visit-our-club/#weekly-event`,
  name: "Heart Filled Toastmasters Weekly Meeting",
  description:
    "Weekly Toastmasters meeting focused on public speaking, communication, and leadership development.",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image: [toAbsoluteUrl("/heart-filled-toastmasters-open-graph.png")],
  organizer: {
    "@id": `${siteConfig.baseUrl}/#organization`,
  },
  location: {
    "@id": `${siteConfig.baseUrl}/#localbusiness`,
  },
  eventSchedule: {
    "@type": "Schedule",
    repeatFrequency: "P1W",
    byDay: "https://schema.org/Thursday",
    startTime: siteConfig.meeting.startTime,
    endTime: siteConfig.meeting.endTime,
    scheduleTimezone: siteConfig.meeting.timezone,
  },
  url: `${siteConfig.baseUrl}/visit-our-club`,
};

const VisitOurClubPage = () => {
  const faqs = [
    {
      title: "Is the club online or in-person?",
      content: "Our club meets in person most Thursdays from 7:00 PM to 8:30 PM, with one online meeting per month via Zoom. This gives members the flexibility to join from anywhere while keeping our meetings engaging and supportive, just like in-person sessions."
    },
    {
      title: "Will I have to speak at my first meeting?",
      content: "Absolutely not! Guests are welcome to simply watch on their first visit. We may ask your name and if you enjoyed your experience, but that's all. If you'd like to join in on Table Topics (impromptu speaking), it's completely optional, you can go at your own pace."
    },
    {
      title: "Can I visit multiple times before joining?",
      content: "Yes! Guests are welcome to attend up to two meetings for free before deciding whether to join. This gives you a chance to experience our club culture and see if it's the right fit for you."
    },
    {
      title: "Do I need to RSVP before attending?",
      content: <>It's not required, but we recommend letting us know you're coming. A quick <a href="/contact" className="underline">RSVP</a> helps us prepare for guests and ensures someone can greet you when you arrive.</>
    },
    {
      title: "What should I wear to a meeting?",
      content: "We recommend business casual to formal attire, but the most important thing is that you feel comfortable and confident while participating."
    }
  ];
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(weeklyMeetingEventSchema) }}
      />
          {/* Hero Section */}
          <section className="py-20 bg-slate-50">
            <div className="container max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-8 items-center">
                
                {/* Left - Image */}
                <div className="hidden lg:flex flex-col justify-center items-center">
                  <div className=''>
                  <Image
                    src="/tm-speaker-1.png"
                    alt="Girl speaker at Heart Filled Toastmasters"
                    width={300}
                    height={300}
                    priority
                  />
                  </div>
                  <div className=''>
                  <Image
                    src="/tm-mentor.png"
                    alt="Mentors at Heart Filled Toastmasters"
                    width={300}
                    height={300}
                    priority
                  />
                  </div>
                </div>

                {/* Middle - Content */}
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                    Visit Heart Filled Toastmasters
                  </h1>
    
                  <p className="text-lg text-gray-600 mb-8">
                    Join us for a meeting and experience the supportive, empowering environment firsthand.
                  </p>
                  <PrimaryButton href="/contact" size="lg">
                    Contact to RSVP
                  </PrimaryButton>
                </div>

                {/* Right - Image */}
                <div className="flex flex-col justify-center items-center">
                  <div className='hidden lg:block'>
                    <Image
                      src="/tm-speaker-2.png"
                      alt="Guy speaker at Heart Filled Toastmasters"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                  <div className=''>
                    <Image
                      src="/tm-friends.png"
                      alt="Friends at at Heart Filled Toastmasters"
                      width={300}
                      height={300}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>


      {/* Planning Your Visit Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Planning Your Visit
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We welcome guests to attend a meeting before deciding to join. Here's everything you need to know to plan your first visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="relative border border-slate-300 p-8 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 bg-white px-2 py-2">
                <ClockIcon className="h-8 w-8 text-gray-700" />
              </div> 
              <h2 className="text-xl font-bold mb-2">Meeting Time</h2>
              <p className="text-gray-600 mb-4">Every Thursday<br /> 7:00 PM - 8:30 PM PST</p>
            </div>
            <div className="relative border border-slate-300 p-8 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 bg-white px-2 py-2">
                <MapPinIcon className="h-8 w-8 text-gray-700" />
              </div> 
              <h2 className="text-xl font-bold mb-2">Location</h2>
              <p className="text-gray-600 mb-4">20870 Ventura Blvd Woodland Hills, CA 91364</p>
            </div>
            <div className="relative border border-slate-300 p-8 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 bg-white px-2 py-2">
                <BriefcaseIcon className="h-8 w-8 text-gray-700" />
              </div> 
              <h2 className="text-xl font-bold mb-2">What to Bring</h2>
              <p className="text-gray-600 mb-4">Bring a pen and paper if you’d like to take notes.</p>
            </div>
            <div className="relative border border-slate-300 p-8 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 bg-white px-2 py-2">
                <EnvelopeOpenIcon className="h-8 w-8 text-gray-700" />
              </div> 
              <h2 className="text-xl font-bold mb-2">RSVP</h2>
              <p className="text-gray-600 mb-4">Contact us in advance to confirm details.</p>
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="relative rounded-lg p-8 md:p-12 lg:h-72 overflow-hidden">
            {/* Gradient Background - All Screens */}
            <div className="absolute inset-0 bg-gradient-loyal-blissful"></div>

            {/* Background Image with Dark Overlay - Small/Medium Screens */}
            <div className="absolute inset-0 lg:hidden">
              <Image
                src="/microphone.png"
                alt="Microphone at Heart Filled Toastmasters"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="max-w-6xl mx-auto relative h-full">
              {/* Image on Left - Large Screens Only */}
              <div className="absolute left-0 top-0 w-96 h-full hidden lg:block">
                <Image
                  src="/microphone.png"
                  alt="Microphone at Heart Filled Toastmasters"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover scale-150"
                  priority
                />
              </div>

              {/* Content on Right */}
              <div className="ml-auto w-full lg:w-[65%] h-full flex flex-col justify-center relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Before You Visit
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <p className="text-white/90">
                      <span className="font-semibold">Join a few minutes early:</span> This gives you time to meet members and get settled
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <p className="text-white/90">
                      <span className="font-semibold">Participation is optional:</span> Feel free to just observe during your first visit
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <p className="text-white/90">
                      <span className="font-semibold">Questions welcome:</span> We'll have time before and after to answer any questions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arriving as a Guest Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Arriving as a Guest
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your first visit is easy and stress-free. Here's what happens when you arrive as a guest.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 xl:space-y-16 xl:bg-[url('/arriving-guest-bg.png')] xl:bg-contain xl:bg-no-repeat xl:bg-center">
            {/* First Row - Two Cards with Space Between */}
            <div className="flex flex-col xl:flex-row gap-8 justify-between">
              
              {/* Fill Out Guest Form */}
              <div className="bg-white p-8 border border-slate-200 flex flex-col sm:flex-row items-start gap-6 w-full xl:w-auto xl:flex-1 xl:max-w-md">
                <div className="w-16 h-16 bg-blissful-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ClipboardDocumentCheckIcon className="w-8 h-8 text-blissful-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Fill Out Guest Form
                  </h3>
                  <p className="text-gray-600">
                    When you arrive, you'll be asked to fill out a brief guest form. This helps us get to know you and ensures we can follow up with any information you might need.
                  </p>
                </div>
              </div>

              {/* Enjoy the Meeting */}
              <div className="bg-white p-8 border border-slate-200 flex flex-col sm:flex-row items-start gap-6 w-full xl:w-auto xl:flex-1 xl:max-w-md">
                <div className="w-16 h-16 bg-blissful-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserGroupIcon className="w-8 h-8 text-blissful-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Enjoy the Meeting
                  </h3>
                  <p className="text-gray-600">
                    Sit back, relax, and observe the meeting. You're welcome to participate in Table Topics if you'd like, but there's absolutely no pressure. Just enjoy the experience!
                  </p>
                </div>
              </div>

            </div>

            {/* Second Row - One Card Centered */}
            <div className="flex justify-center">
              
              {/* Share Your Thoughts */}
              <div className="bg-white p-8 border border-slate-200 flex flex-col sm:flex-row items-start gap-6 w-full xl:w-auto xl:flex-1 xl:max-w-md">
                <div className="w-16 h-16 bg-blissful-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8 text-blissful-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Share Your Thoughts
                  </h3>
                  <p className="text-gray-600">
                    After the meeting, we'll invite you to share your impressions and ask any questions you have. This is a great time to learn more about membership and our club culture.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              What to Expect at a Club Meeting
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our meetings follow a structured format designed to help members practice and improve their communication and leadership skills in a supportive environment.
            </p>
          </div>

          {/* Meeting Agenda Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-6">
              
              {/* Welcome & Introduction */}
              <div className="bg-white p-6 border border-slate-200" style={{ background: "linear-gradient(to right, #f1f5f9, #f8fafc)" }}>
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blissful-blue/10 rounded-full flex items-center justify-center">
                      <HandRaisedIcon className="w-6 h-6 text-blissful-blue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Welcome & Introductions</h3>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 ml-2 hidden md:inline">5 mins</span>
                    </div>
                    <span className="absolute top-0 right-0 text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 md:hidden">5 mins</span>
                    <p className="text-gray-600">
                      The meeting begins with the President's opening remarks and guest introductions. The Toastmaster then presents the meeting agenda and introduces the functionary roles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Prepared Speeches */}
              <div className="bg-white p-6 border border-slate-200" style={{ background: "linear-gradient(to right, #f1f5f9, #f8fafc)" }}>
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blissful-blue/10 rounded-full flex items-center justify-center">
                      <PresentationChartLineIcon className="w-6 h-6 text-blissful-blue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Prepared Speeches</h3>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 ml-2 hidden md:inline">15-20 mins</span>
                    </div>
                    <span className="absolute top-0 right-0 text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 md:hidden">15-20 mins</span>
                    <p className="text-gray-600">
                      Members deliver 5-7 minute speeches they have signed up for as part of the Toastmasters Pathways learning program, covering a variety of topics and objectives.
                    </p>
                  </div>
                </div>
              </div>

              {/* Table Topics */}
              <div className="bg-white p-6 border border-slate-200" style={{ background: "linear-gradient(to right, #f1f5f9, #f8fafc)" }}>
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blissful-blue/10 rounded-full flex items-center justify-center">
                      <LightBulbIcon className="w-6 h-6 text-blissful-blue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Table Topics (Impromptu Speaking)</h3>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 ml-2 hidden md:inline">10-15 mins</span>
                    </div>
                    <span className="absolute top-0 right-0 text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 md:hidden">10-15 mins</span>
                    <p className="text-gray-600">
                      Members and guests are invited to speak for 1-2 minutes on surprise topics. This session helps develop thinking on your feet and impromptu speaking skills. Participation is optional for guests.
                    </p>
                  </div>
                </div>
              </div>

              {/* Speech Evaluations */}
              <div className="bg-white p-6 border border-slate-200" style={{ background: "linear-gradient(to right, #f1f5f9, #f8fafc)" }}>
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blissful-blue/10 rounded-full flex items-center justify-center">
                      <TrophyIcon className="w-6 h-6 text-blissful-blue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Speech Evaluations</h3>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 ml-2 hidden md:inline">10-15 mins</span>
                    </div>
                    <span className="absolute top-0 right-0 text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 md:hidden">10-15 mins</span>
                    <p className="text-gray-600">
                      Trained evaluators provide constructive feedback on each speech, highlighting strengths and offering suggestions for improvement. This is a key learning component for both speakers and evaluators.
                    </p>
                  </div>
                </div>
              </div>

              {/* Functionary Reports */}
              <div className="bg-white p-6 border border-slate-200" style={{ background: "linear-gradient(to right, #f1f5f9, #f8fafc)" }}>
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blissful-blue/10 rounded-full flex items-center justify-center">
                      <DocumentTextIcon className="w-6 h-6 text-blissful-blue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Functionary Reports</h3>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 ml-2 hidden md:inline">5 mins</span>
                    </div>
                    <span className="absolute top-0 right-0 text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 md:hidden">5 mins</span>
                    <p className="text-gray-600">
                      Meeting functionaries (Timer, Ah-Counter, Grammarian) provide their reports, highlighting time management, filler words, and notable word usage. These reports help all participants improve their speaking skills.
                    </p>
                  </div>
                </div>
              </div>

              {/* General Evaluation */}
              <div className="bg-white p-6 border border-slate-200" style={{ background: "linear-gradient(to right, #f1f5f9, #f8fafc)" }}>
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blissful-blue/10 rounded-full flex items-center justify-center">
                      <CalendarIcon className="w-6 h-6 text-blissful-blue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">General Evaluation</h3>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 ml-2 hidden md:inline">5 mins</span>
                    </div>
                    <span className="absolute top-0 right-0 text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 md:hidden">5 mins</span>
                    <p className="text-gray-600">
                      The General Evaluator provides an overview of the meeting's quality and flow, sharing key observations and suggestions that support continuous improvement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Wrap-up & Networking */}
              <div className="bg-white p-6 border border-slate-200" style={{ background: "linear-gradient(to right, #f1f5f9, #f8fafc)" }}>
                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blissful-blue/10 rounded-full flex items-center justify-center">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-blissful-blue" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">Wrap-up & Networking</h3>
                      <span className="text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 ml-2 hidden md:inline">5 mins</span>
                    </div>
                    <span className="absolute top-0 right-0 text-sm text-gray-500 font-medium whitespace-nowrap flex-shrink-0 md:hidden">5 mins</span>
                    <p className="text-gray-600">
                      The meeting wraps up with final announcements. Guests are welcome to stay afterward to meet members, ask questions, and learn more about joining.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Atmosphere Highlight */}
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
              Discover the Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="lg:pb-8"> 
              <div className="bg-white border border-slate-200 flex flex-col h-full">
                <div className="p-6 flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  A Supportive Atmosphere
                </h4>
                <p className="text-gray-600">
                  Throughout the meeting, you'll experience a warm, encouraging, and respectful environment where everyone supports each other's growth. Mistakes are embraced as learning opportunities, and every achievement, big or small, is recognized and applauded.
                </p>
                </div>
                <div className="mt-auto">
                  <Image
                    src="/supportive-atmosphere.png"
                    alt="Supportive meeting atmosphere"
                    width={400}
                    height={240}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              </div>
              <div className="lg:pt-8"> 
              <div className="bg-white border border-slate-200 flex flex-col h-full">
                <div className="p-6 flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Structured but Engaging
                </h4>
                <p className="text-gray-600">
                  Our meetings follow a clear and organized agenda, including prepared speeches, impromptu Table Topics, and thoughtful evaluations. This structure creates a comfortable rhythm while keeping the experience dynamic, interactive, and fun.
                </p>
                </div>
                <div className="mt-auto">
                  <Image
                    src="/structured-engaging.png"
                    alt="Speaker presenting at a meeting"
                    width={400}
                    height={240}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              </div>

              <div className="lg:pb-8"> 
              <div className="bg-white border border-slate-200 flex flex-col h-full">
                <div className="p-6 flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Opportunities to Participate
                </h4>
                <p className="text-gray-600">
                  Whether you choose to observe, join in Table Topics, take on a meeting role, or deliver a full speech, there's space for everyone. You're encouraged to step outside your comfort zone, but always at a pace that feels right for you.
                </p>
                </div>
                <div className="mt-auto">
                  <Image
                    src="/opportunities-participate.png"
                    alt="Members supporting each other"
                    width={400}
                    height={240}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about visiting our club? Here are answers to the most common questions we receive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
            <div className="order-2 lg:order-1 lg:min-h-[414px] bg-white border border-slate-200 p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-loyal-blue/10 rounded-full mb-4">
                <QuestionMarkCircleIcon className="w-6 h-6 text-loyal-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Do you have more questions?
              </h3>
              <p className="text-gray-600 mb-6">
                We are happy to help. Reach out and we will get back to you with answers and next steps.
              </p>
              <PrimaryButton href="/contact" size="md">
                Contact Us
              </PrimaryButton>
            </div>

            <div className="order-1 lg:order-2">
              <Accordion items={faqs} columns={2} bgColor="bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Club Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Find Us & Connect
              </h2>

              <p className="text-lg text-gray-600 mb-4">
                Come join us at St. Mel Parish in Woodland Hills, California!  
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Heart Filled Toastmasters meets right here in the heart of the community.
              </p>
              <PrimaryButton href='contact' size="md">
                Contact to RSVP
              </PrimaryButton>

              <div className="pt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Club Information:
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <ClockIcon className="w-6 h-6 text-loyal-blue"/>
                    <span><strong>Time:</strong> Thursday, 7:00 PM – 8:30 PM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPinIcon className="w-6 h-6 text-loyal-blue"/>
                    <span><strong>Address:</strong> 20870 Ventura Blvd Woodland Hills, CA 91364 US</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <EnvelopeIcon className="w-6 h-6 text-loyal-blue"/>
                    <span>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:heartfilledtoastmaster@gmail.com" className="underline">
                        Heartfilledtoastmaster@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: LocationMap */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-md overflow-hidden shadow-md">
              <LocationMap />
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <CallToAction />
      </section>

    </>
  );
}
 
export default VisitOurClubPage;
