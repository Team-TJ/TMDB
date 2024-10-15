"use client";

import MainContent, { type Movie } from "@/components/main_content/MainContent";
import MovieContent from "@/components/movie/MovieContent";
import axios from "axios";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const SearchContents = () => {
  const params = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  let data: any;
  useEffect(() => {
    const searchParam = params.get("searchParam");
    const fetchData = async () => {
      if (searchParam) {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchParam}&include_adult=false&language=en-US&page=1`
        );
        setSearchResults(res.data.results);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div className="flex flex-wrap w-[90%] m-auto mt-10">
      {searchResults !== undefined
        ? searchResults.map((movie: any, i: any) => {
            return (
              <div className="m-1" key={i}>
                <MovieContent movie={movie} />
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default SearchContents;
