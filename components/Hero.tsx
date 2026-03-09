import PrimaryButton from "@/components/PrimaryButton";
import { ReactNode } from "react";

interface HeroProps {
  heading: ReactNode;
  description: string;
  backgroundImage: string;
  buttonText: string;
  buttonHref: string;
}

export default function Hero({
  heading,
  description,
  backgroundImage,
  buttonText,
  buttonHref,
}: HeroProps) {
  return (
    <section className="relative flex items-center justify-center text-white bg-gradient-loyal-blissful">
      {/* Background image layer - only visible on sm and above */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 sm:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      ></div>

      {/* Overlay to darken the image for readability - only visible on sm and above */}
      <div className="absolute inset-0 bg-black/40 opacity-0 sm:opacity-100 z-0"></div>

      <div className="relative z-10 container max-w-4xl text-center px-4 py-32 sm:py-40">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {heading}
        </h1>

        <p className="text-lg sm:text-xl font-semibold mb-8">{description}</p>

        <PrimaryButton href={buttonHref} size="lg">
          {buttonText}
        </PrimaryButton>
      </div>
    </section>
  );
}
