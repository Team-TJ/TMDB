import axios from "axios";
import MovieBackdrop from "@/container/detail/MovieBackdrop";
import MovieDetailSection from "@/container/detail/MovieDetailSection";
import Image from "next/image";
import { BiMovie } from "react-icons/bi";

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
      <MovieDetailSection 
        title={title} 
        poster_path={poster_path}
        overview={overview}
        original_title={original_title}
      />
      
    </div>
  );
};

export default Page;
