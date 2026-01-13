import logo from "../../img/icons/logo.png";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="Chill Logo" className="w-[50px] h-[44px]" />

      <span
        className="
          font-brand
          text-[50px]
          text-white
          leading-[55px]
          h-[44px]
          flex
          items-center
        "
      >
        CHILL
      </span>
    </div>
  );
}
