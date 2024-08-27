import React from 'react';
import { IoMdPeople } from "react-icons/io";
import SectionTitle from '../../../components/SectionTitle';
import Image from 'next/image';
import getImagePath from '@/utils/getImagePath';
import ActorCard from './ActorCard';

const ActorSection = ({ movieCredits }: { movieCredits: any }) => {
  const mainCast = movieCredits.cast.slice(0,10);

  return (
    <section className='px-[5%] max-w-[1600px] mx-auto'>
      <SectionTitle className='mt-8 mb-0' icon={<IoMdPeople color={'#03b3e4'} size={28} />} text='출연진' />
      <ul className='flex overflow-x-auto gap-[15px] py-4'>
        {mainCast.map((actor:any) => {
          return (
            <ActorCard key={actor.id} actor={actor} />
          );
        })}
      </ul>
    </section>
  )
}

export default ActorSection