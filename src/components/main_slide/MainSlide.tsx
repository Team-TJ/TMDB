"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import MainContent from "../main_content/MainContent";

export default function MainSlide() {
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
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem className="w-full h-full" key={index}>
              <MainContent />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
