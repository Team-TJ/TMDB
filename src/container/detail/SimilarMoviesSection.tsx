
import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import { FaPhotoVideo } from "react-icons/fa";

interface SimilarMoviesSectionProps {
  movies: any;
}

const SimilarMoviesSection: React.FC<SimilarMoviesSectionProps> = (movies) => {
  return (
    <section className="px-[5%] max-w-[1600px] mx-auto">
      <SectionTitle
        className="mt-8 mb-0"
        icon={<FaPhotoVideo color={'#03b3e4'} size={28} />}
        text="유사한 영화"
      />

    </section>
  )
}

export default SimilarMoviesSection