'use client';

import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { FaRegImages } from 'react-icons/fa';
import Image from 'next/image';
import getImagePath from '@/utils/getImagePath';
import FsLightbox from 'fslightbox-react';
import LazyImage from '@/components/LazyImage';

interface MovieImageSectionProps {
  images: any;
}

export const MovieImageSection: React.FC<MovieImageSectionProps> = ({
  images,
}) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number: number) {
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
          icon={<FaRegImages color={'#03b3e4'} size={28} />}
          text="관련 이미지"
        />
        {images.length ?
          <ul className="flex overflow-x-auto gap-[15px] py-4">
            {images.slice(0, 20).map((image: any, idx: number) => {
              return (
                <li
                  key={idx}
                  className="flex-shrink-0 group cursor-pointer border-[#EEEEEE] border-solid border-[5px]"
                  onClick={() => openLightboxOnSlide(idx + 1)}
                >
                  <LazyImage
                    src={getImagePath(image.file_path) || '/no-image.jpg'}
                    containerClass='w-[240px] h-[135px] overflow-hidden'
                    ImageClass="object-cover group-hover:scale-110 transition-all duration-500"
                    alt='영화 사진'
                  />
                </li>
              );
            })}
          </ul>
          :
          <div className='flex justify-center items-center text-[#CCCCCC] h-[100px]'>
            관련 이미지 정보가 없습니다.
          </div>
        }
      </section>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images
          .slice(0, 20)
          .map((image: any) => getImagePath(image.file_path))}
        slide={lightboxController.slide}
      />
    </>
  );
};
