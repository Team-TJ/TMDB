import React from "react";
import Image from "next/image";
import { BiMovie } from "react-icons/bi";

interface DetailSectionProps {
  title: string;
  poster_path: string;
  original_title: string;
  overview: string;
}

const MovieDetailSection: React.FC<DetailSectionProps> = ({
  title,
  poster_path,
  original_title,
  overview,
}) => {
  return (
    <div className="px-[5%] max-w-[1400px] mx-auto">
      <div className="mt-[2rem]"></div>

      <div className="flex justify-between items-start">
        {/* 포스터 이미지 */}
        <div className="w-[25%] pb-[37.3%] relative">
          <Image
            fill
            className="object-cover object-center"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="포스터"
          />
        </div>

        {/* 제목, 평점, 줄거리, 제작사 등 */}
        <div className="flex flex-col w-[70%]">
          <h2 className="text-white text-[min(6vw,4rem)] truncate">{title}</h2>
          {/* 평점 영역 (임시;로 영역만 채워놓음) */}
          <div className="h-[50px] bg-white mt-5"></div>

          <div className=" bg-[rgba(255,255,255,0.5)] w-full h-[.5px] mt-5"></div>

          <div className="text-white mt-5 text-[14px]">{overview}</div>

          {/* 기타 정보 (원제, 제작사, 제작자, 감독) */}
          <ul className="bg-[rgba(255,255,255,0.1)] py-3 px-5 mt-5">
            <li className="py-2 flex items-center border-b-[#ffffff34] border-b-[.3px] gap-10">
              <div className="flex items-center gap-2">
                <BiMovie size={12} color="white" />
                <span className="text-[#c5cfe0d2] text-[12.6px]">원제</span>
              </div>
              <div className="text-[#f9f9fa] text-[14px]">{original_title}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSection;
