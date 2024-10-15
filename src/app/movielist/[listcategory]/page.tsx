import axios from "axios";
import MovieList from "../../../container/movieList/MovieList"

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
};

const Page = ({ params }: { params: {listcategory:string} }) => {
  let listTitle;
  switch (params.listcategory) {
    case "now_playing":
      listTitle = "현재 상영작";
      break;
    case "popular":
      listTitle = "인기 영화";
      break;
    case "latestorupcomming":
      listTitle = "최신/개봉 예정";
      break;
  }
  return (
    <div>
      <h2 className="pt-16 lg:pt-20 flex w-[min(90%,1600px)] mx-auto items-center mb-5 text-2xl after:flex-1 after:content-[''] after:ml-[10px] after:border-t-[1px] after:border-solid after:border-white/30">
        {listTitle}
      </h2>
      <MovieList listcategory={params.listcategory}></MovieList>
    </div>
  );
};

export default Page;
