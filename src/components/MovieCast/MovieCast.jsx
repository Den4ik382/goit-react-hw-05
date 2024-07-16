import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../api/api";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";
export default function MovieCast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const response = await Movie(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+photo";

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.list}>
          {cast.length > 0 ? (
            <ul>
              {cast.map(({ id, profile_path, original_name, character }) => {
                return (
                  <li key={id}>
                    <img
                      className={css.img}
                      src={
                        profile_path
                          ? `https://image.tmdb.org/t/p/original/${profile_path}`
                          : defaultImg
                      }
                      alt={original_name}
                    />
                    <div>
                      <h2>{original_name}</h2>
                      <p>
                        Role: <span>{character}</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>List is empty!</p>
          )}
        </div>
      )}
    </>
  );
}
