import axios from "axios";
import MovieBackdrop from '@/container/detail/MovieBackdrop';
import Image from 'next/image';

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<MovieDetailPageProps> = async ({ params }) => {
  let apiKey = "7105e5b5b38ae5649d69f0e2639eb114";
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
  );
  const { title, poster_path, backdrop_path, overview, original_title } =
    response.data;

  return (
    <div>
      {/* 헤더 (임시) */}
      <div className=" bg-[#091A38] shadow-black shadow-md h-[80px] text-center">
        header
      </div>

      {/* backdrop 이미지 */}
      <MovieBackdrop imgPath={backdrop_path} />
      
      {/* 영화 상세정보 섹션 */}
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
            <h2 className="text-white text-[min(10vw,4rem)] truncate">
              {title}
            </h2>
                {/* 평점 영역 (임시;로 영역만 채워놓음) */}
            <div className="h-[50px] bg-white mt-5"></div>

            <div className=" bg-[rgba(255,255,255,0.5)] w-full h-[.5px] mt-5"></div>

            <div className="text-white mt-5">{overview}</div>

            <div className="mt-5"></div>

            <ul className="bg-[rgba(255,255,255,0.1)] py-3 px-5">
              {Array(4)
                .fill(null)
                .map((v,i) => {
                  return (
                    <li key={i} className={`py-2 flex items-center ${i < 3 && "border-b-[#ffffff34] border-b-[.3px]"}`}>
                      <h5 className="text-[#c5cfe0d2] w-[10%] text-[12px]">원제</h5>
                      <div className="text-[#f9f9fa]">{original_title}</div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Page;
