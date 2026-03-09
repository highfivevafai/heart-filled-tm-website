import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  quote: string;
  image: string;
  alt?: string;
  variant?: "horizontal" | "vertical";
};

const TestimonialCard = ({
  name,
  quote,
  image,
  alt,
  variant = "horizontal",
}: TestimonialCardProps) => {
  const isHorizontal = variant === "horizontal";

  return (

      <div
        className={`bg-white border border-neutral-200 shadow-md p-4 flex justify-center gap-4 w-full h-full
          ${isHorizontal ? "flex-col md:flex-row md:items-center" : "flex-col"}`}
      >
        <Image
          src={image}
          alt={alt ?? ""}
          width={isHorizontal ? 96 : 400}
          height={isHorizontal ? 96 : 250}
          className="w-[100px] h-[100px] rounded-full object-cover"
        />

        <div className="flex flex-col gap-2 flex-1">
          <p className="text-gray-700 italic leading-relaxed">
            “{quote}”
          </p>
          <span className="font-semibold text-gray-900">
            — {name}
          </span>
        </div>
      </div>


  );
};

export default TestimonialCard;
