import React from "react";
import Image from "next/image";
import OtherInfoContainer from "./otherInfo/OtherInfoContainer";
import OtherInfoItem from "./otherInfo/OtherInfoItem";
import { BiMovie } from "react-icons/bi";
import { fetchMovieCredits } from "@/services/movieAPIs";

interface DetailSectionProps {
  title: string;
  poster_path: string; // 포스터 이미지 url
  original_title: string;
  overview: string;
  id : string;
}

const MovieDetailSection: React.FC<DetailSectionProps> = async ({
  title,
  poster_path,
  original_title,
  overview,
  id
}) => {

  const credits = await fetchMovieCredits(id);

  
  const companies = 'sdsd';
  const producers = credits.crew.filter((person : any) => person.job === 'Producer')
  const directors = credits.crew.filter((person : any) => person.job === 'Director')
  
  
  
  
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
          <OtherInfoContainer>
            <OtherInfoItem title="원제" content={original_title} titleIcon={<BiMovie size={12} color="#FFFFFF" />}/>
            <OtherInfoItem title="제작사" content={''} titleIcon={<BiMovie size={12} color="#FFFFFF" />}/>
            <OtherInfoItem title="제작자" content={producers.map((person : any) => person.name).join(', ')} titleIcon={<BiMovie size={12} color="#FFFFFF" />}/>
            <OtherInfoItem title="감독" content={directors.map((person : any) => person.name).join(', ')} titleIcon={<BiMovie size={12} color="#FFFFFF" />}/>

          </OtherInfoContainer>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSection;
