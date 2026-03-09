import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";

export default function CallToAction() {
  return (
      <div className="relative overflow-hidden lg:min-h-[484px]">
        <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[1216px]">
            <Image
              src="/tm-background-cta-2.png"
              alt=""
              fill
              className="object-contain object-center"
              priority
            />
        </div>

        <div className="relative z-10 max-w-[540px] mx-auto px-8 text-center lg:min-h-[484px] lg:flex lg:flex-col lg:justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-balance text-gray-900 mb-6">
            Ready to Start Your Heart Filled Journey?
          </h2>
          <p className="text-lg text-gray-900 mb-8">
            Whether you're looking to advance your career, overcome the fear of public speaking, or simply want to express yourself more confidently, Heart Filled Toastmasters is here to support you every step of the way.
          </p>
          <PrimaryButton href="/contact" size="lg">
            RSVP for Next Meeting
          </PrimaryButton>
        </div>
      </div>
  );
}