'use client';

import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { FaVideo } from "react-icons/fa";
import { IoIosPlayCircle } from "react-icons/io";
import Image from 'next/image';
import getImagePath from '@/utils/getImagePath';
import FsLightbox from 'fslightbox-react';

interface MovieVideoSectionProps {
  videos?: any;
}

const MovieVideoSection: React.FC<MovieVideoSectionProps> = ({ videos }) => {
  const [youtubeVideos, setYoutubeVideos] = useState([])
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  useEffect(() => {
    const list = videos.filter((video: any) => video.site === "YouTube")
    setYoutubeVideos(list.slice(0, 20))
  }, [])

  const openLightboxOnSlide = (number: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <section className="px-[5%] max-w-[1600px] mx-auto">
        <SectionTitle
          className="mt-8 mb-0"
          icon={<FaVideo color={'#03b3e4'} size={28} />}
          text="관련 영상"
        />
        {videos.length ?
          <ul className="flex overflow-x-auto gap-[15px] py-4">
            {youtubeVideos.map((video: any, idx: number) => {
              return (
                <li
                  key={idx}
                  className="flex-shrink-0 group cursor-pointer border-[#EEEEEE] border-solid border-[5px]"
                  onClick={() => openLightboxOnSlide(idx + 1)}
                >
                  <div className="w-[240px] h-[135px] relative overflow-hidden">
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
                      className="object-cover transition-all duration-300 group-hover:brightness-50"
                      alt="영상 썸네일"
                    />
                    <IoIosPlayCircle color={'#FFFFFF'} size={42} className='opacity-0 absolute abs-center group-hover:opacity-100 transition-all duration-300' />
                  </div>
                </li>
              );
            })}
          </ul>
          :
          <div className='flex justify-center items-center text-[#CCCCCC] h-[100px]'>
            관련 영상 정보가 없습니다.
          </div>
        }
      </section>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={youtubeVideos.map((video: any) => `https://www.youtube.com/watch?v=${video.key}`)}
        slide={lightboxController.slide}
        exitFullscreenOnClose={true}
      />
    </>
  )
}

export default MovieVideoSection