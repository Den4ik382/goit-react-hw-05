import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTRmMjE2YzQ0ODI4ODg0N2I3NWI3YjkwZGJlYzg3MyIsIm5iZiI6MTcyMTA2ODI5MS4xNjA1MTMsInN1YiI6IjY2OTU2OTkyZTU1MWI1MTMwM2JmZjU5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.koiSTqoazpxTLYiSnzJS8wydc7ZtvYGTwlniuPJnptU";
const defParams = {
  language: "en-US",
};

const TrandMovies = async () => {
  const response = await axios.get("/trending/movie/day", defParams);
  return response.data;
};

const SearchMovie = async (query, page = 1) => {
  const response = await axios.get(`/search/movie`, {
    ...defParams,
    params: {
      query,
      page,
    },
  });
  return response.data;
};

const MovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`, defParams);
  return response.data;
};

const Movie = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};

const ReviewsMowie = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};

export { TrandMovies, SearchMovie, MovieDetails, Movie, ReviewsMowie };
