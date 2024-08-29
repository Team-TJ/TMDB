'use client';
import React, { MouseEventHandler } from 'react';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';

interface ActorModalProps {
  actorId: string;
  closeModal: MouseEventHandler;
}

const ActorModal: React.FC<ActorModalProps> = ({ actorId, closeModal }) => {
  return (
    <div className='fixed top-0 left-0 z-50 bg-[#000000cd] w-full h-full'>
      <button onClick={closeModal} className='absolute top-[3%] right-[3%] group'>
        <IoIosClose className='w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] opacity-80 group-hover:opacity-100' color={'#EEEEEE'} />
      </button>

      <div className='absolute w-[min(90%,700px)] mx-auto top-[6%]'>

      </div>


    </div>
  )
}

export default ActorModal