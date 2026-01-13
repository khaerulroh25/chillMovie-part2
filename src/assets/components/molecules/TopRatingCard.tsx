interface TopRatingCardProps {
  image: string;
  badge?: "episode" | "top10";
}

export default function TopRatingCard({ image, badge }: TopRatingCardProps) {
  return (
    <div
      className="
        relative
        w-[267px]
        h-[420px]
        shrink-0
        rounded-xl
        overflow-hidden
        cursor-pointer
      "
    >
      <img src={image} alt="" className="w-full h-full object-cover" />

      {badge === "episode" && (
        <span className="absolute top-3 left-3 bg-[#1E40AF] text-white text-[14px] font-semibold px-3 py-1 rounded-full ">
          Episode Baru
        </span>
      )}

      {badge === "top10" && (
        <div className="absolute top-0 right-3 flex flex-col items-center justify-center w-[23px] h-[40px] bg-[#E50914] text-white gap-3 px-5 py-9 rounded-tr-[20%] rounded-bl-[20%]">
          <span className="text-[14px] leading-none">Top</span>
          <span className="text-[14px] leading-none">10</span>
        </div>
      )}
    </div>
  );
}
