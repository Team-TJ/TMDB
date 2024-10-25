
import MovieContent from '@/components/movie/MovieContent';
import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import { FaPhotoVideo } from "react-icons/fa";
import Image from 'next/image';
import getImagePath from './../../utils/getImagePath';

interface SimilarMoviesSectionProps {
  movies: any;
}

const SimilarMoviesSection: React.FC<SimilarMoviesSectionProps> = ({ movies }) => {

  console.log(movies);

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
            <li key={movie.id} className='w-[calc((100%-1.25rem*4)/5)] relative'>
              <div className='w-full pb-[150%]'>
                <Image
                  fill
                  className="object-cover object-center"
                  src={getImagePath(movie.poster_path, "w500") || "/poster_default.jpg"}
                  alt="포스터"
                />
              </div>
              <div className='bottom-0 bg-[#03B3E4] w-full h-[100px] z-2'>

              </div>
            </li>
          )
        })}
      </ul>

    </section >
  )
}

export default SimilarMoviesSection