import MainSlide from "@/components/main_slide/MainSlide";
import MovieSlide from "@/components/movie_slide/MovieSlide";

export default function Home() {
  return (
    <>
      <section className="lg:pt-20 pt-16">
        <MainSlide />
      </section>
      <section className="min-h-[50vh]">
        <MovieSlide title="popular"></MovieSlide>
        <MovieSlide title="now_playing"></MovieSlide>
        <MovieSlide title="top_rated"></MovieSlide>
        <MovieSlide title="upcoming"></MovieSlide>
      </section>
    </>
  );
}
