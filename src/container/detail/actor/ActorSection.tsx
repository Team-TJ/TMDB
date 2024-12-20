'use client';
import React, { useState } from 'react';
import { IoMdPeople } from "react-icons/io";
import SectionTitle from '../../../components/SectionTitle';
import ActorCard from './ActorCard';
import ActorModal from './ActorModal';

const ActorSection = ({ movieCredits }: { movieCredits: any }) => {
  const mainCast = movieCredits.cast.slice(0, 10);
  const [modalConfig, setModalConfig] = useState({
    isShow: false,
    actorId: {}
  })

  const handleModalShow = (actor: any) => () => {
    setModalConfig({
      isShow: true,
      actorId: actor.id
    })
  }

  const handleModalClose = () => {
    setModalConfig({ ...modalConfig, isShow: false })
  }

  return (
    <>
      <section className='px-[5%] max-w-[1600px] mx-auto'>
        <SectionTitle className='mt-8 mb-0' icon={<IoMdPeople color={'#03b3e4'} size={28} />} text='출연진' />
        {mainCast.length ?
          <ul className='flex overflow-x-auto gap-[15px] py-4'>
            {mainCast.map((actor: any) => {
              return (
                <ActorCard key={actor.id} actor={actor} onClick={handleModalShow(actor)} />
              );
            })}
          </ul>
          :
          <div className='flex justify-center items-center text-[#CCCCCC] h-[100px]'>
            출연진 정보가 없습니다.
          </div>
        }
      </section>
      {modalConfig.isShow ? <ActorModal actorId={modalConfig.actorId} closeModal={handleModalClose} /> : null}
    </>
  )
}

export default ActorSection