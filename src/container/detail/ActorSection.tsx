import React from 'react';
import { IoMdPeople } from "react-icons/io";
import SectionTitle from './../../components/SectionTitle';



const ActorSection = ({ movieCredits }: { movieCredits: any }) => {
  const mainCast = movieCredits.cast.slice(0,10);

  return (
    <section className='px-[5%] max-w-[1600px] mx-auto'>
      <SectionTitle className='mt-8 mb-0' icon={<IoMdPeople color={'#03b3e4'} size={28} />} text='출연진' />
      <ul className='flex overflow-x-auto gap-[15px] py-4'>
        {mainCast.map((cast:any) => {
          return (
            <li key={cast.id} className='flex-shrink-0 bg-white w-[170px] h-[310px]'>
              
            </li>
          );
        })}
      </ul>
    </section>
  )
}

export default ActorSection