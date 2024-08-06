import axios from "axios";

const apiKey = process.env.TMDB_API_KEY;


export const fetchMovieDetail = async (movieId:string, lang : string = 'en-US') => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${lang}`); 
    return response.data;
}

export const fetchMovieCredits = async (movieId : string, lang : string = 'en-US') => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=${lang}`);
    return response.data;
}

export const fetchMovieImages = async (movieId : string)  => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`)
    return response.data;
}