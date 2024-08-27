import { FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import { MdInfo } from "react-icons/md";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import { IoCloseOutline } from "react-icons/io5";
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
  const [videoKey, setVideoKey] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  function modalHandler() {
    setModalIsVisible((state) => !state);
  }
  const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=ko`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
    },
  };
  useEffect(() => {
    axios.get(url, options).then((res) => {
      setVideoKey(res.data.results[0]?.key);
    });
  }, []);
  return (
    <figure className="w-full h-full relative overflow-hidden text-white group">
      <img
        className="w-full h-full object-cover object-center transition brightness-50 group-hover:brightness-90 duration-1000"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="영화 포스터"
      />
      <figcaption className="absolute translate-y-[-50%] left-[5%] top-[50%] w-[90%] ">
        <small className="text-xl font-semibold">{movie.original_title}</small>
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
        {modalIsVisible &&
          createPortal(
            <>
              <div
                className={
                  "fixed top-0 left-0 w-full h-full bg-black flex content-center justify-center z-50"
                }
                onClick={modalHandler}
              />
              <div
                className={
                  "fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[80%] max-h-[80%] z-50 aspect-video"
                }
              >
                <iframe
                  className="w-full h-full"
                  allowFullScreen
                  src={`http://www.youtube.com/embed/${videoKey}?enablejsapi=1&origin=http://example.com`}
                ></iframe>
              </div>
              <button
                className="fixed top-5 right-5 text-8xl opacity-70 text-white z-50"
                onClick={modalHandler}
              >
                <IoCloseOutline />
              </button>
            </>,
            document.body as HTMLElement
          )}
        <Link
          href={`/detail/${movie.id}`}
          className="cursor-pointer hover:bg-white/80 hover:text-black py-[8px] px-[30px] border-white border-[1px] border-solid"
        >
          <MdInfo className="inline mr-[2px]" />
          상세정보
        </Link>
      </figcaption>
    </figure>
  );
}
