import React from "react";
import Image from "next/image";
import OtherInfoContainer from "./otherInfo/OtherInfoContainer";
import OtherInfoItem from "./otherInfo/OtherInfoItem";
import VoteScoreMeter from "./VoteScoreMeter";
import { MdMovieCreation } from "react-icons/md";
import { FaBuilding, FaUser, FaUserCog } from "react-icons/fa";
import { fetchMovieDetail, fetchMovieCredits } from "@/services/movieAPIs";
import Breakline from "@/components/Breakline";

const MovieDetailSection = async ({ id }: { id: string }) => {
  const movieDetail = await fetchMovieDetail(id);
  const movieCredits = await fetchMovieCredits(id);
  const { title, poster_path, overview, original_title, production_companies, vote_average, vote_count } = movieDetail;

    
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
        <div className="w-[25%] pb-[calc(25%*3/2)] relative max-w-[300px]">
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
          <div className="flex">
            {/* 평점 영역 (임시;로 영역만 채워놓음) */}
            <div className="flex items-end gap-1 h-full">
              <VoteScoreMeter score={voteScore}/>

              <div className="flex-col">
              <Image
                  className=" translate-x-1"
                  width={25}
                  height={25}
                  alt="logo"
                  src={"/logo-square.png"}
                />
                <small className="text-[#bdbaba]">({vote_count})</small>
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
