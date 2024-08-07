import { FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import { MdInfo } from "react-icons/md";

export default function MainContent() {
  return (
    <figure className="w-full h-full relative overflow-hidden text-white group">
      <img
        className="w-full h-full object-cover object-center transition brightness-50 group-hover:brightness-90 duration-1000"
        src="https://image.tmdb.org/t/p/original/dsGwCEO8tda4FlgHKvL95f0oQbH.jpg"
        alt="영화 포스터"
      />
      <figcaption className="absolute translate-y-[-50%] left-[5%] top-[50%] w-[90%] ">
        <small className="text-xl font-semibold">
          Justice League: Crisis on Infinite Earths Part Three
        </small>
        <h6 className="w-auto text-[min(8vw,5em)] whitespace-nowrap mt-[10px] font-semibold overflow-hidden text-ellipsis">
          저스티스 리그: 크라이시스 온 인피닛 어스 파트 원
        </h6>
        <p className="mb-[15px] max-w-[500px]">
          Now fully revealed as the ultimate threat to existence, the
          Anti-Monitor wages an unrelenting attack on the surviving Earths that
          struggle for survival in a pocket universe. One by one, these worlds
          a...
        </p>
        <button className="hover:bg-white/80 hover:text-black bg-white/30 mr-[15px] py-[6.5px] px-[30px] border-white border-[1px] border-solid ">
          <FaGooglePlay className="inline mr-[2px]" />
          재생
        </button>
        <Link
          href={"/"}
          className="cursor-pointer hover:bg-white/80 hover:text-black py-[8px] px-[30px] border-white border-[1px] border-solid"
        >
          <MdInfo className="inline mr-[2px]" />
          상세정보
        </Link>
      </figcaption>
    </figure>
  );
}
