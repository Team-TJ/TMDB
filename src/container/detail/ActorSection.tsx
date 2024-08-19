import React from 'react';
import { IoMdPeople } from "react-icons/io";
import Breakline from '@/components/Breakline';
import SectionTitle from './../../components/SectionTitle';



const ActorSection = ({ movieCredits }: { movieCredits: any }) => {
  return (
    <section className='px-[5%] max-w-[1600px] mx-auto'>
      <SectionTitle icon={<IoMdPeople color={'#03b3e4'} size={28} />} text='출연진' />
    </section>
  )
}

export default ActorSection