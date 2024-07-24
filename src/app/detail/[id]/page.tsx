import axios from "axios";

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<MovieDetailPageProps> = async ({ params }) => {
  let apiKey = "7105e5b5b38ae5649d69f0e2639eb114";
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
  );
  const { title, poster_path, backdrop_path, overview, original_title } = response.data;

  return (
    <div>
      {/* 헤더 (임시) */}
      <div className=" bg-[#091A38] shadow-black shadow-md h-[80px] text-center">
        header
      </div>

     
    </div>
  );
};

export default Page;
