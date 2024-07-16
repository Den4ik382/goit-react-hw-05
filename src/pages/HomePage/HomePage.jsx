import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { TrandMovies } from "../../api/api";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        setloading(true);
        const response = await TrandMovies();
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };

    fetchTrendingMovie();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        movies.length > 0 && <MovieList movies={movies} />
      )}
    </>
  );
}
