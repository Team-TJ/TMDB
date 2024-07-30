import axios from "axios";
import MovieBackdrop from "@/container/detail/MovieBackdrop";
import MovieDetailSection from "@/container/detail/MovieDetailSection";
import { fetchMovieDetail } from "@/services/movieAPIs";

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<MovieDetailPageProps> = async ({ params }) => {
  const movieData = await fetchMovieDetail(params.id)
  
  
  const { title, poster_path, backdrop_path, overview, original_title, production_companies } = movieData;

  return (
    <div>
      {/* 헤더 (임시) */}
      <div className=" bg-[#091A38] shadow-black shadow-md h-[80px] text-center">
        header
      </div>

      {/* backdrop 이미지 */}
      <MovieBackdrop imgPath={backdrop_path} />

      {/* 영화 상세정보 섹션 */}
      <MovieDetailSection 
        id={params.id}
        title={title} 
        poster_path={poster_path}
        overview={overview}
        original_title={original_title}
      />
      
    </div>
  );
};

export default Page;
