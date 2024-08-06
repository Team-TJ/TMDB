import MainSlide from "@/components/main_slide/MainSlide";
import MovieSlide from "@/components/movie_slide/MovieSlide";

export default function Home() {
  return (
    <>
      <section className="lg:pt-20 sm:pt-16">
        <MainSlide />
      </section>
      <section className="min-h-[50vh]">
        <MovieSlide title="popular"></MovieSlide>
        <MovieSlide title="new"></MovieSlide>
        <MovieSlide title="rating"></MovieSlide>
        <MovieSlide title="weekend"></MovieSlide>
      </section>
    </>
  );
}
