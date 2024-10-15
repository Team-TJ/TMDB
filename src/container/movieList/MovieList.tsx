"use client";

import MainContent, { type Movie } from "@/components/main_content/MainContent";
import MovieContent from "@/components/movie/MovieContent";
import axios from "axios";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const MovieContents = ({listcategory}:{listcategory:any}) => {
  
  const [movieList, setMovieList] = useState([]);
  let data: any;
  useEffect(() => {
    
    const fetchData = async () => {
      if (listcategory) {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${listcategory}?language=en-US&page=1&api_key=${apiKey}`
        );
        setMovieList(res.data.results);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap w-[90%] m-auto mt-10">
      {movieList !== undefined
        ? movieList.map((movie: any, i: any) => {
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

export default MovieContents;
