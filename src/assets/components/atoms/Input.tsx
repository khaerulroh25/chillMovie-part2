import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-full
        bg-transparent
        border
        border-gray-600
        px-5
        py-3
        text-sm
        text-white
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-gray-500
        ${className}
      `}
    />
  );
}
