import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const fetchMovieSearch = async (input:string, lang : string = 'en-US') => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=true&language=${lang}&page=1`); 
    return response.data;
}