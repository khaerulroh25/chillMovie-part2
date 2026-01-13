import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "icon" | "heroPrimary" | "heroSecondary";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full text-sm font-semibold transition duration-200";

  const variants = {
    primary: "bg-[#3D4142] text-white hover:bg-gray-500 px-6 py-3",
    outline:
      "border border-gray-500 text-white hover:bg-white hover:text-black px-6 py-3",
    icon: "w-10 h-10 p-0 bg-black/60 text-white hover:bg-black/80",
    heroPrimary: "bg-[#0F1E93] text-white h-[45px] hover:bg-[#0C187A]",
    heroSecondary: "bg-[#22282A] text-white h-[45px] hover:bg-[#2A3032]",
  };

  return (
    <button
      className={`
        ${base}
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
