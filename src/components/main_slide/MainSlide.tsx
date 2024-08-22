"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import MainContent from "../main_content/MainContent";
import axios from "axios";
import { useEffect, useState, lazy, Suspense } from "react";

export default function MainSlide() {
  const [data, setData] = useState<[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_TOKKEN}`,
    },
  };
  useEffect(() => {
    axios.get(url, options).then((res) => {
      let sliceData = res.data.results.slice(0, 5);
      setData(sliceData);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
          {data ? (
            data.map((movie, index) => (
              <CarouselItem className="w-full h-full" key={index}>
                <MainContent movie={movie} />
              </CarouselItem>
            ))
          ) : (
            <div>loading...</div>
          )}
        </CarouselContent>
      </Carousel>
    </>
  );
}
