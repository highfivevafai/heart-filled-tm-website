import { ReactNode } from "react";

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  isLoading?: boolean;
}

export function SubmitButton({
  children,
  size = "md",
  className = "",
  isLoading = false,
  ...props
}: SubmitButtonProps) {
  const sizes: Record<string, string> = {
    sm: "px-[16px] py-[8px]",
    md: "px-[24px] py-[12px]",
    lg: "px-[32px] py-[16px]",
  };

  return (
    <button
      {...props} // allows type="submit", disabled, onClick, etc.
      className={`inline-flex justify-center items-center gap-2 ${sizes[size]} 
                 bg-gradient-to-b from-[#772432] to-[#922B3C] 
                 text-white font-normal text-center ${className}
                 ${isLoading || props.disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {isLoading && (
        <svg 
          className="animate-spin h-5 w-5" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
