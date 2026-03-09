import { ContactForm } from "@/components/ContactForm";
import { CalendarIcon, MapPinIcon, EnvelopeOpenIcon, CheckIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

const ContactPage = () => {
  return (
    <>
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our club? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Form */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>

          {/* Right - Image and What You'll Gain stacked */}
          <div className="flex flex-col w-full space-y-8 order-1 lg:order-2">
            <Image
              src="/about-us.png"
              alt="Contact Heart Filled Toastmasters"
              width={500}
              height={300}
              className="w-full min-h-[500px] object-cover hidden lg:block rounded-lg"
            />
            <div className="text-center max-w-md mx-auto lg:text-left lg:max-w-none lg:mx-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What You’ll Gain:
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
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
        </div>
      </div>
    </section>
    <section className="py-20 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          <div className="relative border border-slate-300 p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 bg-slate-50 px-2 py-2">
              <CalendarIcon className="h-8 w-8 text-gray-700" />
            </div> 
            <h2 className="text-xl font-bold mb-2">Date & Time</h2>
            <p className="text-gray-600 mb-4">Thursdays 7:00PM - 8:30PM</p>
          </div>
          <div className="relative border border-slate-300 p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 bg-slate-50 px-2 py-2">
              <MapPinIcon className="h-8 w-8 text-gray-700" />
            </div> 
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <p className="text-gray-600 mb-4">20870 Ventura Blvd Woodland Hills, CA 91364 US</p>
          </div>
          <div className="relative border border-slate-300 p-8 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 bg-slate-50 px-2 py-2">
              <EnvelopeOpenIcon className="h-8 w-8 text-gray-700" />
            </div> 
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <p className="text-gray-600 mb-4">Heartfilledtoastmaster@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
    </>

  );
};

export default ContactPage;
