import { useState, useRef, useEffect } from "react";
import avatar from "../../img/icons/avatar.png";
import userIcon from "../../img/icons/account.png";
import premiumIcon from "../../img/icons/star.png";
import logoutIcon from "../../img/icons/login-variant.png";

export default function AvatarDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative flex items-center">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center md:gap-3 gap-[4px]"
      >
        <img
          src={avatar}
          alt="User Avatar"
          className="md:w-[40px] md:h-[40px] w-[20px] h-[20px] rounded-full object-cover"
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className={`text-white transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full w-[140px] h-[130px] mt-3 md:w-[220px] md:h-[160px] rounded-xl bg-[#181A1C] border border-white/10 shadow-lg overflow-hidden z-50">
          <MenuItem icon={userIcon} primary>
            Profil Saya
          </MenuItem>
          <MenuItem icon={premiumIcon}>Ubah Premium</MenuItem>
          <div className="h-px bg-white/10 my-1" />
          <MenuItem icon={logoutIcon}>Keluar</MenuItem>
        </div>
      )}
    </div>
  );
}

type MenuItemProps = {
  icon: string;
  children: React.ReactNode;
  primary?: boolean;
};

function MenuItem({ icon, children, primary }: MenuItemProps) {
  return (
    <button
      className={`
        flex items-center gap-3 w-full px-4 py-3 text-left
        font-sans text-[10px] md:text-[14px]
        hover:bg-white/5 transition
        ${primary ? "text-blue-800" : "text-white"}
      `}
    >
      <img
        src={icon}
        alt=""
        className="md:w-[18px] md:h-[18px] w-[16px] h-[16px] object-contain shrink-0"
      />
      <span>{children}</span>
    </button>
  );
}
