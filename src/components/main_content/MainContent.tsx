import { FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import { MdInfo } from "react-icons/md";
import { useState } from "react";
export interface Movie {
  adult: Boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: Boolean;
  vote_average: number;
  vote_count: number;
}
interface MovieData {
  movie: Movie;
}
export default function MainContent({ movie }: MovieData) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function modalHandler() {
    setModalIsVisible((state) => !state);
  }
  return (
    <>
      {modalIsVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex content-center justify-center z-30"></div>
      )}
      <figure className="w-full h-full relative overflow-hidden text-white group">
        <img
          className="w-full h-full object-cover object-center transition brightness-50 group-hover:brightness-90 duration-1000"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="영화 포스터"
        />
        <figcaption className="absolute translate-y-[-50%] left-[5%] top-[50%] w-[90%] ">
          <small className="text-xl font-semibold">
            {movie.original_title}
          </small>
          <h6 className="w-auto text-[min(8vw,5em)] whitespace-nowrap mt-[10px] font-semibold overflow-hidden text-ellipsis">
            {movie.title}
          </h6>
          <p className="mb-[15px] max-w-[500px]">{movie.overview}</p>
          <button
            onClick={modalHandler}
            className="hover:bg-white/80 hover:text-black bg-white/30 mr-[15px] py-[6.5px] px-[30px] border-white border-[1px] border-solid "
          >
            <FaGooglePlay className="inline mr-[2px]" />
            재생
          </button>

          <Link
            href={`/${movie.id}`}
            className="cursor-pointer hover:bg-white/80 hover:text-black py-[8px] px-[30px] border-white border-[1px] border-solid"
          >
            <MdInfo className="inline mr-[2px]" />
            상세정보
          </Link>
        </figcaption>
      </figure>
    </>
  );
}
