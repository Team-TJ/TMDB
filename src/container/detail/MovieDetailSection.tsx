import React from "react";
import Image from "next/image";
import OtherInfoContainer from "./otherInfo/OtherInfoContainer";
import OtherInfoItem from "./otherInfo/OtherInfoItem";
import VoteScoreMeter from "./VoteScoreMeter";
import { MdMovieCreation, MdDateRange } from "react-icons/md";
import { FaBuilding, FaUser, FaUserCog, FaRegClock } from "react-icons/fa";
import { fetchMovieDetail, fetchMovieCredits } from "@/services/movieAPIs";
import Breakline from "@/components/Breakline";


const MovieDetailSection = async ({ id }: { id: string }) => {
  const movieDetail = await fetchMovieDetail(id);
  const movieCredits = await fetchMovieCredits(id);
  let {
    title,
    poster_path,
    overview,
    original_title,
    production_companies,
    vote_average,
    vote_count,
    release_date,
    runtime
  } = movieDetail;

  runtime = Number(runtime);

  let companies = production_companies
    .map((company: any) => company.name)
    .join(", ");
  let producers = movieCredits.crew
    .filter((person: any) => person.job === "Producer")
    .map((person: any) => person.name)
    .join(", ");
  let directors = movieCredits.crew
    .filter((person: any) => person.job === "Director")
    .map((person: any) => person.name)
    .join(", ");

  let voteScore = Number(vote_average.toFixed(1));
  return (
    <div className="px-[5%] max-w-[1400px] mx-auto">
      <div className="mt-[2rem]"></div>

      <div className="flex justify-between items-center">
        {/* 포스터 이미지 */}
        <div className="hidden w-[25%] pb-[calc(25%*3/2)] relative max-w-[300px] lg:block">
          <Image
            fill
            className="object-cover object-center"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="포스터"
          />
        </div>

        {/* 제목, 평점, 줄거리, 제작사 등 */}
        <div className="flex flex-col w-[100%] lg:w-[70%]">
          <h2 className="text-white text-[min(6vw,4rem)] truncate">{title}</h2>
          <div className="flex">
            <div className="flex items-end gap-1 h-full mt-5">
              <VoteScoreMeter score={voteScore} />
              <div className="flex-col justify-between">
                <Image
                  className=" translate-x-1"
                  width={25}
                  height={25}
                  alt="logo"
                  src={"/logo-square.png"}
                />
                <small className="text-[#bdbaba]">({vote_count})</small>
              </div>

              <div className="pb-1 pl-2 gap-1 flex items-end leading-none">
                <FaRegClock color="#FFFFFF" size={12}/>
                <div className="text-white">
                  <b className="text-[24px] font-medium mr-1">{Math.floor(runtime/60)}</b>
                  <small className="mr-1 text-[12px] text-[#BBBBBB]">hour</small>
                  <b className="text-[24px] font-medium mr-1">{runtime % 60}</b>
                  <small className=" text-[12px] text-[#BBBBBB]">min</small>
                </div>
              </div>

              <div className="pb-1 pl-2 gap-1 flex items-center leading-none">
                <MdDateRange color="#FFFFFF" size={12}/>
                <small className="text-[#BBBBBB] text-[12px]">{release_date}</small>
              </div>

            </div>
          </div>

          <Breakline />

          <div className="text-white mt-5 text-[14px]">{overview}</div>

          {/* 원제 및 크레딧 */}
          <OtherInfoContainer>
            <OtherInfoItem
              title="원제"
              content={original_title}
              titleIcon={<MdMovieCreation size={12} color="#FFFFFF" />}
            />
            <OtherInfoItem
              title="제작사"
              content={companies}
              titleIcon={<FaBuilding size={12} color="#FFFFFF" />}
            />
            <OtherInfoItem
              title="제작자"
              content={producers}
              titleIcon={<FaUser size={12} color="#FFFFFF" />}
            />
            <OtherInfoItem
              title="감독"
              content={directors}
              titleIcon={<FaUserCog size={12} color="#FFFFFF" />}
            />
          </OtherInfoContainer>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSection;