import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewsMowie } from "../../api/api";
import css from "./MovieReviews";
import Loader from "../Loader/Loader";

export default function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const response = await ReviewsMowie(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  const defaultImg =
    "https://banner2.cleanpng.com/20180519/kho/kisspng-http-404-error-message-desktop-wallpaper-5b007b757fad55.145442511526758261523.jpg";

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map(
                ({
                  id,
                  author_details: { name, username, avatar_path },
                  content,
                }) => {
                  return (
                    <li key={id} className={css.li}>
                      <div>
                        <img
                          className={css.img}
                          src={
                            avatar_path
                              ? `https://image.tmdb.org/t/p/original/${avatar_path}`
                              : defaultImg
                          }
                          alt={name}
                        />
                        <div>
                          <p>{name}</p>
                          <p>@{username}</p>
                        </div>
                      </div>
                      <p>{content}</p>
                    </li>
                  );
                }
              )}
            </ul>
          ) : (
            <p>We dont have any reviews for this movie.</p>
          )}
        </div>
      )}
    </>
  );
}
