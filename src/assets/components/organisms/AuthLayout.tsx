import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  backgroundImage: string;
}

export default function AuthLayout({
  children,
  backgroundImage,
}: AuthLayoutProps) {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full flex justify-center px-4">
        {children}
      </div>
    </div>
  );
}
