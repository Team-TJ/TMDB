'use client';

import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import { FaPhotoVideo } from "react-icons/fa";
import Image from 'next/image';
import getImagePath from './../../utils/getImagePath';
import { MOVIE_GENRE_NAME } from '@/constants/movieConstants';
import { useRouter } from 'next/navigation';


interface SimilarMoviesSectionProps {
  movies: any;
}

const SimilarMoviesSection: React.FC<SimilarMoviesSectionProps> = ({ movies }) => {

  const { push } = useRouter();

  return (
    <section className="px-[5%] max-w-[1600px] mx-auto">
      <SectionTitle
        className="mt-8 mb-0"
        icon={<FaPhotoVideo color={'#03b3e4'} size={28} />}
        text="유사한 영화"
      />

      <ul className='flex flex-wrap gap-5 py-6 px-3'>
        {movies.slice(0, 10).map((movie: any) => {
          return (
            <li key={movie.id}
              onClick={() => push(`/detail/${movie.id}`)}
              className='w-full sm:w-[calc((100%-1.25rem*1)/2)] md:w-[calc((100%-1.25rem*2)/3)] lg:w-[calc((100%-1.25rem*4)/5)] relative cursor-pointer group hover:scale-105 transition-all duration-300'
            >
              <div className='w-full pb-[150%] relative '>
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center "
                  src={getImagePath(movie.poster_path, "w500") || "/poster_default.jpg"}
                  alt="포스터"
                />
              </div>
              <div className='bg-[#03B3E4] w-full h-[85px] flex flex-col text-[#FFF] py-1 px-3 justify-center 2 group-hover:bg-[#8CCDA2] transition-all duration-300'>
                <h5 className='font-bold truncate text-[18px]'>{movie.title}</h5>
                <small className='truncate text-[12px]'>{movie.genre_ids.map((id: number) => MOVIE_GENRE_NAME[id]).join('/')}</small>
                <small className='truncate text-[12px]'>{movie.release_date}</small>
              </div>
            </li>
          )
        })}
      </ul>

    </section >
  )
}

export default SimilarMoviesSection