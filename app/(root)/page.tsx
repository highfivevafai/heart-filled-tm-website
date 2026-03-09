import Hero from "@/components/Hero";
import AnimatedWord from "@/components/AnimatedWord";
import PrimaryButton from "@/components/PrimaryButton";
import StepCard from "@/components/StepCard";
import TestimonialCard from "@/components/TestomonialCard";
import LocationMap from "@/components/LocationMap";
import CallToAction from "@/components/CallToAction";
import { Accordion } from "@/components/Accordion";
import Image from "next/image";
import { CheckIcon, CheckBadgeIcon, CalendarIcon, ComputerDesktopIcon, ClockIcon, MapPinIcon, EnvelopeIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

const HomePage = () => {
  const faqs = [
    {
      title: "Is the club online or in-person?",
      content: "Our club meets in person most Thursdays from 7:00 to 8:30 PM, with one online meeting per month via Zoom. This gives members the flexibility to join from anywhere while keeping our meetings engaging and supportive, just like in-person sessions."
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
      content: "Dress is casual to business casual. The most important thing is that you feel comfortable and confident while participating."
    }
  ];
  return (
    <>
      <Hero
        heading={<div className="text-center"><>Speak with Confidence. <br />Lead with <span className='inline-block text-left'><span className='hidden md:inline-block'><AnimatedWord words={['Clarity', 'Impact', 'Heart']} duration={3} suffix={<span className='text-blissful-blue'>.</span>} /></span><span className='md:hidden'>Clarity<span className='text-blissful-blue'>.</span></span></span></></div>}
        description="Join us to grow your public speaking and leadership skills."
        backgroundImage="/hero-bg.jpg"
        buttonText="Visit Our Club"
        buttonHref="/visit-our-club"
      />
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
            Trusted by Companies Worldwide
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
            <Image 
              src='/icons/adidas-logo.png' 
              alt='Adidas Logo' 
              width={74} 
              height={60} 
              className="h-auto"
            />
            <Image 
              src='/icons/lexmark-logo.png' 
              alt='Lexmark Logo' 
              width={150} 
              height={31} 
              className="h-auto"
            />
            <Image 
              src='/icons/amazon-logo.png' 
              alt='Amazon Logo' 
              width={89} 
              height={50} 
              className="h-auto"
            />
            <Image 
              src='/icons/microsoft-logo.png' 
              alt='Microsoft Logo' 
              width={136} 
              height={50} 
              className="h-auto"
            />
            <Image 
              src='/icons/oracle-logo.png' 
              alt='Oracle Logo' 
              width={115} 
              height={15} 
              className="h-auto"
            />
            <Image 
              src='/icons/toyota-logo.png' 
              alt='Toyota Logo' 
              width={50} 
              height={50} 
              className="h-auto"
            />   
            <Image 
              src='/icons/pmi-logo.png' 
              alt='Project Management Insitute Logo' 
              width={104} 
              height={32} 
              className="h-auto"
            />            
          </div>
        </div>
      </section>
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              How We Can Help You
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              At Heart Filled Toastmasters, we help you grow into a confident,
              effective communicator in a supportive and encouraging environment.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Whether you want to speak with confidence, lead with purpose, or
              simply express yourself more clearly, we’re here to help every
              step of the way.
            </p>

            <PrimaryButton href='visit-our-club' size="md">
              Learn More
            </PrimaryButton>

            <div className='pt-12'>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What You’ll Gain:
              </h3>

              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-8">
                <li className="flex items-center gap-1 text-gray-700">
                  <CheckIcon className='w-6 h-6 text-loyal-blue'/>
                  Build Confidence
                </li>
                <li className="flex items-center gap-1 text-gray-700">
                  <CheckIcon className='w-6 h-6 text-loyal-blue'/>
                  Improve Communication
                </li>
                <li className="flex items-center gap-1 text-gray-700">
                  <CheckIcon className='w-6 h-6 text-loyal-blue'/>
                  Develop Leadership
                </li>
                <li className="flex items-center gap-1 text-gray-700">
                  <CheckIcon className='w-6 h-6 text-loyal-blue'/>
                  Receive Feedback
                </li>
              </ul>
            </div>
            
          </div>

          {/* Right Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
            <Image
              src="/how-we-help.jpg"
              alt="Heart Filled Toastmasters meeting"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-8 mb-10">
        <div className="mx-auto flex flex-wrap items-center gap-3 md:gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            How It Works
          </h2>
          <hr className="flex-1 border-dashed border-neutral-300" />
          <p className="w-full italic font-extralight text-lg text-gray-700 md:max-w-[300px]">
            Getting started is easy and designed to help you grow at your own pace.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Step Cards */}
          <StepCard
            title="Step 1: Learn"
            description="Attend a meeting to understand how effective speaking and feedback work."
            image="/step-1.png"
            alt="Heart Filled Toastmaster members shaking hands at a meeting"
          />

          <StepCard
            title="Step 2: Practice"
            description="Speak in a supportive environment and receive encouraging feedback."
            image="/step-2.png"
            alt="Heart Filled Toastmaster member speaking at a meeting"
          />

          <StepCard
            title="Step 3: Grow"
            description="Build confidence and become a stronger communicator over time."
            image="/step-3.png"
            alt="Heart Filled Toastmaster member posing"
          />

        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="order-2 lg:order-1 w-full h-64 sm:h-80 md:h-96 lg:h-full relative">
            <Image
              src="/about-us.png"
              alt="Heart Filled Toastmasters meeting"
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* Right Content */}
          <div className="order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Established in 2021, Heart Filled Toastmasters helps people who want to become better speakers.            
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our club is guided by experienced members and mentors, with weekly in-person meetings and a monthly online meeting to support consistent growth.            
            </p>

            <PrimaryButton href="about" size="md">
              Learn More
            </PrimaryButton>

            {/* Achievements */}
            <div className="pt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What Sets Us Apart:
              </h3>
            {/* Badges under button */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">
                <CheckBadgeIcon className="w-4 h-4 text-gray-500" />
                President's Distinguished
              </span>
              <span className="flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">
                <CalendarIcon className="w-4 h-4 text-gray-500" />
                Weekly Meetings
              </span>
              <span className="flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium">
                <ComputerDesktopIcon className="w-4 h-4 text-gray-500" />
                Online Meetings
              </span>
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonial Section */}
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-loyal-blissful" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center opacity-5 sm:flex"
      >
        <Image
          src="/icons/ToastmastersLogoWhite.svg"
          alt=""
          width={900}
          height={900}
          className="h-auto w-[70%] max-w-4xl translate-x-32 md:translate-x-40 rotate-3 object-contain"
        />
      </div>
      <div className="relative z-20 container max-w-7xl mx-auto px-8 mb-12">
        <div className="mx-auto flex flex-wrap items-center gap-3 md:gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            What Members Say
          </h2>

          <hr className="flex-1 border-dashed border-white/40" />

          <p className="w-full italic font-extralight text-lg text-white md:max-w-[300px]">
            Hear from our members about their Toastmasters experiences.
          </p>
        </div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {/* Left Column - 2 horizontal cards stacked */}
          <div className="w-full flex flex-col gap-6">
            <TestimonialCard
              name="John Doe"
              quote="Heart Filled Toastmasters gave me the confidence to speak in front of any audience."
              image="/john-doe.png"
              alt="Toastmasters member smiling"
              variant="horizontal"
            />

            <TestimonialCard
              name="Alicia Lee"
              quote="I love how welcoming and encouraging everyone is at every meeting."
              image="/alicia-lee.png"
              alt="Toastmasters member presenting"
              variant="horizontal"
            />
          </div>

          {/* Right Column - vertical featured card */}
          <TestimonialCard
            name="Jane Smith"
            quote="Joining Heart Filled Toastmasters has completely changed how I approach public speaking. The encouragement, guidance, and friendly environment have helped me grow more than I ever imagined."
            image="/jane-smith.png"
            alt="Toastmasters member giving speech"
            variant="vertical"
          />
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

    {/* Location */}
    <section className="py-20 bg-white">
    <div className="container max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Visit Our Club
          </h2>

          <p className="text-lg text-gray-600 mb-4">
            Come join us at St. Mel Parish in Woodland Hills, California!  
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Heart Filled Toastmasters meets right here in the heart of the community.
          </p>
          <PrimaryButton href='visit-our-club' size="md">
            Visit Our Club
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
                <span><strong>Address:</strong> 20870 Ventura Blvd Woodland Hills, CA 91364 US</span>
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

    <CallToAction />

    </>

   );
}
 
export default HomePage;
