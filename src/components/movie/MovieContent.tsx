import Link from "next/link";
import { Movie } from "../main_content/MainContent";
interface MovieProps {
  movie: Movie;
}
export const genreList = {
  28: "액션",
  12: "모험",
  16: "애니메이션",
  35: "코메디",
  80: "범죄",
  99: "다큐멘터리",
  18: "드라마",
  10751: "가족",
  14: "판타지",
  36: "역사",
  27: "공포",
  10402: "음악",
  9648: "미스테리",
  10749: "로맨스",
  878: "SF",
  10770: "TV영화",
  53: "스릴러",
  10752: "전쟁",
  37: "서부극",
};

export default function MovieContent({ movie }: MovieProps) {
  return (
    <>
      <figure className="group px-[10px] h-full box-border w-[249.75px]">
        <Link
          className="block h-full bg-[#03b3e4] transition-all duration-300 group-hover:bg-[#8ccda2] group-hover:scale-110 group-hover:relative group-hover:z-10"
          href={`/detail/${movie.id}`}
        >
          <div className="relative overflow-hidden">
            <img
              className="w-full brightness-[80%] transition-all duration-300 "
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
            <span></span>
            <small></small>
          </div>
          <figcaption className="p-[10px] text-ellipsis overflow-hidden whitespace-nowrap text-white">
            <h3 className="font-semibold text-[1.2em]">{movie.title}</h3>
            <p className="text-[0.8em]">
              {movie.genre_ids.map((num) => genreList[num]).join(" / ")}
            </p>
            <p className="text-[0.9em]">{movie.release_date}</p>
          </figcaption>
        </Link>
      </figure>
    </>
  );
}
