import type { Metadata } from "next";
import PrimaryButton from "@/components/PrimaryButton";
import { Timeline } from "@/components/Timeline";
import CallToAction from "@/components/CallToAction";
import Image from "next/image";
import { SparklesIcon, HeartIcon, UsersIcon, TrophyIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Heart Filled Toastmasters",
  description:
    "Learn about Heart Filled Toastmasters in Woodland Hills, our story since 2019, and how we help members build communication and leadership skills.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Heart Filled Toastmasters",
    description:
      "Discover the mission, values, and journey of Heart Filled Toastmasters in Woodland Hills, California.",
    url: "/about",
    images: [
      {
        url: "/heart-filled-toastmasters-open-graph.png",
        width: 1200,
        height: 630,
        alt: "About Heart Filled Toastmasters",
      },
    ],
    siteName: siteConfig.name,
  },
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                About Us
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                Communication shapes how we connect, lead, and show up in the world. At Heart Filled Toastmasters, we help people find their voice in a supportive environment where growth is encouraged and progress is celebrated.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                As part of Toastmasters International, our club in Woodland Hills brings people together to build confidence, improve communication, and develop leadership skills.
              </p>

            </div>

            {/* Right Image */}
            <div className="relative w-full lg:min-h-[400px] h-64 sm:h-80 md:h-96 lg:h-full">
              <Image
                src="/st-mel-church.jpg"
                alt="St Mel Church"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image */}
            <div className="order-2 lg:order-1 relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
              <Image
                src="/our-heartfilled-story-3.webp"
                alt="Heart Filled Toastmasters meeting"
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Our Story
              </h2>

              <p className="text-lg text-gray-600 mb-4">
                Charted in 2019, Heart Filled Toastmasters was created with a simple yet powerful vision: to provide a welcoming space where individuals can develop their communication and leadership skills in a supportive, encouraging environment.
              </p>

              <p className="text-lg text-gray-600 mb-4">
                Our name reflects our commitment to leading with empathy, speaking with authenticity, and building a community where every member feels valued and heard.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                In just a few short years, we've earned recognition as a President's Distinguished Club, a testament to our members' dedication and the quality of our programs.
              </p>

              <PrimaryButton href="/visit-our-club" size="md">
                Visit Our Club
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our founding to today, discover the key milestones that have shaped Heart Filled Toastmasters.
            </p>
          </div>

          <Timeline
            items={[
              {
                date: "2019",
                title: "A New Beginning",
                description: "Heart Filled Toastmasters was founded with a vision to create a supportive space where individuals could develop their communication and leadership skills. We started with a small group of passionate members committed to personal growth.",
                image: {
                  src: "/new-beginning.webp",
                  alt: "Heart Filled Toastmasters founding members",
                },
              },
              {
                date: "2020",
                title: "President's Distinguished Recognition",
                description: "Our dedication paid off as Heart Filled Toastmasters first earned the prestigious President's Distinguished Club award in 2020 and has achieved it every year since, recognizing our excellence in member development, leadership training, and community impact.",
                image: {
                  src: "/president-distinguished-recognition.webp",
                  alt: "Heart Filled Toastmasters mentorship and growth",
                },
              },
              {
                date: "2022",
                title: "Growing Our Community",
                description: "As our membership grew, we expanded our programs and welcomed members beyond the St. Mel's Church. We established ourselves as a welcoming club where everyone's voice is valued and celebrated.",
                image: {
                  src: "/growing-community.webp",
                  alt: "Members speaking at a Heart Filled Toastmasters meeting",
                },
              },
              {
                date: "Today",
                title: "Empowering Leaders",
                description: "We continue our mission to help members overcome their fear of public speaking, build confidence, and develop essential leadership skills. Our community remains committed to supporting each other's growth and celebrating every milestone.",
                image: {
                  src: "/empowering-leaders-today.webp",
                  alt: "Heart Filled Toastmasters community members",
                },
              },
            ]}
          />
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 pb-32 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can find their voice and unlock their potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-loyal-blue/10 rounded-full flex items-center justify-center mb-4">
                <SparklesIcon className="w-6 h-6 text-loyal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Empowerment
              </h3>
              <p className="text-gray-600">
                We empower individuals to overcome their fear of public speaking and discover their unique voice.
              </p>
            </div>

            {/* Value Card 1 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-loyal-blue/10 rounded-full flex items-center justify-center mb-4">
                <HeartIcon className="w-6 h-6 text-loyal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Support
              </h3>
              <p className="text-gray-600">
                Our club provides a warm, encouraging atmosphere where mistakes are learning opportunities.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-loyal-blue/10 rounded-full flex items-center justify-center mb-4">
                <UsersIcon className="w-6 h-6 text-loyal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We foster genuine connections and lasting friendships among members beyond the St. Mel's Church.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-loyal-blue/10 rounded-full flex items-center justify-center mb-4">
                <TrophyIcon className="w-6 h-6 text-loyal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for continuous improvement and celebrate every milestone along the journey.
              </p>
            </div>

            {/* Value Card 4 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-loyal-blue/10 rounded-full flex items-center justify-center mb-4">
                <LightBulbIcon className="w-6 h-6 text-loyal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Growth
              </h3>
              <p className="text-gray-600">
                We believe in personal and professional development through consistent practice and feedback.
              </p>
            </div>

            {/* Value Card 5 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-loyal-blue/10 rounded-full flex items-center justify-center mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-loyal-blue" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace new ideas and adapt our approach to meet the evolving needs of our members.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 pt-24 bg-gradient-loyal-blissful relative">
        <div className="container max-w-7xl mx-auto px-8">
          {/* DTM Badge */}
          <div className="flex justify-center absolute -top-[55px] left-1/2 -translate-x-1/2 m-0">
            <Image
              src="/dtm-badge.png"
              alt="Distinguished Toastmaster Badge"
              width={120}
              height={120}
            />
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              We're proud of what our club and members have accomplished together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            
            {/* Achievement 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
              <div className="text-2xl font-bold text-white mb-2">
                President's
              </div>
              <div className="text-xl font-semibold text-white/90 mb-2">
                Distinguished Club
              </div>
              <p className="text-white/80">
                Recognized for excellence in member education and club growth
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
              <div className="text-2xl font-bold text-white mb-2">
                Award
              </div>
              <div className="text-xl font-semibold text-white/90 mb-2">
                Winning Speeches
              </div>
              <p className="text-white/80">
                2024 Inspirational speech winner
                <br />
                2021 Tall Tale speech winner
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
              <div className="text-2xl font-bold text-white mb-2">
                20+
              </div>
              <div className="text-xl font-semibold text-white/90 mb-2">
                Active Members
              </div>
              <p className="text-white/80">
                A thriving community of supportive and engaged speakers
              </p>
            </div>

            {/* Achievement 4 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center">
              <div className="text-2xl font-bold text-white mb-2">
                District Director
              </div>
              <div className="text-xl font-semibold text-white/90 mb-2">
                2021-2022
              </div>
              <p className="text-white/80">
                Proud Home of the 2021–2022 District Director
              </p>
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
 
export default AboutPage;
