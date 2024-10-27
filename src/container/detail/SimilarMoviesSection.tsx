'use client';

import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import Image from 'next/image';
import getImagePath from './../../utils/getImagePath';
import { MOVIE_GENRE_NAME } from '@/constants/movieConstants';
import { useRouter } from 'next/navigation';
import LazyImage from '@/components/LazyImage';

interface SimilarMoviesSectionProps {
  movies: any;
}

const SimilarMoviesSection: React.FC<SimilarMoviesSectionProps> = ({
  movies,
}) => {
  const { push } = useRouter();

  return (
    <section className="px-[5%] max-w-[1600px] mx-auto">
      <SectionTitle
        className="mt-8 mb-0"
        icon={<FaPhotoVideo color={'#03b3e4'} size={28} />}
        text="유사한 영화"
      />
      {movies.length ? (
        <ul className="flex flex-wrap gap-5 py-6 px-3">
          {movies.slice(0, 10).map((movie: any) => {
            const gradeColors = ['#FF0000', '#FF4500', '#ffA500', '#9ACD32'];
            let score = movie.vote_average;
            let level = (Math.ceil(score / 2.5) || 1) - 1
            let gradeColor = gradeColors[level]
            return (
              <li
                key={movie.id}
                onClick={() => push(`/detail/${movie.id}`)}
                className="w-full sm:w-[calc((100%-1.25rem*1)/2)] md:w-[calc((100%-1.25rem*2)/3)] lg:w-[calc((100%-1.25rem*4)/5)] relative cursor-pointer group hover:scale-105 transition-all duration-300"
              >
                <LazyImage
                  src={getImagePath(movie.poster_path, 'w500') || '/no-image.jpg'}
                  containerClass='w-full pb-[150%] relative'
                  ImageClass="object-cover object-center0"
                  alt='포스터'
                />

                {/* <div className="w-full pb-[150%] relative ">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center "
                    src={
                      getImagePath(movie.poster_path, 'w500') || '/no-image.jpg'
                    }
                    alt="포스터"
                  />
                </div> */}

                <div className="bg-[#03B3E4] w-full h-[85px] flex flex-col text-[#FFF] py-1 px-3 justify-center group-hover:bg-[#8CCDA2] transition-all duration-300">
                  <h5 className="font-bold truncate text-[18px]">
                    {movie.title}
                  </h5>
                  <small className="truncate text-[12px]">
                    {movie.genre_ids
                      .map((id: number) => MOVIE_GENRE_NAME[id])
                      .join('/')}
                  </small>
                  <small className="truncate text-[12px]">
                    {movie.release_date}
                  </small>
                </div>
                <div className='absolute top-0 vote-clip' style={{ background: gradeColor }}>
                </div>
                <div className='absolute top-0 right-0 w-[13%] h-[6.8%] flex items-center justify-center'>
                  <span className='text-[#EEEEEE] font-semibold text-[max(1vw,14px)] sm:text-[max(.8vw,12px)]'>
                    {(score === 10 || score === 0) ? score : score.toFixed(1)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="flex justify-center items-center text-[#CCCCCC] h-[100px]">
          유사한 영화 정보가 없습니다.
        </div>
      )}
    </section>
  );
};

export default SimilarMoviesSection;
