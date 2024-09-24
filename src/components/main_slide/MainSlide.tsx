"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import MainContent from "../main_content/MainContent";
import { useEffect, useState, lazy, Suspense } from "react";
import { useAxios } from "@/hooks/useAxios";

export default function MainSlide() {
  const [data, setData] = useState<[] | null>(null);
  const url = "3/movie/now_playing?language=ko&page=1";
  const [instance] = useAxios();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await instance.get(url);
        let sliceData = response.data.results.slice(0, 5);
        setData(sliceData);
      } catch (e) {
        console.error(e);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 10000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="w-full h-[min(70vh,600px)] cursor-grab active:cursor-grabbing ml-[-0.5rem]">
          {data
            ? data.map((movie, index) => (
                <CarouselItem className="w-full h-full" key={index}>
                  <MainContent movie={movie} />
                </CarouselItem>
              ))
            : null}
        </CarouselContent>
      </Carousel>
    </>
  );
}
