import starIcon from "../../img/icons/star.png";
interface ContinueMovieCardProps {
  image: string;
  title: string;
  rating: string;
}

export default function ContinueMovieCard({
  image,
  title,
  rating,
}: ContinueMovieCardProps) {
  return (
    <div
      className="
        relative
        w-[340px]
        h-[180px]
        shrink-0
        rounded-xl
        overflow-hidden
        cursor-pointer
      "
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div
        className="
          absolute
          bottom-3
          left-4
          right-4
          flex
          items-center
          justify-between
          gap-[10px]
          text-white
        "
      >
        <span className="text-[14px] font-medium truncate">{title}</span>

        <span className="flex items-center gap-1 text-[12px] text-gray-200">
          <img src={starIcon} alt="Star Icon" className="w-4 h-4" />
          {rating}
        </span>
      </div>
    </div>
  );
}
