'use client'
import { fetchMovieImages } from "@/services/movieAPIs";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { useRef } from "react";

const MovieBackdrop = ({ images }: { images : any[]}) => {
  const imageRef = useRef(null);

  return (
    <Carousel 
      opts={{loop : true}}
      className="absolute top-[60px] w-full z-[-1] lg:top-[80px]" 
      plugins={[Autoplay({delay : 5000}), Fade()]}
    >
      <CarouselContent>
        {images.map((image: any) => {
          return (
            <CarouselItem>
              <div className="relative h-[450px] lg:h-[300px] overflow-hidden">
                <Image
                  ref={imageRef}
                  fill
                  className="object-cover object-center lg:brightness-[50%]"
                  src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
                  alt="이미지"
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
