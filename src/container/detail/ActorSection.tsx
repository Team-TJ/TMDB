import React from 'react';
import { IoMdPeople } from "react-icons/io";
import SectionTitle from './../../components/SectionTitle';
import Image from 'next/image';
import getImagePath from '@/utils/getImagePath';



const ActorSection = ({ movieCredits }: { movieCredits: any }) => {
  const mainCast = movieCredits.cast.slice(0,10);

  return (
    <section className='px-[5%] max-w-[1600px] mx-auto'>
      <SectionTitle className='mt-8 mb-0' icon={<IoMdPeople color={'#03b3e4'} size={28} />} text='출연진' />
      <ul className='flex overflow-x-auto gap-[15px] py-4'>
        {mainCast.map((cast:any) => {
          return (
            <li key={cast.id} className='flex-shrink-0'>
              <figure className=' border-[#EEEEEE] border-solid border-[5px]'>
                <Image width={160} height={240} src={getImagePath(cast.profile_path) || '/film1.jpg'} className=' object-cover object-center' alt='배우 사진' />
                <figcaption className='bg-[#091A38] text-[14px] px-2 w-[160px] h-[60px] p-[10px]'>
                  <span className='block text-[#8ccda2] font-semibold truncate'>{cast.name}</span>
                  <span className='block text-[#EEEEEE] truncate'> '{cast.character}' 역</span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  )
}

export default ActorSection