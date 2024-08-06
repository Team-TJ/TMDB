'use client'
import Image from "next/image";
import {Carousel, CarouselContent,CarouselItem} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import React, { useEffect, useRef, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const MovieBackdrop = ({ images }: { images : any[]}) => {
  const [api, setApi] = useState<CarouselApi>();
  const imgRef = useRef<any>(null)

  const playZoomOutAnim = (element : HTMLElement) => {
    element.animate(
      [
          { transform: "scale(1.1)" },
          { transform: "scale(1.0)" },
      ],
      {
          duration: 5000,
          easing: "linear",
          iterations: 1,
      }
    );
  }

  useEffect(() => {
    if (!api) return;

    // carousel 초기 마운트 시, 맨 첫번째 사진의 애니메이션을 재생시킴
    const nodeList = api.slideNodes(); 
    imgRef.current = nodeList[0].querySelector('img')
    playZoomOutAnim(imgRef.current)

    // carousel의 슬라이드가 바뀔때마다 현재 슬라이드 이미지의 애니메이션을 재생시킴 
    api.on('select', () => {      
      let selectedNodeIndex = api.selectedScrollSnap()
      const selectedNode = nodeList[selectedNodeIndex];
      imgRef.current = selectedNode.querySelector('img');          
      playZoomOutAnim(imgRef.current)
    })

    // carousel이 초기화되어 다시 시작할 경우, 애니메이션도 다시 재생될 수 있도록 함
    api.on('reInit', () => {
      playZoomOutAnim(imgRef.current);
    }) 

    // 브라우저 탭 비활성화 상태에서 활성화 상태로 전환될 때, carousel이 다시 시작될 수 있도록 함
    const handlevisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        api.reInit();
      }
    }
    document.addEventListener('visibilitychange', handlevisibilityChange);
    return () => document.removeEventListener('visibilitychange', handlevisibilityChange);

  }, [api])

  return (
    <Carousel 
      opts={{loop : true}}
      className="absolute top-[60px] w-full z-[-1] lg:top-[80px]" 
      plugins={[Autoplay({delay : 5000}), Fade()]}
      setApi={setApi}
    >
      <CarouselContent>
        {images.map((image: any, idx : number) => {
          return (
            <CarouselItem key={idx}>
              <div className="relative h-[450px] lg:h-[300px] overflow-hidden">
                <Image
                  fill
                  className={cn("object-cover object-center lg:brightness-[50%] scale-[1.1]", api && 'scale-[1.0]')}
                  src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
                  alt="이미지"
                  ref={imgRef}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#091A38] from-[5%]"></div>
    </Carousel>
  );
};

export default MovieBackdrop;
