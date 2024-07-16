import MovieListItem from "../MovieListItem/MovieListItem";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
