'use client';
import React, { MouseEventHandler, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import getImagePath from '@/utils/getImagePath';
import { IoPersonSharp } from "react-icons/io5";
import OtherInfoContainer from './../otherInfo/OtherInfoContainer';
import OtherInfoItem from './../otherInfo/OtherInfoItem';


interface ActorModalProps {
  actor: any;
  closeModal: MouseEventHandler;
}

const ActorModal: React.FC<ActorModalProps> = ({ actor, closeModal }) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    }
  }, [])


  return (
    <div className='fixed top-0 left-0 z-50 bg-[#000000cd] w-full h-full overflow-auto'>
      <div className='text-right'>
        <button onClick={closeModal} className='group'>
          <IoIosClose className='w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] opacity-80 group-hover:opacity-100' color={'#EEEEEE'} />
        </button>
      </div>

      <div className='flex flex-col items-center w-[min(90%,700px)] mx-auto'>
        <div className='w-[220px] h-[350px] md:w-[310px] md:h-[460px] border-white border-solid border-[5px] relative'>
          <Image fill alt='배우 사진' src={getImagePath(actor.profile_path) || '/film1.jpg'} className='object-cover object-center' />
        </div>

        <section className='w-full mt-5'>
          <h3 className='text-[#86C49B] flex items-center font-bold gap-2 pb-2 border-b-[1px] border-[#86C49B]'>
            <IoPersonSharp size={16} />
            <span className='text-[16px]'>PROFILE</span>
          </h3>
        </section>
      </div>

    </div>
  )
}

export default ActorModal;