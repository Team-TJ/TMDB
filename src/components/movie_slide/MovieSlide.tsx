"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SiThemoviedatabase } from "react-icons/si";
import { BsCalendarDayFill } from "react-icons/bs";
import { MdInsertChart } from "react-icons/md";
import { FaComments } from "react-icons/fa6";
import MovieContent from "../movie/MovieContent";
interface MovieSlideType {
  title?: string;
}
export default function MovieSlide(props: MovieSlideType) {
  return (
    <>
      <article className="pt-[40px] w-full my-0 mx-auto">
        <h2 className="flex w-[min(90%,1600px)] mx-auto items-center mb-5 text-2xl after:flex-1 after:content-[''] after:ml-[10px] after:border-t-[1px] after:border-solid after:border-white/30">
          {props.title === "popular" && (
            <>
              <SiThemoviedatabase className="text-[#03b3e4] mr-[10px]" />
              <em className="font-semibold text-white">현재 인기 영화</em>
            </>
          )}
          {props.title === "new" && (
            <>
              <BsCalendarDayFill className="text-[#03b3e4] mr-[10px]" />
              <em className="font-semibold text-white">최신, 개봉 예정 영화</em>
            </>
          )}
          {props.title === "rating" && (
            <>
              <MdInsertChart className="text-[#03b3e4] mr-[10px]" />
              <em className="font-semibold text-white">평점이 높은 영화</em>
            </>
          )}
          {props.title === "weekend" && (
            <>
              <FaComments className="text-[#03b3e4] mr-[10px]" />
              <em className="font-semibold text-white">주간 화제 영화</em>
            </>
          )}
        </h2>
        <div>
          <Carousel
            className="w-full"
            opts={{ loop: true, align: "start", slidesToScroll: 3 }}
            plugins={[]}
          >
            <CarouselContent className="w-full py-[25px] -ml-32">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem className="basis-auto pl-[20px]" key={index}>
                  <MovieContent index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </article>
    </>
  );
}
