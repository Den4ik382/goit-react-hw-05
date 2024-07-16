import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { MovieDetails } from "../../api/api";
import MovieDetailsNavigation from "../../components/MovieDetailsNavigation/MovieDetailsNavigation";
import Loader from "../../components/Loader/Loader";
import css from "./MovieDetailsPage.module.css";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState({});

  const {
    poster_path,
    original_title,
    genres = [],
    budget,
    overview,
    release_date,
    vote_average,
  } = movie;

  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;

    const fetchDetails = async () => {
      try {
        const response = await MovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [movieId]);

  return (
    <div className="">
      <Link to={backLinkRef.current}>Go back</Link>
      <div>
        <img
          className={css.img}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
        />
        <div className={css.li}>
          <h2>{original_title}</h2>
          {genres.length > 0 && (
            <ul>
              {genres.map((genre) => (
                <li key={genre.id}>
                  <p>{genre.name}</p>
                </li>
              ))}
            </ul>
          )}
          <div>
            <p>
              Released: <span>{release_date}</span>
            </p>
            {budget > 0 && (
              <p>
                Budget: <span>{budget}$</span>
              </p>
            )}
            <p>
              Rating: <span>{Math.floor(vote_average)}/10</span>
            </p>
          </div>
          <p>{overview}</p>
        </div>
      </div>
      <div>
        <MovieDetailsNavigation />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
