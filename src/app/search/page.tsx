import axios from "axios";
import SearchBar from "@/components/search/SearchBar";
import SearchContents from "@/container/SearchContents";
import MovieBackdrop from "@/container/detail/MovieBackdrop";
import { Suspense } from "react";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
};

const Page = () => {
  
  

  return (
    <div>
      {/* 헤더 (임시) */}
      <div className=" bg-[#091A38] shadow-black shadow-md h-[60px] text-center lg:h-[80px] header-padding m-auto"  />
      <Suspense>
        <MovieBackdrop images={[]}/>
        <SearchBar/>
        <SearchContents>
        </SearchContents>
      </Suspense>
    </div>
  )
}

export default Page;
