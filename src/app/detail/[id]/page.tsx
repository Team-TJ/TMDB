import axios from 'axios';
import MovieBackdrop from '@/container/detail/MovieBackdrop';
import MovieDetailSection from '@/container/detail/MovieDetailSection';
import ActorSection from '@/container/detail/actor/ActorSection';
import {
  fetchMovieImages,
  fetchMovieCredits,
  fetchMovieDetail,
} from '@/services/movieAPIs';
import { MovieImageSection } from '@/container/detail/MovieImageSection';

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<MovieDetailPageProps> = async ({ params }) => {
  const [movieDetail, movieCredits, movieImages] = await Promise.all([
    fetchMovieDetail(params.id),
    fetchMovieCredits(params.id),
    fetchMovieImages(params.id),
  ]);

  return (
    <div className="pt-16 lg:pt-20 min-h-[100vh]">
      {/* backdrop 이미지 */}
      <MovieBackdrop images={movieImages.backdrops} />

      {/* 영화 상세정보 섹션 */}
      <MovieDetailSection
        movieCredits={movieCredits}
        movieDetail={movieDetail}
      />

      {/* 출연진 섹션 */}
      <ActorSection movieCredits={movieCredits} />

      <div className='mb-[50px]'></div>

      <MovieImageSection images={movieImages.backdrops} />

      <div className='mb-[50px]'></div>

      
    </div>
  );
};

export default Page;
