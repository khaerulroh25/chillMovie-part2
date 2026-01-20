import BrandLogo from "../atoms/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-[#2F3334]">
      <div className="md:hidden px-6 py-8 space-y-6">
        <div className="space-y-4">
          <BrandLogo />
          <p className="text-sm">
            &copy;{new Date().getFullYear()} Chill All Rights Reserved.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-white cursor-pointer">
            <span className="text-base">Genre</span>
            <span className="text-xl">{">"}</span>
          </div>

          <div className="flex items-center justify-between text-white cursor-pointer">
            <span className="text-base">Bantuan</span>
            <span className="text-xl">{">"}</span>
          </div>
        </div>
      </div>

      <div className="hidden md:grid max-w-[1440px] mx-auto px-6 md:px-[80px] py-12 grid-cols-3 gap-12">
        <div className="space-y-4">
          <BrandLogo />
          <p className="text-sm">
            &copy;{new Date().getFullYear()} Chill All Rights Reserved.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Genre</h4>

          <div className="grid  grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-10 text-sm">
            <span>Aksi</span>
            <span>Drama</span>
            <span>Komedi</span>
            <span>Sains & Alam</span>

            <span>Anak-anak</span>
            <span>Fantasi Ilmiah & Fantasi</span>
            <span>Petualangan</span>
            <span>Thriller</span>

            <span>Anime</span>
            <span>Kejahatan</span>
            <span>Perang</span>
            <span></span>

            <span>Britania</span>
            <span>KDrama</span>
            <span>Romantis</span>
            <span></span>
          </div>
        </div>

        <div className="text-left md:justify-self-end">
          <h4 className="text-white font-semibold mb-4">Bantuan</h4>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Kontak Kami</li>
            <li className="hover:text-white cursor-pointer">Privasi</li>
            <li className="hover:text-white cursor-pointer">
              Syarat & Ketentuan
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
