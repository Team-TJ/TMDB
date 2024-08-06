
import axios from "axios";
import MovieBackdrop from "@/container/detail/MovieBackdrop";
import MovieDetailSection from "@/container/detail/MovieDetailSection";
import { fetchMovieDetail, fetchMovieImages } from "@/services/movieAPIs";

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<MovieDetailPageProps> = async ({ params }) => {
  const movieImages = await fetchMovieImages(params.id);

  return (
    <div>
      {/* 헤더 (임시) */}
      <div className=" bg-[#091A38] shadow-black shadow-md h-[60px] text-center lg:h-[80px]">
        header
      </div>

      {/* backdrop 이미지 */}
      <MovieBackdrop images={movieImages.backdrops} />

      {/* 영화 상세정보 섹션 */}
      <MovieDetailSection id={params.id} />
      
    </div>
  );
};

export default Page;
