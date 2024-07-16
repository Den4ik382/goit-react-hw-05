import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchMovies from "../../components/SearchMovies/SearchMovies";
import { useSearchParams } from "react-router-dom";
import { SearchMovie } from "../../api/api";
import Loader from "../../components/Loader/Loader";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchValue = searchParams.get("movie") ?? "";

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await SearchMovie(searchValue);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchMovies();
  }, [searchValue]);

  const handleSearchSubmit = (query) => {
    searchParams.set("movie", query);
    setSearchParams(searchParams);
  };

  return (
    <>
      <SearchMovies onSubmit={handleSearchSubmit} />
      {isLoading ? <Loader /> : <MovieList movies={movies} />}
    </>
  );
}
