import MainSlide from "@/components/main_slide/MainSlide";

export default function Home() {
  return (
    <>
      <section className="main_slide_section"></section>
      <MainSlide />
      <section className="move_slide_section">
        <article className="movie_slide">
          <h2></h2>

          <div className="movie">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3></h3>
              <div></div>
              <div></div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
