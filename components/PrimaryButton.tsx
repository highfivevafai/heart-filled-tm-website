import Link from "next/link";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg"; // optional size prop
  className?: string;          // optional extra classes
  onClick?: () => void;        // optional click handler
}

export default function PrimaryButton({
  href,
  children,
  size = "md",
  className = "",
  onClick,
}: PrimaryButtonProps) {
  // Adjust inner frame padding for different sizes
  const sizes: Record<string, string> = {
    sm: "px-[16px] py-[8px]",
    md: "px-[24px] py-[12px]",
    lg: "px-[32px] py-[16px]",
  };

  return (
    <Link href={href} className={`${className}`} onClick={onClick}>
      {/* Outer frame */}
      <span className="inline-flex p-[2px] justify-center items-center bg-[#772432] shadow-md">
        {/* Inner frame */}
        <span
          className={`flex flex-col justify-center items-center ${sizes[size]}
            bg-gradient-to-b from-[#772432] to-[#922B3C] shadow-inner
            text-white font-normal text-center`}
        >
          {children}
        </span>
      </span>
    </Link>
  );
}