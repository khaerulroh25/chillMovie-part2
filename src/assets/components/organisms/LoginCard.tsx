import Button from "../atoms/Buttons";
import LoginForm from "./LoginForm";
import BrandLogo from "../atoms/BrandLogo";
import googleIcon from "../../img/icons/google-icon.png";
import { Link } from "react-router-dom";

export default function LoginCard() {
  return (
    <div
      className="
        w-full
        max-w-[529px]
        rounded-2xl
        bg-[#181A1CA6]
        backdrop-blur-xl
        p-10
        text-white
        flex
        flex-col
        gap-[37px]
        shadow-2xl
      "
    >
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <BrandLogo />
        </div>
        <h3
          className="
              font-sans
              font-bold
              text-[32px]
              leading-[35.2px]
              text-center
            "
        >
          Masuk
        </h3>
        <p
          className="
            font-sans
            font-normal
            text-[16px]
            leading-[22.4px]
            tracking-[0.2px]
            text-center
            text-white
          "
        >
          Selamat datang kembali!
        </p>
      </div>

      <div className="flex flex-col gap-[6px]">
        <LoginForm />
        <div className="flex justify-between items-center">
          <p
            className="
            font-sans
            font-normal
            text-[16px]
            leading-[22.4px]
            tracking-[0.2px]
            text-gray-300
          "
          >
            Belum punya akun?
            <Link
              to="/register"
              className="
            ml-1
            font-medium
            text-[16px]
            leading-[22.4px]
            tracking-[0.2px]
            text-white
            cursor-pointer
          "
            >
              Daftar
            </Link>
          </p>
          <p
            className="
            font-sans
            font-normal
            text-[16px]
            leading-[22.4px]
            tracking-[0.2px]
            text-gray-300
            cursor-pointer
          "
          >
            Lupa kata sandi?
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button>Masuk</Button>

        <div className="text-center text-sm text-gray-400">Atau</div>

        <Button variant="outline">
          <div className="flex items-center justify-center gap-5">
            <img src={googleIcon} alt="Google" className="w-5 h-5" />
            <span>Masuk dengan Google</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
